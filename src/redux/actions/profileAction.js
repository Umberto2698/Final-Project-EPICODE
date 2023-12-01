export const GET_MY_PROFILE = "GET_MY_PROFILE";

export const ISLOADING_MY_PROFILES_FALSE = "ISLOADING_MY_PROFILES_FALSE";

export const getMyProfileAction = () => {
  return async (dispatch) => {
    const URL = "ENDPOINT";
    const method = {
      method: "GET",
      headers: {
        Authorization: "token",
      },
    };

    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const myProfile = await resp.json();

        dispatch({ type: GET_MY_PROFILE, payload: myProfile });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ISLOADING_MY_PROFILES_FALSE });
    }
  };
};
