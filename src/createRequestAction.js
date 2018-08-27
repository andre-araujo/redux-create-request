const createRequestAction = (actionType, requestFunction) => {
  const actionCreator = {
    type: actionType,
    request: requestFunction,
  };

  return actionCreator;
};

export default createRequestAction;
