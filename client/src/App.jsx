import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Layout from "./components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";
import Alerts from "./components/Layout/Alerts/Alerts";

import setAuthToken from "./utils/setAuthToken";
import { auth } from "./redux/actions/auth.actions";
import { useEffect } from "react";

import styles from "./App.module.css";
import { loadCart } from "./redux/actions/cart.actions";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/Layout/Routes/PrivateRoute";
import GuestRoute from "./components/Layout/Routes/GuestRoute";
import { loadProfile } from "./redux/actions/profile.actions";
import { doLoadCategories } from "./redux/actions/category.actions";
import Checkout from "./components/Checkout/Checkout";
import ProductPage from "./components/ProductPage/ProductPage";

const App = () => {
  const alerts = useSelector((state) => state.ui.alerts);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    doLoadCategories(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      setAuthToken(token);

      auth(dispatch);

      if (isAuthenticated) {
        loadCart(dispatch);

        loadProfile(dispatch);
      }
    }
  }, [isAuthenticated, dispatch, token]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product/:productId" element={<ProductPage />} />

          {/* Guest Routes */}
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />

          <Route
            path="/register"
            element={
              <GuestRoute>
                <Register />
              </GuestRoute>
            }
          />

          {/* Private Routes */}
          <Route
            path="/profile/"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Home />} />
        </Routes>

        {alerts.length > 0 && <Alerts alerts={alerts} />}
      </Layout>
    </>
  );
};

export default App;
