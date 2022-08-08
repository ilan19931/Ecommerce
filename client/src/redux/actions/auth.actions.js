import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

import { authActions } from "../slices/auth.slice";
import dispatchErrors from "../../utils/dispatchErrors";

export const auth = async (dispatch) => {
  try {
    const res = await axios.get("/auth/auth");

    dispatch(authActions.login({ token: res.data.token, user: res.data.user }));
  } catch (err) {
    console.log(err);

    localStorage.removeItem("token");
  }
};

export const login = async (dispatch, creds) => {
  try {
    const res = await axios.post("/auth/login", creds);

    setAuthToken(res.data.token);

    dispatch(authActions.login({ token: res.data.token, user: res.data.user }));
  } catch (err) {
    console.log(err);
    localStorage.removeItem("token");

    dispatchErrors(dispatch, err);
  }
};

export const register = async (dispatch, creds) => {
  try {
    const res = await axios.post("/auth/register", creds);

    setAuthToken(res.data.token);

    dispatch(authActions.login({ token: res.data.token, user: res.data.user }));
  } catch (err) {
    console.log(err);
    localStorage.removeItem("token");

    dispatchErrors(dispatch, err);
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem("token");

  dispatch(authActions.logout());
};
