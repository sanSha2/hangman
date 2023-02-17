import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
{
  /**
   * Imports of all Components
   */
}
function App() {
  return (
    <div className="App">
      {/**
       *Display Header, Game component
       **/}
      <Header />
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
