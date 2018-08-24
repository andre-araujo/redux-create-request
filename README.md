# Redux Create Request.

A helper to make requests connected with redux without stress.

## Usage

### Example in one file:
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

### Step-by-step

#### Install

`npm install redux-create-request --save`

#### Creating an action

```javascript
import { createRequestAction } from 'redux-create-request';

const regionURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes';

export const getRegions = () =>
  createRequestAction('GET_REGIONS_REQUEST')(() => fetch(regionURL, { method: 'GET' }));
```

#### Creating a reducer
```javascript
import { createRequestReducer } from 'redux-create-request';

export const getRegionsReducer = createRequestReducer('GET_REGIONS_REQUEST');
```

#### Creating the store
```javascript
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
```

### Creating Redux Promise Module
```javascript
import { createReduxPromise } from 'redux-create-request';

const regionURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes';

const {
  action,
  reducer
} = createReduxPromise({
  type: 'GET_REGIONS_REQUEST'
  promise: () => fetch(regionURL, { method: 'GET' })
});
```
