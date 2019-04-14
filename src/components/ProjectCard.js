import React from "react";
import { getRandomInt } from "../utils.js";

const projectCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const projectTitleColor = {
  color: "#666666"
};

const ProjectCard = props => {
  return (
    <div style={projectCard}>
      <strong style={projectTitleColor}> {props.title}</strong>
      <img
        alt={props.alt}
        src={props.src}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: getRandomInt(100, 120)
        }}
      />
    </div>
  );
};

export default ProjectCard;
