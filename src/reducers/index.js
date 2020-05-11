import { combineReducers } from 'redux';
import items from  './items';

const appReducers = combineReducers({
    items,

})
export default appReducers;