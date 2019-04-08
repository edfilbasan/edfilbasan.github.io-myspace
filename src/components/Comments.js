import React from "react";
import OrangeHeader from "./OrangeHeader.js";
import CommentCard from "./CommentCard.js";

let commentData = {
  "Brian Streem": [
    "Random Portrait",
    "https://source.unsplash.com/random/",
    "4/8/19",
    "Edfil did such a good job of making my life easier! Because of him I’m rich!"
  ],
  "Julia Kinsella": [
    "Random Portrait",
    "https://source.unsplash.com/random/",
    "4/8/19",
    "Don't hire this guy."
  ],
  "Quincy Jones": [
    "Random Portrait",
    "https://source.unsplash.com/random/",
    "4/8/19",
    "I had to hire Edfil because my other designer quit after not paying her. What’s the deal?"
  ]
};

const Comments = props => {
  return (
    <div className="orangeContentContainer">
      <OrangeHeader>Edfil's Comments</OrangeHeader>
      <pre className="strongRedGroup">
        <strong>Displaying </strong>
        <p className="redNumber">5 </p>
        <strong>of </strong>
        <p className="redNumber">5 </p>
        <strong>comments </strong>
        <p>
          (<a href="https://www.google.com">Add a comment</a>)
        </p>
      </pre>

      {Object.keys(commentData).map((key, i) => {
        return (
          <CommentCard
            key={i}
            name={key}
            alt={Object.values(commentData)[i][0]}
            src={Object.values(commentData)[i][1]}
            date={Object.values(commentData)[i][2]}
            comment={Object.values(commentData)[i][3]}
          />
        );
      })}
    </div>
  );
};

export default Comments;

// <pre style={projectAmount}>
//         <strong>Edfil has </strong> <p className="redNumber">8 </p>
//         <strong>projects.</strong>
//       </pre>
