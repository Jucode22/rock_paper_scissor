import React from "react";
import "./try-again-button.styles.scss";

const TryAgainButton = ({ currentRound, resetState }) => {
  return (
    <div className="try-again">
      {currentRound == 6 ? (
        <button className="paper-button" onClick={resetState}>
          Try Again
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TryAgainButton;
