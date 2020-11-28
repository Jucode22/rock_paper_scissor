import React from "react";
import "./who-wins-text.styles.scss";

const WhoWinsText = ({ text, currentRound }) => {
  return (
    <div className="whowinstext">
      {currentRound >= 6 ? "" : <div className="who-won-text">{text}</div>}
    </div>
  );
};

export default WhoWinsText;
