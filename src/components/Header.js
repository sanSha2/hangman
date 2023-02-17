import { useState } from "react";
import React from "react";
import Help from "./Help";
//all imports

//function for header
const Header = () => {
  const [showHelp, setShowHelp] = useState(false);
  // event funtion to show help
  const displayHelp = () => {
    setShowHelp(!showHelp);
  };
  return (
    <div>
      <header>
        <h1>Hangman</h1>
      </header>
      <aside>
        <button id="helpButton" onClick={displayHelp}>
          {showHelp ? "Hide Help" : "Help"}
        </button>
      </aside>
      {showHelp && <Help />}
    </div>
  );
};

export default Header;
