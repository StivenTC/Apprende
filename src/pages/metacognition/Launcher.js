import robot from "../../assets/Ensenando.png";
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export function Launcher({ goView, userData }) {
  let history = useHistory();

  const validateSesion = () => {
    let r = false
    if (typeof userData.metacognition !== 'undefined') {
      r = true
    }
    return r
  }
  return (
    <div className="metacognition launcher">
      <h1>¿Cómo llegué<br />tan lejos?</h1>
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div className="launcher-activities launcher-metacognition">
        {validateSesion() ?
          <>
            <h1>Gracias</h1>
            <button
              className="btn-next"
              onClick={() => history.push("/gracias")}>
              Finalizar
              <BiRightArrowAlt />
            </button>
          </>
          :
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