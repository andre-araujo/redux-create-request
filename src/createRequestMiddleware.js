class FetchError extends Error {
  constructor(message = 'Undexpected fetch error') {
    super(message);
  }
}

const parseResponse = (resp) => {
  const isJSON = resp.headers.get('content-type').indexOf('json') !== -1;
  const respTemplate = {
    status: resp.status,
    payload: null,
  };

  if (isJSON) {
    return resp
      .json()
      .then(parsedResp => ({
        ...respTemplate,
        payload: parsedResp,
      }));
  }

  return respTemplate;
};

const createRequestMiddleware = store => next => (action) => {
  if (action.request) {
    const actionType = action.type;

    store.dispatch({
      type: actionType,
    });

    action
      .request()
      .then(parseResponse)
      .then((resp) => {
        store.dispatch({
          type: `${actionType}_SUCCESS`,
          ...resp,
        });
        return resp;
      })
      .catch((resp) => {
        store.dispatch({
          type: `${actionType}_ERROR`,
          ...resp,
          error: new FetchError(resp.message),
        });
        return resp;
      });
  } else {
    next(action);
  }
};

export default createRequestMiddleware;
