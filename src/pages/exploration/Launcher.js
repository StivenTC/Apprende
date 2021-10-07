import robot from "../../assets/robot.svg";
import { RiArrowRightLine } from "react-icons/ri";

export const Launcher = ({ goView, userData }) => {

  return (
    <div className="launcher">
      <h1>Exploración</h1>
      <img src={robot} alt='robot' />
      <div className="launcher-activities">
        <div role="button" className={`${userData.complete >= 1 ? "completed" : ""}`} onClick={() => (userData.complete === 1 ? '' : goView(1))}>Actividad 1
          <RiArrowRightLine />
        </div>
        <div role="button" className={`${userData.complete >= 2 ? "completed" : userData.complete === 1 ? "" : "disabled"}`} onClick={() => goView(4)}>Actividad 2
          <RiArrowRightLine />
        </div>
        <div role="button" onClick={() => goView(9)}>Video Exploración
          <RiArrowRightLine />
        </div>
      </div>
    </div >
  )
}