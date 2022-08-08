import React from "react";
import { useState } from "react";
import AllProducts from "../../products/AllProducts/AllProducts";

import styles from "./HomeMain.module.css";

const HomeMain = () => {
  const [properties, setProperties] = useState({
    layoutCols: 3,
  });

  return (
    <div className={styles.HomeMain}>
      <div className={styles.header}>
        <p>Change Layout: </p>

        <div
          className={styles.dotsContainer}
          onClick={() =>
            setProperties({
              ...properties,
              layoutCols: 3,
            })
          }
        >
          <i className="bi bi-square-fill"></i>
          <i className="bi bi-square-fill"></i>
          <i className="bi bi-square-fill"></i>
        </div>

        <div
          className={`${styles.dotsContainer}`}
          onClick={() =>
            setProperties({
              ...properties,
              layoutCols: 4,
            })
          }
        >
          <i className="bi bi-square-fill"></i>
          <i className="bi bi-square-fill"></i>
          <i className="bi bi-square-fill"></i>
          <i className="bi bi-square-fill"></i>
        </div>
      </div>

      <div className={styles.body}>
        <AllProducts layoutNum={properties.layoutCols} />
      </div>
    </div>
  );
};

export default HomeMain;
