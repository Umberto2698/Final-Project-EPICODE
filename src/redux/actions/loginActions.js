export const SAVE_TOKEN = "SAVE_TOKEN";

export const fetchRegister = (name, surname, email, password) => {
  return async () => {
    try {
      const resp = await fetch("ENDPOINT", {
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
        console.log("utente registrato");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("ENDPOINT", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const token = await resp.json();
        dispatch({ type: SAVE_TOKEN, payload: token });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
