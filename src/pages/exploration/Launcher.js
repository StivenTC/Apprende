import robot from "../../assets/robot.svg";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Launcher = ({ goView, userData }) => {

  return (
    <div className="launcher">
      <h1>Exploración</h1>
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div className="launcher-activities">
        <div role="button" className={`${userData.complete >= 1 ? "completed" : ""}`} onClick={() => (userData.complete === 1 ? '' : goView(1))}>Actividad 1
          <RiArrowRightLine />
        </div>
        <div role="button" className={`${userData.complete >= 2 ? "completed" : userData.complete === 1 ? "" : "disabled"}`} onClick={() => goView(4)}>Actividad 2
          <RiArrowRightLine />
        </div>
      </div>
    </div >
  )
}