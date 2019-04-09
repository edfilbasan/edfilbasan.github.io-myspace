import React from "react";
import "../styles/BlueContainer.css";
import BlueContainer from "./BlueContainer.js";

const Contact = () => {
  return (
    <div>
      <BlueContainer header={"Contacting Edfil"}>
        <section id="contactImages">
          <a
            href="mailto:someone@example.com?Subject=Hi%20Edfil!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Send a message"
              src="./message.png"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "132px", height: "16px", marginRight: "20px" }}
            />
          </a>

          <a href="https://www.linkedin.com/in/edfil">
            <img
              alt="Add friend"
              src="./friends.png"
              style={{ width: "132px", height: "20px" }}
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </section>
      </BlueContainer>
    </div>
  );
};

export default Contact;
