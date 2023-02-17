//function to check win or lose
function Won(props) {
  if (props.won) {
    return (
      <div>
        <h3> You WON!!!</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3> Sorry You Lost!!!</h3>
      </div>
    );
  }
}
export default Won;
