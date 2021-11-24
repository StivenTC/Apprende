import robot from "../../../assets/robot.svg";
import { Header } from "../../../components/layout/Header/Header";
import VideoAngela from '../../../assets/video-explo.mp4';
import VideoComparar from '../../../assets/video-comparar.mp4';
import VideoEquivalente from '../../../assets/U2-S2-V3-2 de junio.mp4';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function VideoFraccion() {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const [currentVideo, setCurrentVideo] = useState(query.get("media"))

  const returnVideo = () => {
    let src = ""
    console.log(currentVideo, "jashhjadshjdas")


    if (currentVideo.includes("exploracion")) {
      src = VideoAngela;

    }
    if (currentVideo.includes("comparar")) {
      src = VideoComparar;

    }
    if (currentVideo.includes("equivalente")) {
      src = VideoEquivalente;

    }
    return src
  }
  console.log(currentVideo)
  return (
    <div className="launcher">
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