import React from "react";

import styles from "./Layout.module.css";
import Navbar from "./Navbar/Navbar";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Navbar />

      <div className={styles.body}>{props.children}</div>
    </div>
  );
};

export default Layout;
