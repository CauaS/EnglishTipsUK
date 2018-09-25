import { combineReducers } from 'redux';
import drawerReducer from './drawerReducer';
import questionReducer from './questionReducer.js'


export default combineReducers({
    drawerReducer: drawerReducer,
    questionReducer: questionReducer
});