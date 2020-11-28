import React from "react";
import CHOICE_DATA from "../../CHOICE_DATA";
import "./gamepage.styles.scss";
import { getCompChoice } from "../../../functions/getCompChoice";

import UserChoice from "../../user-choice/user-choice.compoment";
import CompChoice from "../../../components/comp-choice/comp-choice.components";
import CurrentRoundDisplay from "../../user-choice/user-choice.compoment";
import Score from "../../../components/score/score.component";
import WhoWinsText from "../../../components/who-wins-text/who-wins-text";
import TryAgainButton from "../../../components/try-again-button/try-again-button.component";

class Gamepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRound: 1,
      roundLimit: 5,
      userScore: 0,
      compScore: 0,

      userChoice: { name: "", imageUrl: "" },
      compChoice: { name: "", imageUrl: "" },
      text: "",
    };
  }

  resetState = () => {
    this.setState({
      currentRound: 1,
      roundLimit: 4,
      userScore: 0,
      compScore: 0,
      userChoice: { name: "", imageUrl: "" },
      compChoice: { name: "", imageUrl: "" },
      text: "",
    });
  };
  updateText = (response) => {
    this.setState({
      text: response,
    });
  };
  incrementUserScore = () => {
    this.setState({
      userScore: this.state.userScore + 1,
    });
  };
  incrementCompScore = () => {
    this.setState({
      compScore: this.state.compScore + 1,
    });
  };
  incrementRound = () => {
    this.setState({
      currentRound: this.state.currentRound + 1,
    });
  };
  playRound = (num) => {
    this.setState(
      {
        userChoice: CHOICE_DATA[num],
        compChoice: getCompChoice(),
      },
      () => {
        this.updateWinnerScore(
          this.state.userChoice.name,
          this.state.compChoice.name
        );
      }
    );
  };

  componentDidUpdate() {
    if (this.state.currentRound == 6) {
      if (this.state.userScore > this.state.compScore) {
        alert(
          `You won the game with ${this.state.userScore} - ${this.state.compScore}`
        );
      }
      if (this.state.userScore < this.state.compScore) {
        alert(
          `You lost the game with ${this.state.userScore} - ${this.state.compScore}`
        );
      }
    }
  }
  updateWinnerScore = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
      this.updateText("It's a tie, try again!");
      return;
    }
    if (
      (userChoice === "ROCK" && compChoice === "SCISSOR") ||
      (userChoice === "PAPER" && compChoice === "ROCK") ||
      (userChoice === "SCISSOR" && compChoice === "PAPER")
    ) {
      this.incrementUserScore();
      this.incrementRound();
      this.updateText(`
      You won Round ${this.state.currentRound}!
      ${this.state.userChoice.name} wins against ${this.state.compChoice.name}`);
      return;
    }

    this.incrementCompScore();
    this.incrementRound();
    this.updateText(`You lost Round ${this.state.currentRound}!
    ${this.state.userChoice.name} loses against ${this.state.compChoice.name}`);
    return;
  };

  render() {
    return (
      <div className="Gamepage">
        <div className="container">
          <UserChoice
            userChoice={this.state.userChoice}
            currentRound={this.state.currentRound}
            playRound={this.playRound}
          />
          <div className="scoreAndround">
            <CurrentRoundDisplay currentRound={this.state.currentRound} />
            <Score
              userScore={this.state.userScore}
              compScore={this.state.compScore}
            />
            <WhoWinsText
              currentRound={this.state.currentRound}
              text={this.state.text}
            />
            <TryAgainButton
              currentRound={this.state.currentRound}
              resetState={this.resetState}
            />
          </div>

          <CompChoice
            compChoice={this.state.compChoice}
            currentRound={this.state.currentRound}
          />
        </div>
      </div>
    );
  }
}

export default Gamepage;
