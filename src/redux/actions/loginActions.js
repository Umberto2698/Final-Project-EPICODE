export const SAVE_TOKEN = "SAVE_TOKEN";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const fetchRegister = (name, surname, email, password) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          surname,
          password,
          email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        console.log("registered user");
      }
    } catch (err) {
      dispatch({ type: REGISTER_ERROR, payload: err.message });
    }
  };
};
export const fetchLogin = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_ERROR, payload: "" });
    try {
      const resp = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const token = await resp.json();
        dispatch({ type: SAVE_TOKEN, payload: token });
      } else {
        const errMessage = await resp.json();
        dispatch({ type: LOGIN_ERROR, payload: errMessage.message });
      }
    } catch (err) {
      dispatch({ type: LOGIN_ERROR, payload: err.message });
    }
  };
};
