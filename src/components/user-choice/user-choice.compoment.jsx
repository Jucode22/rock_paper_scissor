import React from "react";
import ButtonArea from "../button-area/button-area.components";
import "./user-choice.styles.scss";

const UserChoice = ({ playRound, currentRound, userChoice }) => {
  console.log(userChoice);
  return (
    <div className="userchoice">
      <h1 className="title-of-player">YOU</h1>

      <h2 className="choice-title">{userChoice.name}</h2>

      <div className="choice-image">
        <img src={userChoice.imageUrl} alt=""></img>
      </div>
      <div>{currentRound >= 6 ? "" : <ButtonArea playRound={playRound} />}</div>
    </div>
  );
};

export default UserChoice;
