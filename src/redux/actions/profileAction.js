export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const ISLOADING_MY_PROFILES_FALSE = "ISLOADING_MY_PROFILES_FALSE";
export const UPDATE_MY_PROFILE = "UPDATE_MY_PROFILE";
export const ISLOADING_UPDATE_MY_PROFILE = "ISLOADING_UPDATE_MY_PROFILE";
export const ERROR_UPDATE = "ERROR_UPDATE";
export const DELETE_MY_PROFILE = "DELETE_MY_PROFILE";
export const GET_MY_APPOINTMENTS = "GET_MY_APPOINTMENTS";
export const ISLOADING_MY_APPOINTMENTS_FALSE = "ISLOADING_MY_APPOINTMENTS_FALSE";
import { SAVE_TOKEN } from "./loginActions";

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
    const URL = "http://localhost:8080/donations/me?page=" + page;
    const method = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
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

export const getMyAppointmentsByYear = (token, year, page) => {
  return async (dispatch) => {
    const URL = "http://localhost:8080/donations/me/" + year + "?page=" + page;
    const method = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const MyAppointments = await resp.json();
        dispatch({ type: GET_MY_APPOINTMENTS, payload: MyAppointments });
      } else {
        const errMessage = await resp.json();
        console.log(errMessage);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ISLOADING_MY_APPOINTMENTS_FALSE });
    }
  };
};

export const updateMyProfile = (
  token,
  bloodType,
  sex,
  region,
  name,
  surname,
  phone,
  address,
  height,
  weight,
  birthday
) => {
  return async (dispatch) => {
    const URL = "http://localhost:8080/users/me";
    const method = {
      method: "PUT",
      body: JSON.stringify({
        name,
        surname,
        phone,
        address,
        region,
        height,
        weight,
        bloodType,
        birthday,
        sex,
      }),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const myProfile = await resp.json();
        dispatch({ type: UPDATE_MY_PROFILE, payload: myProfile });
      } else {
        const errMessage = await resp.json();
        dispatch({ type: ERROR_UPDATE, payload: errMessage.errorsList });
      }
    } catch (error) {
      dispatch({ type: ERROR_UPDATE, payload: error.errorsList });
    } finally {
      dispatch({ type: ISLOADING_UPDATE_MY_PROFILE });
    }
  };
};

export const deleteMyProfile = (token) => {
  return async (dispatch) => {
    const URL = "http://localhost:8080/users/me";
    const method = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        dispatch({ type: DELETE_MY_PROFILE, payload: null });
        dispatch({ type: SAVE_TOKEN, payload: { token: "" } });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
