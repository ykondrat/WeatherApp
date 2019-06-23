// Types
import { types } from './types';

// Async
export const initializeAsync = () => ({
    type: types.INITIALIZE_ASYNC,
});

// Sync
export const startFetching = () => ({
    type: types.START_FETCHING,
});

export const stopFetching = () => ({
    type: types.STOP_FETCHING,
});

export const initialize = () => ({
    type: types.INITIALIZE,
});

export const setErrorMessage = (message) => ({
    type:    types.SET_ERROR_MESSAGE,
    payload: message,
});

export const setTimeOfDay = (time) => ({
    type:    types.SET_TIME_OF_DAY,
    payload: time,
});
