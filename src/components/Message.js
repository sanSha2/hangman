import React, { useEffect } from "react";
import { checkWin } from "../resources/moreFunctions";
import "../App.css";
import { show } from "../resources/moreFunctions";
//all imports

//function for messages for win or lose
const Message = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setInGame,
  restartGame,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let inGame = true;

  //check how many letters guessed and determine wins
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won!";
    inGame = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost !!";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    inGame = false;
  }

  useEffect(() => {
    setInGame(inGame);
  });

  return (
    <div>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button className="playButton" onClick={restartGame}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Message;
