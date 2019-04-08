import React from "react";
import BlueContainer from "./BlueContainer.js";
import BlueContent from "./BlueContent.js";

const details = {
  Status: "Open to opportunities!",
  "Zodiac Sign": (
    <span>
      <a
        href="https://gizmodo.com/astrology-is-still-bullshit-and-the-universe-doesnt-car-5733709"
        target="_blank"
        rel="noopener noreferrer"
      >
        Capricorn
      </a>
    </span>
  ),
  Education: "Undergraduate Degree",
  Occupation: "Digital Product Designer \n Problem Solver \n Human"
};

const Details = () => {
  return (
    <div>
      <BlueContainer header={"Edfil's Details"}>
        {Object.keys(details).map((key, i) => {
          return (
            <BlueContent key={i} title={key}>
              {Object.values(details)[i]}
            </BlueContent>
          );
        })}
      </BlueContainer>
    </div>
  );
};

export default Details;
