import { uiActions } from "../slices/ui.slice";
import { v4 as uuid } from "uuid";

export const setAlert = (dispatch, alert) => {
  const newAlert = {
    ...alert,
    _id: uuid(),
  };

  dispatch(uiActions.addAlert(newAlert));

  setTimeout(() => {
    dispatch(uiActions.removeAlert(newAlert._id));
  }, 5000);
};
