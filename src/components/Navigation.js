import React from "react";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div id="navigation">
        <section className="navLinkGroup">
          <a
            className="navLinkText"
            href="https://edfilbasan.github.io/work"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <p id="navDivider"> | </p>

          <a
            className="navLinkText"
            href="https://www.edfilbasan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
          <p id="navDivider"> | </p>

          <a
            className="navLinkText"
            href="https://www.edfilbasan.com/photo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photography
          </a>
          <p id="navDivider"> | </p>

          <a
            className="navLinkText"
            href="https://www.edfilbasan.com/musings"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <p id="navDivider"> | </p>

          <a
            className="navLinkText"
            href="mailto:edgdulay@berkeley.edu.com?Subject=Hi%20Edfil!"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <p id="navDivider"> | </p>

          <a
            className="navLinkText"
            href="https://github.com/edfilbasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <p id="navDivider"> | </p>

          <a
            className="navLinkText"
            href="https://www.linkedin.com/in/edfilbasan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <p id="navDivider"> | </p>

          <a
            className="navLinkText"
            href="https://twitter.com/edfilbasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </section>
      </div>
    </div>
  );
};

export default Navigation;
