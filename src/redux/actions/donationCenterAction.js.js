export const ISLOADING_CENTERS = "ISLOADING_CENTERS";
export const GET_DONATION_CENTERS = "GET_DONATION_CENTERS";
export const GET_DONATION_CENTERS_ERROR = "GET_DONATION_CENTERS_ERROR";

export const getDonationCenters = (token, region) => {
  return async (dispatch) => {
    dispatch({ type: ISLOADING_CENTERS, payload: true });
    const URL = "http://localhost:8080/centers/region/" + region;
    const method = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const centersList = await resp.json();
        dispatch({ type: GET_DONATION_CENTERS, payload: centersList });
      } else {
        const error = await resp.json();
        dispatch({ type: GET_DONATION_CENTERS_ERROR, payload: error.message });
      }
    } catch (error) {
      dispatch({ type: GET_DONATION_CENTERS_ERROR, payload: error.message });
    } finally {
      dispatch({ type: ISLOADING_CENTERS, payload: false });
    }
  };
};
