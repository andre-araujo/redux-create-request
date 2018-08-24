import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createRequestMiddleware } from 'redux-create-request';

import { getRegionsReducer } from './reducers';

const store = createStore(
  combineReducers({
    regions: getRegionsReducer,
  }),
  applyMiddleware(createRequestMiddleware),
);

export default store;
