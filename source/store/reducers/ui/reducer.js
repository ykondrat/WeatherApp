// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    isFetching:    false,
    isInitialized: false,
    timeOfDay:     'day',
    errorMessage:  '',
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);
        case types.STOP_FETCHING:
            return state.set('isFetching', false);
        case types.INITIALIZE:
            return state.set('isInitialized', true);
        case types.SET_ERROR_MESSAGE:
            return state.set('errorMessage', action.payload);
        case types.SET_TIME_OF_DAY:
            return state.set('timeOfDay', action.payload);
        default:
            return state;
    }
};
