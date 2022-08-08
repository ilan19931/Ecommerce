import React from "react";

import spinnerImage from "../../../images/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <strong>Loading...</strong>
      <img src={spinnerImage} alt="loading..." />
    </div>
  );
};

export default Spinner;
