import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./productPage.module.css";

const ProductPage = () => {
  const nf = Intl.NumberFormat();
  const { productId } = useParams();
  const products = useSelector((state) => state.product.products);

  const product = products.filter((p) => p._id !== productId)[0];

  return (
    <div className={styles.productPage}>
      <div className="flex-column flex-start flex-1">
        <img src={product.images[0]} alt="product img" />
      </div>

      <div className="flex-column flex-2">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <hr />

        <strong>{nf.format(product.price)} $</strong>
      </div>

      <div className="flex-column flex-start flex-1">
        <button className="btn btn-warning">Add To Cart</button>
        <button className="btn btn-success">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductPage;
