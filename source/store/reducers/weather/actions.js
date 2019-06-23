// Types
import { types } from './types';

// Async
export const getWeather = (data) => ({
    type:    types.CITY_WEATHER_ASYNC,
    payload: data,
});

// Sync
export const fillWeather = (data) => ({
    type:    types.FILL_WEATHERS,
    payload: data,
});

export const addCityWeather = (data) => ({
    type:    types.ADD_CITY_WEATHER,
    payload: data,
});

export const removeCityWeather = (data) => ({
    type:    types.REMOVE_CITY_WEATHER,
    payload: data,
});
