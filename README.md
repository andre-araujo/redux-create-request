# Redux Create Request.

A helper to make requests connected with redux without stress.

## Usage

### Install

`npm install redux-create-request --save`

### With Request Service Module
```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createRequestService, createRequestMiddleware } from 'redux-create-request';

const regionURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes';

const getRegionsService = createRequestService({
  type: 'GET_COUNTIES_REQUEST',
  promise: () => fetch(regionURL, { method: 'GET' })
});

const getRegions = getRegionsService.action;

const store = createStore(
  combineReducers({
    regions: getRegionsService.reducer,
    // more reducers...
  }),
  applyMiddleware(createRequestMiddleware),
);

store.subscribe(() =>
  console.log(store.getState().regions);
  // first dispatch {"loading":true,"loaded":false,"status":null,"error":null,"payload":null}
  // second dispatch {"loading":false,"loaded":true,"status":200,"error":null,"payload":[{"id":1101,"nome":"M ...
)

store.dispatch(getRegions());
```

### With Custom Request Action and Reducer:
```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createRequestAction, createRequestReducer, createRequestMiddleware } from 'redux-create-request';

const regionURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes';

const getRegions = () =>
  createRequestAction('GET_REGIONS_REQUEST')(() => fetch(regionURL, { method: 'GET' }));
const getRegionsReducer = createRequestReducer('GET_REGIONS_REQUEST');

const store = createStore(
  combineReducers({
    regions: getRegionsReducer,
    // more reducers...
  }),
  applyMiddleware(createRequestMiddleware),
);

store.subscribe(() =>
  console.log(store.getState().regions);
  // first dispatch {"loading":true,"loaded":false,"status":null,"error":null,"payload":null}
  // second dispatch {"loading":false,"loaded":true,"status":200,"error":null,"payload":[{"id":1101,"nome":"M ...
)

store.dispatch(getRegions());
```
