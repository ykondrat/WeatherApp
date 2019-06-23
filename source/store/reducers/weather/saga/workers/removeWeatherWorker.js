// Core
import { put, apply } from 'redux-saga/effects';

// Actions
import { setErrorMessage } from '../../../ui/actions';

export function* removeWeatherWorker ({ payload }) {
    try {
        const cities = yield apply(localStorage, localStorage.getItem, [ 'cities' ]);
        const { city } = payload;

        if (cities && cities !== '[]') {
            const data = JSON.parse(cities);
            const filterData = data.filter((item) => item.city !== city);

            yield apply(localStorage, localStorage.setItem, [ 'cities', JSON.stringify(filterData) ]);
        }
    } catch ({ message }) {
        yield put(setErrorMessage(message));
    }
}
