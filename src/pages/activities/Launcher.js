import robot from "../../assets/robot.svg";
import { RiArrowRightLine } from "react-icons/ri";

export const Launcher = ({ goView, userData }) => {

  return (
    <div className="launcher">
      <h1>Exploración</h1>
      <img src={robot} alt='robot' />
      <div className="launcher-activities">
        <div role="button" className={`${userData.complete >= 1 ? "completed" : ''}`} onClick={() => goView(1)}>Actividad 1
          <RiArrowRightLine />
        </div>
        <div role="button" className={`${userData.complete >= 2 ? "completed" : ''}`} onClick={() => goView(4)}>Actividad 2
          <RiArrowRightLine />
        </div>
      </div>
    </div >
  )
}