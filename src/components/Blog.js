import React from "react";

const blogColumn = {
  display: "grid",
  gridTemplateColumns: "auto",
  rowGap: "16px",
  marginBottom: "20px"
};

const Blog = () => {
  return (
    <div style={blogColumn}>
      <strong>Edfil's Latest Blog Entries</strong>
      <p>
        Comfortable (
        <a
          href="https://www.edfilbasan.com/comfortable"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
        )
      </p>
      <p>
        Floating Dandelions (
        <a
          href="https://www.edfilbasan.com/floating-dandelions"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
        )
      </p>
      <p>
        Hey Summer (
        <a
          href="https://www.edfilbasan.com/hey-summer"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
        )
      </p>
      <p>
        [
        <a
          href="https://www.edfilbasan.com/musings"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all Blog Entries
        </a>
        ]
      </p>
    </div>
  );
};

export default Blog;
