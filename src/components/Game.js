import React, { useState, useEffect } from "react";
import wordsArr from "../resources/words";
import Manhang from "./Manhang";
import WrongLetters from "./WrongLetters";
import Guessed from "./Guessed";
import Notification from "./Notification";
import Message from "./Message";
import { show } from "../resources/moreFunctions";
//all imports

/**
 * Start of game, everything will be loaded
 */

//all words are loaded from the word repository
let allWords = wordsArr.map((word) => word.toUpperCase());
//a random word is selected
let selectedWord = allWords[Math.floor(Math.random() * allWords.length)];
//word string is turned into a word array
let wordArray = [...selectedWord];

//word is printed on console for developers/reviewers help
console.log(selectedWord);

//start of the from this point
const Game = () => {
  //new array is made _ for empty spaces displayed
  let newArr = wordArray.map((element, i) => (
    <span id={i} key={i}>
      {" _ "}
    </span>
  ));

  //all the hooks for different states

  // Hook to check if the game is still on, it turns false when user wins or loses
  const [inGame, setInGame] = useState(true);
  // Hook to hold correct leeters
  const [correctLetters, setCorrectLetters] = useState([]);
  // Hook to hold wrong letters
  const [wrongLetters, setWrongLetters] = useState([]);
  // Hook to show notification about already entered letters
  const [showNotification, setShowNotification] = useState(false);
  // Hook to check wins
  const [won, setWon] = useState(false);
  //Hook for the string of underscores
  const [guessed, setGuessed] = useState(newArr);

  //set errors to 0 which is wrongLetters.length initially
  let errors = wrongLetters.length;

  //use effect for each key pressed
  useEffect(() => {
    //event to each key down
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      //if the key code is between 65 - 90 it must be a letter
      if (inGame && keyCode >= 65 && keyCode <= 90) {
        //change each letter entered to upper case for easy processing
        const letter = key.toUpperCase();
        //check if its correct letter
        if (selectedWord.includes(letter)) {
          //check if it already not in word, not alreqady guessed
          if (!correctLetters.includes(letter)) {
            //replace the underscores on the guessing word to correct letter.
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
            //change for each instance of this correct letter
            let index = selectedWord.indexOf(letter);
            while (index != -1) {
              document.getElementById(index).innerText = ` ${letter} `;
              index = selectedWord.indexOf(letter, index + 1);
            }
          } else {
            //if this letter is already entered say its already entered
            show(setShowNotification);
          }
        } else {
          //check if it already not in wrong letters
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            //if this letter is already entered say its already entered
            show(setShowNotification);
          }
        }
      }
    };
    //add window listeners to catch letters entered
    window.addEventListener("keydown", handleKeydown);

    //remove window listener when lettwer is caught
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, inGame]);

  //function to restart the game
  function restartGame() {
    //set in game true to restart the game
    setInGame(true);

    // Empty Arrays to restart the game as there are no correct of wrong letters
    setCorrectLetters([]);
    setWrongLetters([]);

    //all words are loaded from the word repository
    //a random word is selected
    selectedWord = allWords[Math.floor(Math.random() * allWords.length)];
    //word string is turned into a word array
    wordArray = [...selectedWord];

    //word is printed on console for developers/reviewers help
    console.log(selectedWord);

    //set errors to 0 which is wrongLetters.length initially
    errors = wrongLetters.length;

    let guessedLetters = document.getElementById("guessedLetters");

    //new array is made _ for empty spaces displayed
    newArr = wordArray.map((element, i) => (
      <span id={i} key={i}>
        {" _ "}
      </span>
    ));

    // set win to false as its a new game
    setWon(false);

    // reset for the string of underscores
    setGuessed(newArr);

    //new array is made _ for empty spaces displayed
    try {
      wordArray.map(
        (element, i) => (document.getElementById(i).innerText = ` _ `)
      );
    } catch (e) {
      //null caught. no need to do anything as it was redundunt
    }
  }

  return (
    <div>
      <h2>Lets Guess this word</h2>
      {/**call all components here */}
      <div id="destroyDiv">
        <Guessed guessed={guessed} won={won} />
      </div>
      <Manhang errors={errors} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Message
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setInGame={setInGame}
        restartGame={restartGame}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
};

export default Game;
