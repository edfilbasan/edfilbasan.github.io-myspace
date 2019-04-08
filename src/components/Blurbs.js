import React from "react";
import OrangeHeader from "./OrangeHeader.js";

const orangeStrong = {
  color: "#FF6500"
};

const orangeContentMargin = {
  marginBottom: "16px"
};

const Blurbs = () => {
  return (
    <div className="orangeContentContainer">
      <OrangeHeader> Edfil's Blurbs</OrangeHeader>
      <div style={orangeContentMargin}>
        <strong style={orangeStrong}>About me:</strong>
        <p>
          Hi there! I’m Edfil, a digital product designer coming from a
          background in academic human cognition research and advertising
          communication strategy. <br /> <br />I have experience helping Fortune
          500s, small to medium enterprises, and startups craft complex digital
          products that enrich the lives of their users.
        </p>
      </div>

      <div>
        <strong style={orangeStrong}>Who I'd like to meet:</strong>
        <p>Anyone who wants to team up and tackle complex problems!</p>
      </div>
    </div>
  );
};

export default Blurbs;
