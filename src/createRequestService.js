import createRequestAction from './createRequestAction';
import createRequestReducer from './createRequestReducer';

const createRequestService = ({
  type,
  promise,
}) => ({
  action: () => createRequestAction(type)(promise),
  reducer: createRequestReducer(type),
});

export default createRequestService;
