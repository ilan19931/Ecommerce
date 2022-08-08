import React from "react";
import Alert from "./Alert";

import styles from "./alerts.module.css";

const Alerts = ({ alerts }) => {
  return (
    <div className={styles.alerts}>
      {alerts.length > 0 && alerts.map((alert) => <Alert key={alert._id} alert={alert} />)}
    </div>
  );
};

export default Alerts;
