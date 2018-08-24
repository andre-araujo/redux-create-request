import fetch from 'unfetch';

const createRequestAction = actionType => (url, options) => {
  const actionCreator = {
    type: actionType,

    request: () => fetch(url, options),
  };

  return actionCreator;
};

export default createRequestAction;
