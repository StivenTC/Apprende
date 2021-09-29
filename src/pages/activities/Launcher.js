import robot from "../../assets/robot.svg";
import { RiArrowRightLine } from "react-icons/ri";

export const Launcher = ({ goView }) => {

  return (
    <div className="launcher">
      <h1>Exploración</h1>
      <img src={robot} alt='robot' />
      <div className="launcher-activities">
        <div role="button" onClick={() => goView(1)}>Actividad 1
          <RiArrowRightLine />
        </div>
        <div role="button" onClick={() => goView(4)}>Actividad 2
          <RiArrowRightLine />
        </div>
      </div>
    </div >
  )
}