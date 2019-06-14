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
    "https://static1.squarespace.com/static/5a9773bd96e76f01d45ad2ef/t/5c106101aa4a99e39247410f/1546484156970/2500x1667.png?format=1500w",
    "https://www.edfilbasan.com/upcomer"
  ],
  Vermeer: [
    "Vermeer",
    "https://media.licdn.com/dms/image/C4D0BAQFvBAs02HdK-w/company-logo_200_200/0?e=2159024400&v=beta&t=pPUIl5vxXsuhuTy96aingm5uZnbwty4E-PG265ES-sU",
    "https://www.getvermeer.com"
  ],
  Myspace: [
    "Myspace Project",
    "https://www.hypebot.com/.a/6a00d83451b36c69e201bb08985ade970d-800wi",
    "https://www.edfilbasan.com/sandbox#block-yui_3_17_2_1_1557259889017_31823"
  ]
  // Warmer: [
  //   "Warmer Project",
  //   "http://tinyurl.com/y4ds8v8l",
  //   "https://www.edfilbasan.com/warmer"
  // ],
};

const Projects = () => {
  return (
    <div className="orangeContentContainer">
      <OrangeHeader> Edfil's Top 6 Projects</OrangeHeader>
      <pre className="strongRedGroup">
        <strong>Edfil has </strong> <p className="redNumber">a lot</p>
        <strong> of projects.</strong>
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
        <strong style={viewProjects}> View All of Edfil's Projects</strong>
      </a>
    </div>
  );
};

export default Projects;
