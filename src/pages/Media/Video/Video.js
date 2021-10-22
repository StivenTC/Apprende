import robot from "../../../assets/robot.svg";
import { Header } from "../../../components/layout/Header/Header";
import VideoAngela from '../../../assets/video-explo.mp4';
import { Link } from "react-router-dom";

export default function VideoFraccion() {

  return (
    <div className="launcher">
      <Header />
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div className="launcher-activities">
        <video autoPlay controls width="360">
          <source src={VideoAngela} type='video/mp4' />
        </video>
      </div>
    </div >
  )
}