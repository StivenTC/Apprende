import robot from "../../assets/Ensenando.png";
import HappyEmoji from "../../assets/happyEmoji.png";
import SadEmoji from "../../assets/sadEmoji.png";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function Launcher({ goView, userData }) {

  const getClasses = (challenge) => {
    let clases = "";
    if (typeof userData.llamas === 'undefined') {
      if (challenge !== "llamas") {
        clases += " disabled"
      }
    } else {
      if (challenge === "llamas") {
        clases += userData.llamas ? " challenge-complete" : " challenge-failed"
      }
      if (challenge === "aiComparations") {
        if (typeof userData.aiComparations !== 'undefined') {
          clases += userData.aiComparations ? " challenge-complete" : " challenge-failed"
        } else if (typeof userData.llamas === 'undefined') {
          clases += " disabled"
        }
      }
      if (challenge === "aiSort") {
        if (typeof userData.aiSort !== 'undefined') {
          clases += userData.aiSort ? " challenge-complete" : " challenge-failed"
        } else if (typeof userData.aiComparations === 'undefined') {
          clases += " disabled"
        }
      }
    }
    return clases;
  };
  return (
    <div className="launcher">
      <h1>Entrenamiento 2</h1>
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div className="launcher-activities">
        <div role="button" className={`ai-button ${getClasses("llamas")}`} onClick={() => goView(1)}>
          <p>Reto 1
            <span><br />Volver a intentarlo</span>
          </p>
          <img className="img-complete" src={HappyEmoji} alt='Challenge complete' />
          <img className="img-failed" src={SadEmoji} alt='Challenge failed' />
          <RiArrowRightLine />
        </div>
        <div role="button" className={`ai-button ${getClasses("aiComparations")}`} onClick={() => goView(4)}>
          <p>Reto 2
            <span><br />Volver a intentarlo</span>
          </p>
          <img className="img-complete" src={HappyEmoji} alt='Challenge complete' />
          <img className="img-failed" src={SadEmoji} alt='Challenge failed' />
          <RiArrowRightLine />
        </div>
        <div role="button" className={`ai-button ${getClasses("aiSort")}`} onClick={() => goView(7)}>
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