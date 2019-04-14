import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = props => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="projectCard">
        <strong className="projectTitle"> {props.title}</strong>
        <img
          alt={props.alt}
          src={props.src}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "100px",
            height: "92px",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>
    </a>
  );
};

export default ProjectCard;
