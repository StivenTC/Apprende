import robot from "../../assets/Ensenando.png";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export function Launcher({ goView, userData }) {

  return (
    <div className="launcher">
      <h1>Entrenamiento 2</h1>
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