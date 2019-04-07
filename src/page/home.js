import React, { Component } from "react";
import Navigation from "../components/Navigation.js";
import Profile from "../components/Profile.js";
import Contact from "../components/Contact.js";
import Interests from "../components/Interests.js";
import "../styles/homeContent.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="homeContent">
          <div className="contentColumn">
            <Profile />
            <Contact />
            <Interests />
          </div>

          <div className="contentColumn">
            <h1 id="extendedNetwork">
              Edfil Basan is a digital product designer. <br /> He is in your
              extended network.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
