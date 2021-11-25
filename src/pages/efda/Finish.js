import robot from "../../assets/Volando.png";
import FinishBKG from "../../assets/finishBKG.jpg";
import { useHistory } from 'react-router';
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export function Finish({ goView, userData }) {
  let history = useHistory();

  return (
    <div className="efda-finish" style={{ background: `top/100% 100% no-repeat url("${FinishBKG}")` }}>
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div>
        <p>Has terminado</p>

        <button
          className="btn-next"
          onClick={() => history.push("/")}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}