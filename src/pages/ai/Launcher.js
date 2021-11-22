import robot from "../../assets/robot.svg";
import HappyEmoji from "../../assets/happyEmoji.png";
import SadEmoji from "../../assets/sadEmoji.png";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export function Launcher({ goView, userData }) {

  const getClasses = (challenge) => {
    let clases = "";
    if (!validateUndefined(userData.focus)) {
      if (challenge !== "focus") {
        clases += " disabled"
      }
    } else {
      if (challenge === "focus") {
        clases += userData.focus ? " challenge-complete" : " challenge-failed"
      }
      if (challenge === "selectQuarter") {
        if (validateUndefined(userData.selectQuarter)) {
          clases += userData.selectQuarter ? " challenge-complete" : " challenge-failed"
        } else if (!validateUndefined(userData.focus)) {
          clases += " disabled"
        }
      }
      if (challenge === "rainDrop") {
        if (validateUndefined(userData.rainDrop)) {
          clases += userData.rainDrop ? " challenge-complete" : " challenge-failed"
        } else if (!validateUndefined(userData.selectQuarter)) {
          clases += " disabled"
        }
      }
    }
    return clases;
  };
  const validateUndefined = (value) => {
    return (typeof value !== 'undefined')
  }
  const validateActivities = () => {
    let activities = validateUndefined(userData.focus) && validateUndefined(userData.selectQuarter) && validateUndefined(userData.rainDrop);
    return activities
  }
  return (
    <div className="launcher">
      <h1>Entrenamiento</h1>
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div className="launcher-activities">
        <button
          className="btn-next"
          onClick={() => goView(1)}>
          Comenzar
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}