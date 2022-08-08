import React from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import styles from "./checkout.module.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const profile = useSelector((state) => state.profile);

  const nf = Intl.NumberFormat();

  const shippingPrice = 15;
  let totalItems = 0;
  let totalPrice = 0;

  cart.products.forEach((product) => {
    totalItems += product.count;
    totalPrice += product.product.price * product.count;
  });

  return (
    <div className={styles.checkout}>
      <h2>Order Checkout</h2>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.leftSideContainer}>
            <div className={styles.leftSideItem}>
              <strong>Shipping Address</strong>

              {profile.firstName ? (
                <>
                  <span>
                    {profile.firstName} {profile.lastName}
                  </span>
                  <span>{profile.street}</span>
                  <span>
                    {profile.city}, {profile.zipCode}
                  </span>
                  <span>{profile.country}</span>
                  <span>Phone: {profile.phoneNumber}</span>
                </>
              ) : (
                <>
                  <p>There are no profile. Please create one</p>

                  <Link to="/profile" className="btn btn-warning">
                    Update Profile
                  </Link>
                </>
              )}
            </div>

            <div className={styles.leftSideItem}>
              <strong>Payment Method</strong>
              <span>Visa 6033</span>
            </div>

            <div className={styles.leftSideItem}>
              <strong>Coupon</strong>

              <div className={`${styles.coupon} form-group`}>
                <input type="text" className="form-control" />

                <button className="btn btn-success">Apply</button>
              </div>
            </div>
          </div>

          <div className={styles.leftSideContainer}>
            <div className={styles.itemsContainer}>
              {cart?.products.map((product) => (
                <div key={product._id} className={styles.item}>
                  <img src={product.product.images[0]} alt="product img" />

                  <div className="flex-column">
                    <strong>{product.product.name}</strong>

                    <p>{product.product.description}</p>

                    <strong>{nf.format(product.product.price)} $</strong>

                    <p>
                      Quantity: <span>{product.count}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <button className="btn btn-primary">Place Order</button>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, odit sint
            perspiciatis neque voluptatibus.
          </p>

          <div className={styles.summary}>
            <h4>Order Summary</h4>

            <div className={styles.summaryItem}>
              <span>Items ({nf.format(totalItems)}):</span>
              <span> {nf.format(totalPrice)} $</span>
            </div>

            <div className={styles.summaryItem}>
              <span>Shipping:</span>
              <span> {nf.format(shippingPrice)} $</span>
            </div>

            <hr />

            <div className={styles.summaryItem}>
              <span>Total:</span>
              <span> {nf.format(totalPrice + shippingPrice)} $</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
