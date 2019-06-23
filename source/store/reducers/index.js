// Core
import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

// Reducers
import { weatherReducer as weather } from './weather/reducer';
import { uiReducer as ui } from './ui/reducer';

// Saga Watchers
import { watchUi } from '../reducers/ui/saga/watchers';
import { watchWeather } from './weather/saga/watchers';

export const rootReducer = combineReducers({
    weather,
    ui,
});

export function* rootSaga () {
    yield all([
        call(watchWeather),
        call(watchUi)
    ]);
}
