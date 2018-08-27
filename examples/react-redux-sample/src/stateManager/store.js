import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createRequestMiddleware } from 'redux-create-request';

import { countiesService } from './reducers';

const store = createStore(
  combineReducers({
    counties: countiesService.reducer,
  }),
  applyMiddleware(createRequestMiddleware),
);

export default store;
