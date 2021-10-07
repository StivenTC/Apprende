import robot from "../../assets/robot.svg";
import { Header } from "../../components/layout/Header/Header";
import VideoAngela from '../../assets/video-explo.mp4';

export const Video = ({ goView, userData }) => {

  return (
    <div className="launcher">
      <Header goView={goView} actualView={6} />
      <h1></h1>
      <img src={robot} alt='robot' />
      <div className="launcher-activities">
        <video autoPlay controls width="360">
          <source src={VideoAngela} type='video/mp4' />
        </video>
      </div>
    </div >
  )
}