import robot from "../../../assets/robot.svg";
import { Header } from "../../../components/layout/Header/Header";
import VideoAngela from '../../../assets/video-explo.mp4';
import VideoComparacion from '../../../assets/video-comparar.mp4';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function VideoFraccion() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const [currentVideo, setCurrentVideo] = useState(query.get("media"))

  const returnVideo = () => {
    let src = ""
    if (currentVideo === "exploracion") {
      src = VideoAngela
    } else {
      src = VideoComparacion
    }
    return src
  }
  return (
    <div className="launcher">
      <Header />
      <br />
      <br />
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div className="launcher-activities">
        <video autoPlay controls width="360">
          <source src={returnVideo()} type='video/mp4' />
        </video>
      </div>
    </div >
  )
}