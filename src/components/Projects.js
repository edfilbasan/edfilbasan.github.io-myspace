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
  Google: ["Google Project", "https://source.unsplash.com/random/"],
  Blastars: ["Blastars Project", "https://source.unsplash.com/random/"],
  "Look Around": ["Look Around Project", "https://source.unsplash.com/random/"],
  "Daily UI": [
    "Daily UI Challenge Project",
    "https://source.unsplash.com/random/"
  ],
  Upcomer: ["Upcomer Project", "https://source.unsplash.com/random/"],
  Warmer: ["Warmer Project", "https://source.unsplash.com/random/"],
  Myspace: ["Myspace Project", "https://source.unsplash.com/random/"]
};

const Projects = () => {
  return (
    <div className="orangeContentContainer">
      <OrangeHeader> Edfil 's Top 8 Projects</OrangeHeader>
      <pre className="strongRedGroup">
        <strong> Edfil has </strong> <p className="redNumber">8 </p>
        <strong> projects. </strong>
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
      <strong style={viewProjects}> View All of Edfil 's Projects</strong>{" "}
    </div>
  );
};

export default Projects;
