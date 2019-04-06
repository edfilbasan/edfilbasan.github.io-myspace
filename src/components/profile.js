import React from "react";
import "../styles/profile.css";

const getCurrentDate = (separator = "/") => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${month}${separator}${date}${separator}${year}`;
};

const Profile = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "8px" }}>Edfil Basan</h1>
      <div style={{ display: "inline-flex" }}>
        <img
          id="profilePic"
          src="https://source.unsplash.com/random/148x148"
          alt="Profile Pic"
        />
        <div className="profileDetails">
          <p>"Make stuff."</p>

          <section>
            <p>2X years old</p>
            <p>California</p>
            <p>United States</p>
          </section>

          <img
            src="https://media.giphy.com/media/EU2pucC5YT20g/giphy.gif"
            style={{ width: "84px" }}
            alt="Online Now"
          />

          <p>
            Last Login: <br />
            {getCurrentDate()}
          </p>
        </div>
      </div>

      <section
        style={{
          marginTop: "8px",
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <strong>Mood:</strong>
        <p style={{ paddingLeft: "4px" }}> Mischievous</p>
        <img
          alt="mischievous"
          src="https://web.archive.org/web/20091026234641im_/http://www.geocities.com/darkfreed/moodicon/69.gif"
        />
      </section>

      <pre style={{ display: "flex", marginTop: "2px" }}>
        <p>View My: </p>
        <a href="www.google.com">Projects </a>|
        <a href="www.google.com"> Pics</a>
      </pre>
    </div>
  );
};

export default Profile;

// style={{ display: "flex", justifyContent: "space-between" }}
