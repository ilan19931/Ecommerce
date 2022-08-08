import axios from "axios";
import { profileActions } from "../slices/profile.slice";
import { uiActions } from "../slices/ui.slice";
import { setAlert } from "./ui.actions";

import dispatchErrors from "../../utils/dispatchErrors";

export async function loadProfile(dispatch) {
  try {
    const res = await axios.get("/profile");

    dispatch(profileActions.loadProfile(res.data));
  } catch (err) {
    console.log(err);
  }
}

export async function updateProfile(dispatch, data) {
  try {
    const res = await axios.put("/profile", data);

    dispatch(profileActions.updateProfile(res.data));

    setAlert(dispatch, { type: "success", msg: "Profile Updated!" });
  } catch (err) {
    console.log(err);

    dispatchErrors(dispatch, err);
  }
}
