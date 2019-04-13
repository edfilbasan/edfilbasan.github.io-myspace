import React from "react";
import OrangeHeader from "./OrangeHeader.js";
import ProjectCard from "./ProjectCard.js";
import { getRandomInt } from "../utils.js";

const projectGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  marginTop: "0px",
  marginBottom: "8px",
  rowGap: "16px",
  columnGap: "16px"
};

const viewProjects = {
  color: "#CC0000",
  marginLeft: "auto",
  textAlign: "right"
};

const projects = {
  "Google UI": [
    "Google Project",
    `https://source.unsplash.com/random/${getRandomInt(
      100,
      120
    )}x${getRandomInt(100, 100)}`
  ],
  Blastars: [
    "Blastars Project",
    `https://source.unsplash.com/random/${getRandomInt(
      100,
      105
    )}x${getRandomInt(100, 120)}`
  ],
  "Look Around": [
    "Look Around Project",
    `https://source.unsplash.com/random/${getRandomInt(
      100,
      101
    )}x${getRandomInt(100, 101)}`
  ],
  "Daily UI": [
    "Daily UI Challenge Project",
    `https://source.unsplash.com/random/${getRandomInt(
      100,
      102
    )}x${getRandomInt(100, 102)}`
  ],
  Upcomer: [
    "Upcomer Project",
    `https://source.unsplash.com/random/${getRandomInt(
      100,
      103
    )}x${getRandomInt(100, 104)}`
  ],
  Warmer: [
    "Warmer Project",
    `https://source.unsplash.com/random/${getRandomInt(
      100,
      110
    )}x${getRandomInt(100, 150)}`
  ],
  Myspace: [
    "Myspace Project",
    `https://source.unsplash.com/random/${getRandomInt(
      100,
      111
    )}x${getRandomInt(100, 111)}`
  ],
  Vermeer: [
    "Vermeer",
    `https://source.unsplash.com/random/${getRandomInt(
      100,
      111
    )}x${getRandomInt(100, 111)}`
  ]
};

const Projects = () => {
  return (
    <div className="orangeContentContainer">
      <OrangeHeader> Edfil's Top 8 Projects</OrangeHeader>
      <pre className="strongRedGroup">
        <strong> Edfil has </strong> <p className="redNumber">a lot</p>
        <strong> of projects. </strong>
      </pre>
      <div style={projectGrid}>
        {Object.keys(projects).map((key, i) => {
          return (
            <ProjectCard
              key={i}
              title={key}
              alt={Object.values(projects)[i][0]}
              src={Object.values(projects)[i][1]}
            />
          );
        })}
      </div>

      <a
        href="https://www.edfilbasan.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ float: "right" }}
      >
        <strong style={viewProjects}> View All of Edfil 's Projects</strong>
      </a>
    </div>
  );
};

export default Projects;
