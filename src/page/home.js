import React, { Component } from "react";
import Navigation from "../components/navigation.js";
import Profile from "../components/profile.js";
import "../styles/homeContent.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="homeContent">
          <Profile />
          <h1 id="extendedNetwork">
            Edfil Basan is a digital product designer. <br />He is also in your
            extended network.
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
