import {
  GET_MY_PROFILE,
  ISLOADING_MY_PROFILES_FALSE,
  UPDATE_MY_PROFILE,
  ISLOADING_UPDATE_MY_PROFILE,
  DELETE_MY_PROFILE,
  GET_MY_APPOINTMENTS,
  ISLOADING_MY_APPOINTMENTS_FALSE,
} from "../actions/profileAction";

const initialState = {
  profile: null,
  isLoadingProfile: true,
  appointments: null,
  isLoadingAppointments: true,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return { ...state, profile: action.payload };
    case ISLOADING_MY_PROFILES_FALSE:
      return {
        ...state,
        isLoadingProfile: false,
      };
    case UPDATE_MY_PROFILE:
      return { ...state, profile: action.payload };
    case ISLOADING_UPDATE_MY_PROFILE:
      return {
        ...state,
        isLoadingProfile: false,
      };
    case DELETE_MY_PROFILE:
      return { ...state, profile: action.payload };
    case GET_MY_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case ISLOADING_MY_APPOINTMENTS_FALSE:
      return {
        ...state,
        isLoadingAppointments: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
