import React from "react";
import OrangeHeader from "./OrangeHeader.js";
import CommentCard from "./CommentCard.js";
// import { getRandomInt } from "../utils.js";

let commentData = {
  "Brian Streem": [
    "Brian Streem Photo",
    `https://media.licdn.com/dms/image/C4D03AQGxcEI757W96w/profile-displayphoto-shrink_800_800/0?e=1562198400&v=beta&t=8xJ-2WIdVgbARgkeZMw2eY2dwoiR26f-_jppH-3ZKog`,
    "April 8th, 2019",
    "Edfil is a master of formulating design solutions. He takes the time to understand not only user needs, but also production capabilities business KPI's. He was instrumental to helping Vermeer Drones secure $500K in funding from Genius NY. ",
    "https://www.linkedin.com/in/brianstreem/"
  ],
  "Julia Kinsella": [
    "Julia Kinsella Photo",
    `https://media.licdn.com/dms/image/C5103AQHiHXAcFZ_Gog/profile-displayphoto-shrink_800_800/0?e=1562198400&v=beta&t=DVTHrUDjjRb00V6GjIVvnvzlMftjdGZbYbPtZ_lT9f8`,
    "April 7th, 2019",
    "Edfil is incredible at what he does. He understands design and production simultaneously. He delivered an amazing solution for our Thrift/ed app that didn't break the bank or exhaust my engineering team. Because of him, I won Marquette's Brewed Ideas Pitch Competition, securing $15K in funding",
    "https://www.linkedin.com/in/julie-kinsella-a54918116/"
  ],
  "Quincy Jones": [
    "Quincy Jones",
    `https://media.licdn.com/dms/image/C5603AQEwU5jg56LO5w/profile-displayphoto-shrink_800_800/0?e=1562198400&v=beta&t=4B6fTeRrkKl6k9RJWhtIMf7-MM35vbTGQ3yCda31NA0`,
    "March 3rd, 2019",
    "I was impressed with how quickly Edfil got onboard in helping our app Cueboom reach it's launch date. We had a competitor in our local that we needed to beat to market. We not only beat them to market, but produced a much better product. Make sure to checkout Cueboom in the app store!",
    "https://www.linkedin.com/in/quincy-jones-b4b21053/"
  ]
};

const Comments = () => {
  return (
    <div className="orangeContentContainer">
      <OrangeHeader>Edfil's Comments</OrangeHeader>
      <pre className="strongRedGroup">
        <strong>Displaying </strong>
        <p className="redNumber">3 </p>
        <strong>of </strong>
        <p className="redNumber">3 </p>
        <strong>comments </strong>
        <p>
          (
          <a href="mailto:edgdulay@berkeley.edu.com?Subject=Hi%20Edfil!">
            Add a comment
          </a>
          )
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
            link={Object.values(commentData)[i][4]}
          />
        );
      })}
    </div>
  );
};

export default Comments;
