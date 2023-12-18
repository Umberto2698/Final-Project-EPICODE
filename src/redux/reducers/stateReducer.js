import { ERROR_UPDATE } from "../actions/profileAction";
import { GET_DONATION_CENTERS_ERROR } from "../actions/donationCenterAction.js";
import { LOGIN_ERROR, REGISTER_ERROR, REGISTER_SUCCESS } from "../actions/loginActions";
const initialState = {
  error: {
    content: "",
  },
  success: {
    content: "",
  },
  errorList: {
    content: [],
  },
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        error: {
          content: action.payload,
        },
      };
    case GET_DONATION_CENTERS_ERROR:
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
    case ERROR_UPDATE:
      return {
        ...state,
        errorList: {
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default stateReducer;
