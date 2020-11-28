import React from "react";
import "./comp-choice.styles.scss";
const CompChoice = ({ compChoice, currentRound, resetState }) => {
  return (
    <div className="compchoice">
      <div className="title-of-player">
        <h1>COMPUTER</h1>
      </div>
      <div className="choice-title">
        <h2>{compChoice.name}</h2>
      </div>
      <div className="choice-image">
        <img src={compChoice.imageUrl} alt=""></img>
      </div>
    </div>
  );
};

export default CompChoice;
