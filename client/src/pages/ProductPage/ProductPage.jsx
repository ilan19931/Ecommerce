import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./productPage.module.css";
import { useEffect } from "react";
import { doLoadProduct } from "../../redux/actions/product.actions";
import Spinner from "./../../components/Layout/Spinner/Spinner";

const ProductPage = () => {
  const nf = Intl.NumberFormat();
  const { productId } = useParams();
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();

  const productImg = product?.images[0] || "";

  useEffect(() => {
    if (!product || product._id !== productId) {
      doLoadProduct(dispatch, productId);
    }
  }, [dispatch, product, productId]);

  return product && product.isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.productPage}>
      <div className="flex-column flex-start flex-1">
        <img src={productImg} alt="product img" />
      </div>

      <div className="flex-column flex-2">
        <h3>{product?.name}</h3>

        <p>{product?.description}</p>

        <hr />

        <strong>{nf.format(product?.price)} $</strong>
      </div>

      <div className="flex-column flex-start flex-1">
        <button className="btn btn-warning">Add To Cart</button>
        <button className="btn btn-success">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductPage;
