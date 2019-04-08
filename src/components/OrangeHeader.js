import React from "react";

const orangeText = {
  color: "#FF6500",
  backgroundColor: "#FFCC99"
};

const orangeMargin = {
  marginBottom: "8px"
};

const OrangeHeader = props => {
  return (
    <div style={orangeMargin}>
      <p className="blueHeader" style={orangeText}>
        {props.children}
      </p>
    </div>
  );
};

export default OrangeHeader;
