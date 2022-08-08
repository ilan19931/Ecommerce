import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./cart.module.css";
import CartProduct from "./CartProduct/CartProduct";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const nf = Intl.NumberFormat();

  let totalPrice = 0;

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <p>Shopping Cart ( 15 Items )</p>

        <div className={styles.headerActions}>
          <p>
            <i className="bi bi-filetype-pdf"></i> Export
          </p>
          | <p>Delete All</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.cartContainer}>
          <div className={styles["cartContainer-header"]}>
            <p>Product Name</p>
            <p>Attributes</p>
            <p>Unit price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p></p>
          </div>

          {products.length > 0 ? (
            products.map((product) => {
              totalPrice += product.product.price * product.count;

              return <CartProduct key={product.product._id} product={product} />;
            })
          ) : (
            <p>
              <strong>Empty Cart</strong>
            </p>
          )}
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryHeader}>Summary</div>

          <div className={styles.summaryBody}>
            <p>Additional changes may be applied at checkpoint.</p>

            <hr />

            <div className={`${styles.summaryText} h5`}>
              <span>
                <strong>Subtotal:</strong>
              </span>

              <span>
                <strong>{nf.format(totalPrice)} $</strong>
              </span>
            </div>

            <Link to="/checkout">
              <button className="btn btn-success">Proceed to Checkout</button>
            </Link>

            <span className="h5">
              <i className="bi bi-file-lock2"></i> Secured Checkout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
