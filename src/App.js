import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stateRed: true,
      stateBlue: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      stateRed: !prevState.stateRed,
      stateBlue: !prevState.stateBlue,
    }));
  };

  render() {
    const { stateRed, stateBlue } = this.state;

    const square1Style = {
      width: "200px",
      height: "200px",
      backgroundColor: stateRed ? "red" : "blue",
      cursor: "pointer",
    };

    const square2Style = {
      width: "200px",
      height: "200px",
      backgroundColor: stateBlue ? "red" : "blue",
      cursor: "pointer",
    };

    return (
      <>
        <div
          className="color-square"
          style={square1Style}
          onClick={this.handleClick}></div>

        <div
          className="color-square"
          style={square2Style}
          onClick={this.handleClick}></div>
      </>
    );
  }
}

export default App;
