import axios from "axios";
import dispatchErrors from "../../utils/dispatchErrors";
import { productActions } from "../slices/product.slice";

export async function doLoadProducts(dispatch) {
  try {
    const res = await axios.get("/product");

    dispatch(productActions.getAllProducts(res.data));
  } catch (err) {
    console.log(err);

    dispatchErrors(dispatch, err);
  }
}

export async function doLoadProduct(dispatch, productId) {
  try {
    const res = await axios.get(`/product/${productId}`);

    dispatch(productActions.getProduct(res.data));
  } catch (err) {
    console.log(err);

    dispatchErrors(dispatch, err);
  }
}
