export const COUNT_DONATIONS = "COUNT_DONATIONS";

export const getDonationsCount = (token) => {
  return async (dispatch) => {
    const URL = "http://localhost:8080/donations";
    const method = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const count = await resp.json();
        dispatch({ type: COUNT_DONATIONS, payload: count });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
