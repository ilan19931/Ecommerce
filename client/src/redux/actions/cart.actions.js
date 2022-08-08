import axios from "axios";
import dispatchErrors from "../../utils/dispatchErrors";
import cartSlice, { cartActions } from "../slices/cart.slice";

export async function loadCart(dispatch) {
  try {
    const res = await axios.get("/cart");

    dispatch(cartActions.loadCart(res.data[0].products));
  } catch (err) {
    console.log(err);

    dispatchErrors(dispatch, err);
  }
}

export async function addToCart(dispatch, product) {
  try {
    const res = await axios.post("/cart/add", { product });

    dispatch(cartActions.loadCart(res.data.cart.products));
  } catch (err) {
    console.log(err);

    dispatchErrors(dispatch, err);
  }
}

export async function updateCartProduct(dispatch, props) {
  try {
    const res = await axios.put("/cart/update", {
      action: props.action,
      productId: props.productId,
    });

    dispatch(cartActions.loadCart(res.data.cart.products));
  } catch (err) {
    console.log(err);

    dispatch(cartActions.removeCart());
    dispatchErrors(dispatch, err);
  }
}
