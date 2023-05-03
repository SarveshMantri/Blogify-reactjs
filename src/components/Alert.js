import React from "react";
import PropTypes from "prop-types";

function Alert({ alert }) {
  return (
    <div style={{ height: "60px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show p-2`}
          role="alert"
        >
          <p className="container py-0 my-0">{alert.message}</p>
        </div>
      )}
    </div>
  );
}

Alert.prototype = {
  alert: PropTypes.object,
};

export default Alert;
