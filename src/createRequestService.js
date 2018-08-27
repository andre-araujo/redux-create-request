import createRequestAction from './createRequestAction';
import createRequestReducer from './createRequestReducer';

const createRequestService = ({
  type,
  request,
}) => ({
  action: (...restParams) => createRequestAction(type, () => request(...restParams)),
  reducer: createRequestReducer(type),
});

export default createRequestService;
