import { ISLOADING_CENTERS, GET_DONATION_CENTERS } from "../actions/donationCenterAction";

const initialState = {
  loading: {
    content: true,
  },
  centers: {
    content: [],
  },
};
const donationCenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISLOADING_CENTERS:
      return {
        ...state,
        loading: {
          content: action.payload,
        },
      };
    case GET_DONATION_CENTERS:
      return {
        ...state,
        centers: {
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default donationCenterReducer;
