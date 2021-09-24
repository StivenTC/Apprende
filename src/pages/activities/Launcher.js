import robot from "../../assets/robot.svg";

export const Launcher = ({ goView }) => {

  return (
    <div className="launcher">
      <h1>Exploración</h1>
      <img src={robot} alt='robot' />
      <div className="launcher-activities">
        <div onClick={() => goView(1)}>Actividad 1</div>
        <div onClick={() => goView(2)} > Actividad 2</div>
      </div>
    </div >
  )
}