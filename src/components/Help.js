//function to show the help component on how to play
const Help = () => {
  return (
    <div>
      <h2>How to play Hangman!</h2>
      <p>
        The aim of the game is to correctly guess the word that is generated.
        Each blank space represents a letter, and it's your job to guess the
        right letters.
      </p>
      <h3>Classic Hangman Game</h3>

      <div className="helpContainer">
        <ol>
          <li>
            To re-start the game, click the 'Play again' button any time at the
            bottom.
          </li>
          <li>
            Guess a letter by typing it on your computer. Choose carefully
            though, as you can only guess an incorrect letter ten times.
          </li>
          <li>
            If you guess correctly, the letter is revealed at the top but, if
            you don't, you lose one of your chances and the image changes, wrong
            letter will be displayed at the bottom as wrong .
          </li>
          <li>
            If you have entered a letter more than once a message pops up at the
            bottom of the screen saying that 'You have already entered this
            letter'.
          </li>
          <li>
            If you get every letter in the word before the final image is
            displayed, you win!
          </li>
          <li>
            However, if the final image is displayed and you still have not
            completed your word, you lose.
          </li>
          <li>
            Click 'Hide Help' to hide this section. You can click here any time
            whenever you need help understanding the game.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Help;
