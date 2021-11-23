import robot from "../../assets/Ensenando.png";
import HappyEmoji from "../../assets/happyEmoji.png";
import SadEmoji from "../../assets/sadEmoji.png";
import { useHistory } from 'react-router';
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export function Launcher({ goView, userData }) {

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