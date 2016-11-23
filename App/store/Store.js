/**
 * Created by atide on 2016/10/28.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';

const middlewares = [thunk];
const createLogger = require('redux-logger');

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

let store = createStoreWithMiddleware(RootReducer);
export default store;

