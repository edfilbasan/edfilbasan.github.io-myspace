import React from "react";
import "../styles/BlueContainer.css";
import BlueContainer from "./BlueContainer.js";

const Contact = () => {
  return (
    <div>
      <BlueContainer header={"Contacting Edfil"}>
        <section id="contactImages">
          <a
            href="mailto:edgdulay@berkeley.edu.com?Subject=Hi%20Edfil!"
            rel="noopener noreferrer"
          >
            <img
              alt="Send a message"
              src="./message.png"
              style={{ width: "132px", height: "16px", marginRight: "16px" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/edfilbasan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Add friend"
              src="./friends.png"
              style={{ width: "132px", height: "20px" }}
            />
          </a>
        </section>
      </BlueContainer>
    </div>
  );
};

export default Contact;
