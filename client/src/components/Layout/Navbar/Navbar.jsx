import React from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import styles from "./Navbar.module.css";
import { useEffect } from "react";

import { logout } from "../../../redux/actions/auth.actions";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const cartProducts = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  let cartProductsCnt = 0;

  cartProducts.map((product) => (cartProductsCnt += product.count));

  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <Link to="/">Ecommerce App</Link>

        {auth.isAuthenticated && (
          <span>
            {" "}
            | Welcome,{" "}
            <Link className={styles.email} to="/profile">
              {auth.user.email}
            </Link>
          </span>
        )}
      </div>

      <div className={styles.rightSide}>
        {auth.isAuthenticated ? (
          <>
            <Link to="/cart" className="btn btn-primary">
              Cart ( {cartProductsCnt} )
            </Link>
            <div className="btn btn-danger" onClick={() => logout(dispatch)}>
              Logout
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <div className="btn btn-primary">Login</div>
            </Link>

            <Link to="/register">
              <div className="btn btn-success">Register</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
