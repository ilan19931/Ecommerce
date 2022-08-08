import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    !auth.isAuthenticated && navigate("/");
  }, [auth.isAuthenticated, navigate]);

  return <>{props.children}</>;
};

export default PrivateRoute;
