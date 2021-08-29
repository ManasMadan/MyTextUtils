import React from "react";
import PropTypes from "prop-types";
function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          style={{ borderRadius: "0px" }}
          className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong> : {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;

Alert.propTypes = {
  alert: PropTypes.object,
};
