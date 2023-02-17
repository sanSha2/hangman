/**function to display  Wrong Letters*/
function WrongLetters(props) {
  let wrongLetters = props.wrongLetters == "" ? "" : "Wrong Letters";
  return (
    <div>
      <h2>{wrongLetters}</h2>
      <p>{props.wrongLetters.toString().split("").join(" ")}</p>
    </div>
  );
}
export default WrongLetters;
