import robot from "../../assets/robot.svg";

export const Launcher = () => {

  return (
    <div className="launcher">
      <h1>Exploración</h1>
      <img src={robot} alt='robot' />
      <div className="launcher-activities">
        <div>Actividad 1</div>
        <div>Actividad 2</div>
      </div>
    </div>
  )
}