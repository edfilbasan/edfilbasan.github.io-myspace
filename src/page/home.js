import React, { Component } from "react";
import Navigation from "../components/Navigation.js";
import Profile from "../components/Profile.js";
import Contact from "../components/Contact.js";
import Interests from "../components/Interests.js";
import Details from "../components/Details.js";
import Education from "../components/Education.js";
import Blog from "../components/Blog.js";
import Blurbs from "../components/Blurbs.js";
import Projects from "../components/Projects.js";
import Comments from "../components/Comments.js";
import "../styles/HomeContent.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeContent">
          <Navigation />
          <div className="contentGrid">
            <div className="contentColumn">
              <Profile />
              <Contact />
              <Interests />
              <Details />
              <Education />
            </div>

            <div className="contentColumn">
              <h1 id="extendedNetwork">
                Edfil Basan is a digital product designer. <br /> He is in your
                extended network.
              </h1>
              <Blog />
              <Blurbs />
              <Projects />
              <Comments />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
