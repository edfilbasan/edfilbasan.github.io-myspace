import React from "react";
import BlueContainer from "./BlueContainer.js";
import "../styles/Education.css";
import "../styles/BlueContent.css";

const Education = () => {
  return (
    <div>
      <BlueContainer header={"Edfil's Schools"}>
        <div className="blueEducationBlock">
          <section className="blueEducationHeader">
            <a
              href="https://www.google.com"
              id="blueEducationSchool"
              target="_blank"
            >
              University of California - Berkeley
            </a>
            <p> Berkeley, CALIFORNIA</p>
            <p> Graduated 2016 </p>
            <p> Major: Cognitive Science </p>
            <p> Minor: Education</p>
          </section>

          <p
            className="blueContentDetails"
            style={{ textAlign: "center", padding: "4px 0px 0px 0px" }}
          >
            2012 to 2016
          </p>
        </div>
      </BlueContainer>
    </div>
  );
};

export default Education;
