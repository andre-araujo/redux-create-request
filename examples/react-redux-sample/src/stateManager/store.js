import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createRequestMiddleware } from 'redux-create-request';

import { regionsService } from './reducers';

const store = createStore(
  combineReducers({
    regions: regionsService.reducer,
  }),
  applyMiddleware(createRequestMiddleware),
);

export default store;
