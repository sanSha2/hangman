import React, { useEffect } from "react";
import { checkWin } from "../resources/moreFunctions";
import "../App.css";
//all imports

//funtion to show guessed letters
function Guessed(props) {
  return (
    <div>
      {/*
       */}
      <p id="guessedLetters"> {props.guessed}</p>
    </div>
  );
}
export default Guessed;
