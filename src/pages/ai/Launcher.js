import robot from "../../assets/robot.svg";
import HappyEmoji from "../../assets/happyEmoji.png";
import SadEmoji from "../../assets/sadEmoji.png";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function Launcher({ goView, userData }) {

  const getClasses = (challenge) => {
    let clases = "";
    if (typeof userData.focus === 'undefined') {
      if (challenge !== "focus") {
        clases += " disabled"
      }
    } else {
      if (challenge === "focus") {
        clases += userData.focus ? " challenge-complete" : " challenge-failed"
      }
      if (challenge === "selectQuarter") {
        if (typeof userData.selectQuarter !== 'undefined') {
          clases += userData.selectQuarter ? " challenge-complete" : " challenge-failed"
        } else if (typeof userData.focus === 'undefined') {
          clases += " disabled"
        }
      }
      if (challenge === "rainDrop") {
        if (typeof userData.rainDrop !== 'undefined') {
          clases += userData.rainDrop ? " challenge-complete" : " challenge-failed"
        } else if (typeof userData.selectQuarter === 'undefined') {
          clases += " disabled"
        }
      }
    }
    return clases;
  };
  return (
    <div className="launcher">
      <h1>Entrenamiento</h1>
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div className="launcher-activities">
        <div role="button" className={`ai-button ${getClasses("focus")}`} onClick={() => goView(1)}>
          <p>Reto 1
            <span><br />Volver a intentarlo</span>
          </p>
          <img className="img-complete" src={HappyEmoji} alt='Challenge complete' />
          <img className="img-failed" src={SadEmoji} alt='Challenge failed' />
          <RiArrowRightLine />
        </div>
        <div role="button" className={`ai-button ${getClasses("selectQuarter")}`} onClick={() => goView(4)}>
          <p>Reto 2
            <span><br />Volver a intentarlo</span>
          </p>
          <img className="img-complete" src={HappyEmoji} alt='Challenge complete' />
          <img className="img-failed" src={SadEmoji} alt='Challenge failed' />
          <RiArrowRightLine />
        </div>
        <div role="button" className={`ai-button ${getClasses("rainDrop")}`} onClick={() => goView(7)}>
          <p>Reto 3
            <span><br />Volver a intentarlo</span>
          </p>
          <img className="img-complete" src={HappyEmoji} alt='Challenge complete' />
          <img className="img-failed" src={SadEmoji} alt='Challenge failed' />
          <RiArrowRightLine />
        </div>
      </div>
    </div>
  );
}