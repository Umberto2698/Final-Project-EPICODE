import { GET_MY_PROFILE, ISLOADING_MY_PROFILES_FALSE } from "../actions/profileAction";
const initialState = {
  profile: null,
  isLoadingProfile: true,
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
    default:
      return state;
  }
};

export default profileReducer;
