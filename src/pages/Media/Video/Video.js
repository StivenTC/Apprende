import robot from "../../../assets/robot.svg";
import { Header } from "../../../components/layout/Header/Header";
import VideoAngela from '../../../assets/video-explo.mp4';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function VideoFraccion() {

  useEffect(() => {
    let elem = document.getElementById("Appvideo");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }, [])

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const [currentVideo, setCurrentVideo] = useState(query.get("media"))

  const returnVideo = () => {
    let src = ""

    switch (currentVideo) {
      default:
      case "exploracion":
        src = VideoAngela
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
        <video autoPlay controls id="Appvideo">
          <source src={returnVideo()} type='video/mp4' />
        </video>
        <br />
        <br />
        <Link to="/" className="launcher-btn-back">
          Volver
        </Link>
      </div>
    </div >
  )
}