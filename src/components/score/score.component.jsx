import React from "react";
import "./score.styles.scss";

const Score = ({ userScore, compScore }) => {
  return (
    <div className="score">
      <h3>
        Score:
        <span className="user-score"> {userScore} - </span>
        <span className="comp-score">{compScore}</span>
      </h3>
    </div>
  );
};

export default Score;
