import React, { Component } from "react";
import "./styles.css";

class person extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Houssem Labidi",
        bio: "I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript.",
        imgSrc: "https://avatars.githubusercontent.com/u/110753483?v=4",
        profession: "Full stack js",
      },
      shows: true,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTimeSinceMount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({
      timeSinceMount: prevState.timeSinceMount + 1,
    }));
  };

  resetTimeSinceMount = () => {
    this.setState({
      timeSinceMount: 0,
    });
  };

  toggleShowProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
      timeSinceMount: 0,
    }));
  };

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div>
        <button className="x" onClick={this.toggleShowProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
        <button className="x" onClick={this.resetTimeSinceMount}>
          Reset
        </button>
      </div>
    );
  }
}

export default person;
