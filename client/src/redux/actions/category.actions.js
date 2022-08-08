import axios from "axios";
import { categoryActions } from "../slices/category.slice";

export async function doLoadCategories(dispatch) {
  try {
    const res = await axios.get("/category");

    dispatch(categoryActions.loadCategories(res.data));
  } catch (err) {
    console.log(err);
  }
}
