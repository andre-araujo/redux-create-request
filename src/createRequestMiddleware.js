const createRequestMiddleware = store => next => (action) => {
  if (typeof action === 'function' && action.requestActionType) {
    return action(store);
  }
  return next(action);
};

export default createRequestMiddleware;
