import React from "react";
import "../styles/BlueContainer.css";
import BlueContainer from "./BlueContainer.js";

const Contact = () => {
  return (
    <div>
      <BlueContainer header={"Contacting Edfil"}>
        <section id="contactImages">
          <img
            alt="Send a message"
            src="./message.png"
            style={{ width: "132px", height: "16px", marginRight: "20px" }}
            onClick={() => console.log("do something")}
          />
          <img
            alt="Add friend"
            src="./friends.png"
            style={{ width: "132px", height: "20px" }}
            onClick={() => console.log("do something")}
          />
        </section>
      </BlueContainer>
    </div>
  );
};

export default Contact;
