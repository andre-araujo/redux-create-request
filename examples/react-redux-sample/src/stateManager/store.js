import { createStore, combineReducers } from 'redux';
import { getRegionsReducer } from './reducers';

const store = createStore(combineReducers({
  regions: getRegionsReducer,
}));

export default store;
