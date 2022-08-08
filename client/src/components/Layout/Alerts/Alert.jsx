import React from "react";

import styles from "./alerts.module.css";

const Alert = ({ alert }) => {
  return (
    <div
      className={styles.alert}
      style={{ backgroundColor: alert.type === "Error" ? "red" : "green" }}
    >
      {alert.msg}
    </div>
  );
};

export default Alert;
