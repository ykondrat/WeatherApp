// Core
import { takeEvery } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { weatherWorker } from './workers/weatherWorker';
import { removeWeatherWorker } from './workers/removeWeatherWorker';

export function* watchWeather () {
    yield takeEvery(types.CITY_WEATHER_ASYNC, weatherWorker);
    yield takeEvery(types.REMOVE_CITY_WEATHER, removeWeatherWorker);
}
