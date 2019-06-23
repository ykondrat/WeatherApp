// Core
import { put, apply, all } from 'redux-saga/es/effects';

// Actions
import {
    initialize,
    startFetching,
    stopFetching,
    setErrorMessage,
    setTimeOfDay
} from '../../actions';
import { fillWeather, addCityWeather } from '../../../weather/actions';

// API
import { api } from '../../../../../API';

export function* initializeWorker () {
    try {
        yield put(startFetching());

        const currentTime = new Date().getHours();
        const cities = yield apply(localStorage, localStorage.getItem, [ 'cities' ]);

        if (cities && cities !== '[]') {
            const data = yield all(JSON.parse(cities).reduce((accumulator, city) =>
                accumulator.concat(
                    apply(api, api.weather.getCurrentWeather, [ city ]),
                    apply(api, api.weather.getDailyForecast, [ city ])
                )
            , []));
            const weather = [];

            data.forEach((weatherData, index) => {
                if (!(index % 2)) {
                    weather.push({
                        currentWeather: weatherData,
                    });
                } else {
                    const cityWeather = weather.pop();

                    weather.push({
                        currentWeather: cityWeather.currentWeather,
                        dailyForecast:  weatherData,
                    });
                }
            });

            yield put(fillWeather(weather));
        } else {
            const [ currentWeather, dailyForecast ] = yield all([
                apply(api, api.weather.getCurrentWeather, [ { city: 'Kiev', country: 'Ukraine' } ]),
                apply(api, api.weather.getDailyForecast, [ { city: 'Kiev', country: 'Ukraine' } ])
            ]);

            yield put(addCityWeather({
                currentWeather,
                dailyForecast,
            }));
        }

        let timeOfDay = 'day';

        if (currentTime >= 0 && currentTime < 5) {
            timeOfDay = 'night';
        } else if (currentTime >= 5 && currentTime < 11) {
            timeOfDay = 'morning';
        } else if (currentTime >= 11 && currentTime < 16) {
            timeOfDay = 'day';
        } else if (currentTime >= 16 && currentTime < 22) {
            timeOfDay = 'evening';
        } else if (currentTime >= 22 && currentTime <= 24) {
            timeOfDay = 'night';
        }

        yield put(setTimeOfDay(timeOfDay));
        yield put(initialize());
    } catch ({ message }) {
        yield put(setErrorMessage(message));
    } finally {
        yield put(stopFetching());
    }
}
