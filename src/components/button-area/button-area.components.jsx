import React from "react";
import "./button-area.styles.scss";
const ButtonArea = ({ playRound }) => {
  return (
    <div className="button-area">
      <button className="rock-button" onClick={() => playRound(0)}>
        Rock
      </button>
      <button className="paper-button" onClick={() => playRound(1)}>
        Paper
      </button>
      <button className="scissor-button" onClick={() => playRound(2)}>
        Scissor
      </button>
    </div>
  );
};

export default ButtonArea;
