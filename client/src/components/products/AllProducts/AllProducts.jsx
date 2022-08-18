import React from "react";

import styles from "./AllProducts.module.css";

import Product from "../Product/Product";
import { useEffect } from "react";
import { getAllProducts } from "../../../redux/actions/product.actions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Layout/Spinner/Spinner";

const AllProducts = ({ layoutNum }) => {
  const productsData = useSelector((state) => state.products);

  return (
    <div className={layoutNum === 3 ? styles.AllProducts : styles["AllProducts-4-cols"]}>
      {productsData.isLoading ? (
        <Spinner />
      ) : (
        productsData.products?.map((product) => <Product key={product._id} product={product} />)
      )}
    </div>
  );
};

export default AllProducts;
