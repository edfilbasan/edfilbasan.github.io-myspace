import React from "react";

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
      />
    </div>
  );
};

export default ProjectCard;
