/**
 * Created by atide on 2016/10/28.
 */
import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import DynamicReducer from './DynamicReducer';
import CollectionReducer from './CollectionReducer';
export default rootReducer = combineReducers({
    HomeReducer,
    DynamicReducer,
    CollectionReducer
})
