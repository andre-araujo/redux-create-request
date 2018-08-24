const defaultInitialState = {
  loading: false,
  loaded: false,
  status: null,
  error: null,
  payload: null,
};

const createRequestReducer = (actionType, initialState) =>
  (state = { ...defaultInitialState, ...initialState }, action = {}) => {
    switch (action.type) {
      case actionType: {
        return {
          ...state,
          loading: true,
          status: null,
          error: null,
        };
      }
      case `${actionType}_SUCCESS`: {
        return {
          ...state,
          loaded: true,
          loading: false,
          status: action.status,
          payload: action.payload,
          error: null,
        };
      }
      case `${actionType}_ERROR`: {
        return {
          ...state,
          loaded: false,
          loading: false,
          status: action.status,
          payload: action.payload,
          error: action.error,
        };
      }
      default: {
        return state;
      }
    }
  };

export default createRequestReducer;
