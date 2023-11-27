import { IS_LOADING } from "../actions/loadingAction";

const initialState = {
  loading: {
    content: false,
  },
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: {
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default loadingReducer;
