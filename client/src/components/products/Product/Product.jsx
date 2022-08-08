import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/actions/cart.actions";

import styles from "./Product.module.css";

const Product = ({ product }) => {
  const { _id, name, description, price, images, brand } = product;

  const nf = Intl.NumberFormat();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleAddToCart() {
    addToCart(dispatch, product);
  }

  return (
    <div className={styles.Product}>
      <div className={styles.header}>
        <img src={images[0]} alt="product" className={styles.image} />
      </div>

      <div className={styles.body}>
        <p className={styles.name}>
          <Link to={`/product/${_id}`}>{name}</Link>
        </p>
        <p className={styles.price}>
          {nf.format(price)} <strong>ILS</strong>
        </p>
        <p className={styles.description}>{description}</p>
      </div>

      {auth.isAuthenticated && (
        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add To Cart
          </button>
          <button className="btn btn-success">Add To Wish List</button>
        </div>
      )}
    </div>
  );
};

export default Product;
