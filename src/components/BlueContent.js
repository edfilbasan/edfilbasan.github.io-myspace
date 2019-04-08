import React from "react";
import "../styles/BlueContent.css";

const BlueContent = props => {
  return (
    <div className="blueContentBlock">
      <p className="blueContentHeader"> {props.title || "Add Title"}</p>
      <p className="blueContentDetails linebreak">{props.children}</p>
    </div>
  );
};

export default BlueContent;
