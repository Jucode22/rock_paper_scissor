import React from "react";
import "./current-round-display.styles.scss";
const CurrentRoundDisplay = ({ currentRound }) => {
  return (
    <div className="round">
      {currentRound == 6 ? (
        ""
      ) : (
        <div>
          <h2>
            Round <span className="current-round"> {currentRound}</span>
          </h2>
          <p>(Best Out of 5 Games)</p>
        </div>
      )}
    </div>
  );
};

export default CurrentRoundDisplay;
