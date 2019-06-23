// Core
import { List, fromJS } from 'immutable';

// Types
import { types } from './types';

const initialState = List();

const findCityIndex = (state, { id }) => state.findIndex((weather) => weather.get('currentWeather').get('id') === id);

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_WEATHERS:
            return fromJS(action.payload);
        case types.ADD_CITY_WEATHER:
            return state.push(fromJS(action.payload));
        case types.REMOVE_CITY_WEATHER:
            return state.remove(findCityIndex(state, action.payload));
        default:
            return state;
    }
};
