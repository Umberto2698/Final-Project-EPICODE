import { SAVE_TOKEN, LOGOUT } from "../actions/loginActions";

const initialState = {
  respLogin: {
    authorizationToken: { token: null },
  },
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        respLogin: {
          authorizationToken: action.payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        respLogin: {
          authorizationToken: action.payload,
        },
      };
    default:
      return state;
  }
};
export default LoginReducer;
