import state1 from "../images/state1.GIF";
import state2 from "../images/state2.GIF";
import state3 from "../images/state3.GIF";
import state4 from "../images/state4.GIF";
import state5 from "../images/state5.GIF";
import state6 from "../images/state6.GIF";
import state7 from "../images/state7.GIF";
import state8 from "../images/state8.GIF";
import state9 from "../images/state9.GIF";
import state10 from "../images/state10.gif";
import state11 from "../images/state11.GIF";

//all imports of all images

//function to show all images accordint to all the mistakes a user would do
function Manhang(props) {
  let manImage = document.getElementById("manImage");
  if (manImage)
    switch (props.errors) {
      case 0:
        manImage.src = state1;
        break;
      case 1:
        manImage.src = state2;
        break;
      case 2:
        manImage.src = state3;
        break;
      case 3:
        manImage.src = state4;
        break;
      case 4:
        manImage.src = state5;
        break;
      case 5:
        manImage.src = state6;
        break;
      case 6:
        manImage.src = state7;
        break;
      case 7:
        manImage.src = state8;
        break;
      case 8:
        manImage.src = state9;
        break;
      case 9:
        manImage.src = state10;
        break;
      case 10:
        manImage.src = state11;

        break;
      default:
        manImage.src = state1;
        break;
    }

  return (
    <div>
      <img
        className="manImage"
        id="manImage"
        src={state1}
        alt="Hangman Drawings level"
      />
    </div>
  );
}
export default Manhang;
