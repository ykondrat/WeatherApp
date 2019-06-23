// Core
import { createStore } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducer
import { rootReducer } from './reducers';

// Saga
import { rootSaga } from './reducers';

// Middleware
import { enhancedStore, history, sagaMiddleware } from './middleware';

export const store = createStore(
    connectRouter(history)(rootReducer),
    enhancedStore
);

export { history };

sagaMiddleware.run(rootSaga);
