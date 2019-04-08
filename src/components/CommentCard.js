import React from "react";

const commentsWrapper = {
  display: "grid",
  gridTemplateColumns: "1fr 1.73fr",
  marginBottom: "4px",
  columnGap: "4px"
};

const photoCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FF9933"
};

const commentCard = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#F9D6B4"
};

const date = {
  margin: "4px 0px 8px 4px"
};

const comment = {
  margin: "0px 4px"
};

const CommentCard = props => {
  return (
    <div style={commentsWrapper}>
      <div style={photoCard}>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "4px auto 8px auto" }}
        >
          {props.name}
        </a>
        <img
          alt={props.alt}
          src={props.src}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>

      <div style={commentCard}>
        <strong style={date}>{props.date}</strong>
        <p style={comment}> {props.comment} </p>
      </div>
    </div>
  );
};

export default CommentCard;
