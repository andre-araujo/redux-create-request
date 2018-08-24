const defaultInitialState = {
  loading: false,
  error: null,
  payload: {},
};

const createRequestReducer = (actionType, initialState) =>
  (state = { ...defaultInitialState, ...initialState }, action = {}) => {
    switch (action.type) {
      case actionType: {
        return {
          loading: true,
          ...state,
        };
      }
      case `${actionType}_SUCCESS`: {
        return {
          ...state,
          payload: state.payload,
          loading: false,
        };
      }
      case `${actionType}_ERROR`: {
        return {
          ...state,
          loading: false,
          error: state.error,
        };
      }
      default: {
        return state;
      }
    }
  };

export default createRequestReducer;
