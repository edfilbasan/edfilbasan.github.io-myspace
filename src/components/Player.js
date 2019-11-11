import React, { Component } from "react";
import "../styles/Player.css";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false
    };
    this.handleClick = this.togglePlay.bind(this);
    this.audio = new Audio("./MCR.mp3");
  }

  componentDidMount() {
    this.audio.addEventListener("ended", () => {
      this.setState({ isPlaying: !this.state.isPlaying });
    });
  }

  togglePlay = () => {
    this.setState(
      {
        isPlaying: !this.state.isPlaying
      },
      () => {
        this.state.isPlaying ? this.audio.play() : this.audio.pause();
      }
    );
  };

  swapPlayingButton = () => {
    switch (this.state.isPlaying) {
      case true:
        return ["mmp-pause-icon", "pause", "eq_play.gif"];
      case false:
        return ["mmp-play-icon", "play_arrow", "eq_pause.png"];
      default:
        return ["mmp-play-icon", "play_arrow", "eq_pause.png"];
    }
  };

  render() {
    return (
      <div className="mmp-ui-container">
        <div className="mmp-button-container">
          <button
            style={{ cursor: "crosshair" }}
            type="button"
            onClick={this.togglePlay}
          >
            <i
              className={`mmp-icon material-icons ${
                this.swapPlayingButton()[0]
              }`}
            >
              {this.swapPlayingButton()[1]}
            </i>
          </button>
        </div>

        <div className="mmp-display-container">
          <div className="mmp-song-info-container">
            <div className="mmp-song-name" style={{ fontWeight: "bold" }}>
              I'm Not Okay
            </div>
            <div className="mmp-artist-name"></div>My Chemical Romance
          </div>

          <div className="mmp-eq-container">
            <img
              style={{ height: "100%" }}
              src={this.swapPlayingButton()[2]}
              alt="Eq Icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
