import React from "react";
import OrangeHeader from "./OrangeHeader.js";
import ProjectCard from "./ProjectCard.js";

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
    "http://tinyurl.com/y636zf9o",
    "https://www.edfilbasan.com/google-ui"
  ],
  Blastars: [
    "Blastars Project",
    "http://tinyurl.com/y6szejuu",
    "https://www.edfilbasan.com/blastars"
  ],
  "Look Around": [
    "Look Around Project",
    "http://tinyurl.com/y4hb73kj",
    "https://www.edfilbasan.com/lookaround"
  ],
  "Daily UI": [
    "Daily UI Challenge Project",
    "http://tinyurl.com/yy5kotmc",
    "https://www.edfilbasan.com/100"
  ],
  Upcomer: [
    "Upcomer Project",
    "http://tinyurl.com/yy5kotmc",
    "https://www.edfilbasan.com/upcomer"
  ],
  Warmer: [
    "Warmer Project",
    "http://tinyurl.com/y4ds8v8l",
    "https://www.edfilbasan.com/warmer"
  ],
  Myspace: [
    "Myspace Project",
    "https://www.hypebot.com/.a/6a00d83451b36c69e201bb08985ade970d-800wi",
    "https://edfilbasan.github.io/work"
  ],
  Vermeer: ["Vermeer", "https://bit.ly/2X8M9td", "https://www.aerobo.com"]
};

const Projects = () => {
  return (
    <div className="orangeContentContainer">
      <OrangeHeader> Edfil's Top 8 Projects</OrangeHeader>
      <pre className="strongRedGroup">
        <strong>Edfil has </strong> <p className="redNumber">8</p>
        <strong> projects.</strong>
      </pre>
      <div style={projectGrid}>
        {Object.keys(projects).map((key, i) => {
          return (
            <ProjectCard
              key={i}
              title={key}
              alt={Object.values(projects)[i][0]}
              src={Object.values(projects)[i][1]}
              link={Object.values(projects)[i][2]}
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
