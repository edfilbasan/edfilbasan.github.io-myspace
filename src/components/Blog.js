import React from "react";
import "../styles/Blog.css";

const Blog = props => {
  return (
    <div className="blogColumn">
      <strong>Edfil's Latest Blog Entries</strong>
      <p>
        Why designing for AR sucks. (
        <a href="https://www.google.com">View More</a>)
      </p>
      <p>
        Why designers should try coding (
        <a href="https://www.google.com">View More</a>)
      </p>
      <p>
        Another pretentious Blog Post (
        <a href="https://www.google.com">View More</a>)
      </p>
      <p>
        [<a href="https://www.google.com">View all Blog Entries</a>]
      </p>
    </div>
  );
};

export default Blog;
