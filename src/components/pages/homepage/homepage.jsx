import React from "react";
import Gamepage from "../gamepage/gamepage";
import { Switch, Route, Link } from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert("go to game page");

    // let val = event.target.value;
    // if (!Number(val)) {
    //   alert("Pick A Number!");
    // }
    // if (Number(val) && val % 2 != 1) {
    //   alert("Make sure your number is odd!");
    // }
    //alert("You Chose " + this.state.value);
  };

  render() {
    return (
      <div>
        <h1>Rock Paper Scissor</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose Your Number of Rounds (Pick an odd number):
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <Link to="/game">Let's Play</Link>;
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Homepage;
