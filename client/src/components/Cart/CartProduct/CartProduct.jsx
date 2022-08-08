import React from "react";
import { useState } from "react";

import { updateCartProduct, removeFromCart } from "../../../redux/actions/cart.actions";
import { useDispatch } from "react-redux";

import styles from "./cartProduct.module.css";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const { count } = product;
  const { name, price, attributes } = product.product;

  const [quantity, setQuantity] = useState(count);
  const total = quantity * price;

  const nf = Intl.NumberFormat();
  let quantityHistory = count;

  function handleChange(event) {
    setQuantity(event.target.value);

    if (quantityHistory < event.target.value) {
      updateCartProduct(dispatch, { action: "add", productId: product.product._id });
      quantityHistory = event.target.value;
    } else {
      updateCartProduct(dispatch, { action: "remove", productId: product.product._id });
      quantityHistory = event.target.value;
    }

    quantityHistory = event.target.value;
  }

  return (
    <div className={styles.cartProduct}>
      <p>{name}</p>
      <p>{attributes}</p>
      <p>
        <strong>{nf.format(price)} $</strong>
      </p>
      <p>
        <input type="number" onChange={handleChange} value={quantity} min="0" />
      </p>
      <p>
        <strong>{nf.format(total)} $</strong>
      </p>
    </div>
  );
};

export default CartProduct;
