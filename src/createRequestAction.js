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

const createRequestAction = (requestType, requestFunction) => {
  const action = (dispatch) => {
    dispatch({
      type: requestType,
    });

    return requestFunction()
      .then(parseResponse)
      .then((resp) => {
        dispatch({
          type: `${requestType}_SUCCESS`,
          ...resp,
        });
        return resp;
      })
      .catch((resp) => {
        dispatch({
          type: `${requestType}_ERROR`,
          ...resp,
          error: new Error(resp),
        });
        return resp;
      });
  };

  action.requestActionType = requestType;

  return action;
};

export default createRequestAction;
