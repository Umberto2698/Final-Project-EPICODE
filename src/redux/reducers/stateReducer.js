import { IS_LOADING } from "../actions/loadingAction";
import { LOGIN_ERROR, REGISTER_ERROR, REGISTER_SUCCESS } from "../actions/loginActions";
const initialState = {
  loading: {
    content: false,
  },
  error: {
    content: "",
  },
  success: {
    content: "",
  },
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: {
          content: action.payload,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: {
          content: action.payload,
        },
      };
    case REGISTER_ERROR:
      return {
        ...state,
        error: {
          content: action.payload,
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        success: {
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default stateReducer;
