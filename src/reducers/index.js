import { combineReducers } from 'redux';
import items from  './items';
import form from './form'; 
const appReducers = combineReducers({
    items,
    form
})
export default appReducers;