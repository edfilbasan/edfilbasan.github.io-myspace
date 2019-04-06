import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div id="navigation">
      <section className="navLinkGroup">
        <a className="navLinkText"> Home </a>
        <p id="navDivider"> | </p>

        <a className="navLinkText"> Projects </a>
        <p id="navDivider"> | </p>

        <a className="navLinkText"> Photography </a>
        <p id="navDivider"> | </p>

        <a className="navLinkText"> Blog </a>
        <p id="navDivider"> | </p>

        <a className="navLinkText"> Contact </a>
        <p id="navDivider"> | </p>

        <a className="navLinkText" href="https://github.com/edfilbasan">
          Github
        </a>
        <p id="navDivider"> | </p>

        <a
          className="navLinkText"
          href="https://www.linkedin.com/in/edfilbasan/"
        >
          LinkedIn
        </a>
        <p id="navDivider"> | </p>

        <a className="navLinkText" href="https://twitter.com/edfilbasan">
          Twitter
        </a>
      </section>
    </div>
  );
};

export default Navigation;
