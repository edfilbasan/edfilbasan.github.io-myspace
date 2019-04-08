import React from "react";

const OrangeHeader = props => {
  return (
    <strong
      style={{
        color: "#FF6500",
        backgroundColor: "#FFCC99",
        padding: "2px 0px 2px 4px",
        height: "23px"
      }}
    >
      {props.children}
    </strong>
  );
};

export default OrangeHeader;
