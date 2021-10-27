import robot from "../../assets/Ensenando.png";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export function Launcher({ goView, userData }) {

  return (
    <div className="launcher">
      <h1>Reflexión</h1>
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div className="launcher-activities launcher-metacognition">
        {userData.metacognition ?
          <h1>Gracias</h1> :
          <button
            className="btn-next"
            onClick={() => goView(1)}>
            ¡Vamos!
            <BiRightArrowAlt />
          </button>
        }
      </div>
    </div>
  );
}