import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createRequestMiddleware } from 'redux-create-request';

import { getRegionsReducer, countiesService } from './reducers';

const store = createStore(
  combineReducers({
    regions: getRegionsReducer,
    counties: countiesService.reducer,
  }),
  applyMiddleware(createRequestMiddleware),
);

export default store;
