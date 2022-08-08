import { setAlert } from "../redux/actions/ui.actions";

const dispatchErrors = (dispatch, err) => {
  try {
    const errors = err.response.data.errors;

    errors?.forEach((err) => setAlert(dispatch, { type: "Error", msg: err.msg }));
  } catch (err) {
    console.log(err);
  }
};

export default dispatchErrors;
