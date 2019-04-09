import React from "react";

const getCurrentDate = (separator = "/") => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${month}${separator}${date}${separator}${year}`;
};

const profileDetails = {
  marginLeft: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

const Profile = () => {
  return (
    <div
      style={{
        marginBottom: "20px"
      }}
    >
      <h1
        style={{
          marginBottom: "8px"
        }}
      >
        Edfil Basan
      </h1>
      <div
        style={{
          display: "inline-flex"
        }}
      >
        <img
          id="profilePic"
          src="https://source.unsplash.com/random/180x180"
          alt="Profile Pic"
        />

        <div style={profileDetails}>
          <p> "Let's make some good stuff!!" </p>
          <section>
            <p> 2X years old </p> <p> California </p> <p> United States </p>
          </section>
          <section>
            <img
              src="https://media.giphy.com/media/EU2pucC5YT20g/giphy.gif"
              style={{
                width: "84px",
                marginBottom: "6px",
                marginLeft: "-4px"
              }}
              alt="Online Now"
            />
            <p>
              Last Login: <br /> {getCurrentDate()}
            </p>
          </section>
        </div>
      </div>

      <section
        style={{
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <strong> Mood: </strong>
        <p
          style={{
            paddingLeft: "4px"
          }}
        >
          Ecstatic
        </p>
        <img
          alt="mischievous"
          src="http://www.sherv.net/cm/emo/happy/happy.gif"
        />
      </section>

      <pre
        style={{
          display: "flex",
          marginTop: "2px",
          marginBottom: "0px"
        }}
      >
        <p>View My: </p> <a href="https://www.edfilbasan.com ">Projects</a>|
        <a href="https://www.edfilbasan.com/photo">Pics</a>
      </pre>
    </div>
  );
};

export default Profile;
