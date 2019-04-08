import React from "react";
import "../styles/BlueContainer.css";

const BlueContainer = props => {
  return (
    <div className="contactContainer">
      <p className="blueHeader"> {props.header} </p>
      {props.children}
    </div>
  );
};

export default BlueContainer;
