// Core
import { put, all, apply } from 'redux-saga/effects';

// Actions
import { startFetching, stopFetching, setErrorMessage } from '../../../ui/actions';
import { addCityWeather } from '../../actions';

// API
import { api } from '../../../../../API';

export function* weatherWorker ({ payload }) {
    try {
        yield put(startFetching());

        const { city, country } = payload;
        const cities = yield apply(localStorage, localStorage.getItem, [ 'cities' ]);

        if (cities && cities !== '[]') {
            const data = JSON.parse(cities);

            data.push({ city, country });

            yield apply(localStorage, localStorage.setItem, [ 'cities', JSON.stringify(data) ]);
        } else {
            yield apply(localStorage, localStorage.setItem, [ 'cities', JSON.stringify([ { city, country } ]) ]);
        }

        const [ currentWeather, dailyForecast ] = yield all([
            apply(api, api.weather.getCurrentWeather, [ { city, country } ]),
            apply(api, api.weather.getDailyForecast, [ { city, country } ])
        ]);

        yield put(addCityWeather({
            currentWeather,
            dailyForecast,
        }));
    } catch ({ message }) {
        yield put(setErrorMessage(message));
    } finally {
        yield put(stopFetching());
    }
}
