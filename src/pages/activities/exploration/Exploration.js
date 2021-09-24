import { useEffect, useState } from "react";
import { Header } from "../../../components/layout/header/Header"

export const Exploration = ({ goView }) => {
  const [play, setPlay] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);
  const [color5, setColor5] = useState(false);
  const [color6, setColor6] = useState(false);
  const [color7, setColor7] = useState(false);
  const [color8, setColor8] = useState(false);

  const createPie = (cx, cy, r, slices) => {
    var fromAngle, toAngle,
      fromCoordX, fromCoordY,
      toCoordX, toCoordY,
      path, d;

    for (var i = 0; i < slices; i++) {
      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      fromAngle = i * 360 / slices;
      toAngle = (i + 1) * 360 / slices;
      //console.log(fromAngle + ' ' + toAngle);
      fromCoordX = cx + (r * Math.cos(fromAngle * Math.PI / 180));
      fromCoordY = cy + (r * Math.sin(fromAngle * Math.PI / 180));
      toCoordX = cx + (r * Math.cos(toAngle * Math.PI / 180));
      toCoordY = cy + (r * Math.sin(toAngle * Math.PI / 180));
      //console.log(fromCoord + ' ' + toCoord);
      d = 'M' + cx + ',' + cy + ' L' + fromCoordX + ',' + fromCoordY + ' A' + r + ',' + r + ' 0 0,1 ' + toCoordX + ',' + toCoordY + 'z';
      //console.log(d);
      path.setAttributeNS(null, "d", d);
      path.setAttribute('id', 'perro' + i);
      document.getElementById('pie').appendChild(path);
    }
  }

  const renderActivity = () => {
    setPlay(true)
    createPie(60, 60, 60, 2)
  }

  const VectorSvg = () => {
    return <svg width="146" height="74" viewBox="0 0 146 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M72.9886 29.4255C56.9217 29.4255 43.888 16.534 43.6036 0.514404H0C0.236976 40.6108 32.8449 73.0292 72.9886 73.0292C113.132 73.0292 145.693 40.6108 145.977 0.514404H102.374C102.089 16.534 89.0556 29.4255 72.9886 29.4255Z" fill="#D9D9ED" />
    </svg>
  }

  const validate = () => {
    let a = (color1 || color2) && (color3 || color4) && (color5 || color6) && (color7 || color8)
    return a
  }

  return (
    <div className="exploration">
      <Header goView={goView} />
      <div className="exploration-content">
        <div className="exploration-text">
          <h1>Fracciones</h1>
          <p>Colorea la mitad de cada una de las 4 figuras representadas</p>
        </div>
        <div className="exploration-activity">
          {false && (
            <>
              <div onClick={() => renderActivity()}>laala</div>
              <div className="exploration-activity-svg">
                <svg id="pie"></svg>
              </div>
            </>)}

          <div className="activity">
            <div className="activity-circle">
              <div onClick={() => setColor1(!color1)} className={`${color1 ? "colorete" : ""}`}>
                <VectorSvg />
              </div>
              <div onClick={() => setColor2(!color2)} className={`${color2 ? "colorete" : ""}`}>
                <VectorSvg />
              </div>
            </div>

            <div className="activity-circle">
              <div onClick={() => setColor3(!color3)} className={`${color3 ? "colorete" : ""}`}>
                <VectorSvg />
              </div>
              <div onClick={() => setColor4(!color4)} className={`${color4 ? "colorete" : ""}`}>
                <VectorSvg />
              </div>
            </div>

            <div className="activity-circle">
              <div onClick={() => setColor5(!color5)} className={`${color5 ? "colorete" : ""}`}>
                <VectorSvg />
              </div>
              <div onClick={() => setColor6(!color6)} className={`${color6 ? "colorete" : ""}`}>
                <VectorSvg />
              </div>
            </div>

            <div className="activity-circle">
              <div onClick={() => setColor7(!color7)} className={`${color7 ? "colorete" : ""}`}>
                <VectorSvg />
              </div>
              <div onClick={() => setColor8(!color8)} className={`${color8 ? "colorete" : ""}`}>
                <VectorSvg />
              </div>
            </div>
          </div>
        </div>

        <button className={`${validate() ? "" : "disabled"}`}>Siguiente</button>
      </div>
    </div >
  )
}