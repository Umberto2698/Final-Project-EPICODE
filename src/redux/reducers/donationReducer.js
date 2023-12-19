import { COUNT_DONATIONS } from "../actions/donationAction";

const initialState = {
  count: {
    content: null,
  },
};

const donationReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_DONATIONS:
      return {
        ...state,
        count: { content: action.payload },
      };
    default:
      return state;
  }
};

export default donationReducer;
