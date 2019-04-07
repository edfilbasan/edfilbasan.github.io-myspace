import React from "react";
import "../styles/containerBlue.css";

const ContainerBlue = props => {
  return (
    <div className="contactContainer">
      <p className="blueHeader">{props.header}</p>
      {props.children}
    </div>
  );
};

export default ContainerBlue;
