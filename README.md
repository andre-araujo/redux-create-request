# Redux Create Request.

A helper to make requests connected with redux without stress with only *607 B*.

## Why?

Creating requests connected with redux can be tedious and prone to inconsistencies, this library tries to reduce time spent coding repeated code when creating requests, given status to each request.

## Example:
```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createRequestService, createRequestMiddleware } from 'redux-create-request';

const regionURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes';

const getRegionsService = createRequestService({
  type: 'GET_REGIONS_REQUEST',
  request: () => fetch(regionURL, { method: 'GET' })
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
  console.log(store.getState().regions)
  // first dispatch {"loading":true,"loaded":false,"status":null,"error":null,"payload":null}
  // second dispatch {"loading":false,"loaded":true,"status":200,"error":null,"payload":[{"id":1101,"nome":"M ...
)

store.dispatch(getRegions());
```

## Usage

### Install

`npm install redux-create-request --save`

### createRequestMiddleware

Redux middleware that makes Redux Create Request works.

Intercepts any actions dispatched by `redux-create-request`.

```javascript
import { createStore, applyMiddleware } from 'redux';
import { createRequestMiddleware } from 'redux-create-request';

// ...

const store = createStore(
  rootReducer,
  applyMiddleware(createRequestMiddleware),
);

// ...
```

### createRequestService

A helper function to create request actions and reducers in a easy way.

It returns an object with both action and reducer functions.

```javascript
import { createRequestService } from 'redux-create-request';

const MY_REQUEST_ACTION_TYPE = 'MY_REQUEST_ACTION_TYPE',

const {
  action,
  reducer
} = createRequestService({
  type: MY_REQUEST_ACTION_TYPE,
  request: (param1, param2) => fetch(regionURL, { method: 'GET' })
});
```

#### Sintaxe

> createRequestService({ type: String, request: Function })

##### type
Action type that will me used by redux to dispatch request states (start, success and error)

##### request
The actual request action creator, it will be the function called by `createRequestService().action(...params)` and each param repassed to `request(...params)`, and it **must return a promise**

### Redux template
`createRequestService().reducer` manages request state using the following template:

```javascript

const defaultInitialState = {
  loading: false,
  loaded: false,
  status: null,
  error: null,
  payload: null,
};

```

##### loading
`true` when request start
`false` when request ends
`false` when request throws an error

##### loaded
`false` when request start
`true` when request ends
`false` when request throws an error

##### status
`null` when request start
Receives status code from request

##### error
`null` when request start
Receives error object when promise throws an error

##### payload
`null` when request start
Receives request payload when it has a `JSON` content-type header
