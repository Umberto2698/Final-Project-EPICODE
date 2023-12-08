export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const ISLOADING_MY_PROFILES_FALSE = "ISLOADING_MY_PROFILES_FALSE";
export const GET_MY_APPOINTMENTS = "GET_MY_APPOINTMENTS";
export const ISLOADING_MY_APPOINTMENTS_FALSE = "ISLOADING_MY_APPOINTMENTS_FALSE";

export const getMyProfileAction = (token) => {
  return async (dispatch) => {
    const URL = "http://localhost:8080/users/me";
    const method = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
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

export const getMyAppointments = (token, page) => {
  return async (dispatch) => {
    const URL = "ENDPOINT" + page;
    const method = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };
    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const MyAppointments = await resp.json();
        dispatch({ type: GET_MY_APPOINTMENTS, payload: MyAppointments });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ISLOADING_MY_APPOINTMENTS_FALSE });
    }
  };
};
