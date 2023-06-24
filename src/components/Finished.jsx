import React from "react";

const Finished = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emojis;

  if (percentage == 100) emojis = "🤙";

  if (percentage >= 80 && percentage < 100) emojis = "🥳";

  return (
    <>
      <p className="result">
        <span>{emojis}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} {Math.ceil(percentage)}%
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({
            type: "restart",
          });
        }}
      >
        Restart quiz
      </button>
    </>
  );
};

export default Finished;
