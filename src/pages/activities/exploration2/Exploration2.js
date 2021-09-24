import { useEffect, useState } from "react";
import { Header } from "../../../components/layout/header/Header"

export const Exploration2 = ({ goView }) => {
  const [play, setPlay] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

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

  const Vector1 = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M42.3428 84.6855C65.728 84.6855 84.6855 65.728 84.6855 42.3428C84.6855 18.9575 65.728 0 42.3428 0C18.9575 0 0 18.9575 0 42.3428C0 65.728 18.9575 84.6855 42.3428 84.6855ZM42.3426 61.0595C52.6796 61.0595 61.0593 52.6797 61.0593 42.3428C61.0593 32.0058 52.6796 23.626 42.3426 23.626C32.0057 23.626 23.6259 32.0058 23.6259 42.3428C23.6259 52.6797 32.0057 61.0595 42.3426 61.0595Z" fill="#D9D9ED" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 42.3428C0 65.7281 18.9575 84.6856 42.3428 84.6856C65.728 84.6856 84.6855 65.7281 84.6855 42.3428L61.0593 42.3428C61.0593 52.6797 52.6796 61.0595 42.3426 61.0595C32.0057 61.0595 23.6259 52.6797 23.6259 42.3428L0 42.3428Z" fill="#68C4D3" />
    </svg>
  }

  const Vector2 = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.8833 41.9303C25.1032 32.6094 32.6094 25.1032 41.9303 24.8833V0C18.8618 0.219962 0.219962 18.8618 0 41.9303H24.8833Z" fill="#A1C74D" />
      <path d="M42.7549 24.8833C52.0758 25.1032 59.582 32.6094 59.802 41.9303H84.6852C84.4653 18.8618 65.7959 0.219962 42.7549 0V24.8833Z" fill="#D9D9ED" />
      <path d="M59.7746 42.7551C59.5547 52.076 52.0484 59.5823 42.7275 59.8022V84.6855C65.7961 84.4655 84.4379 65.8237 84.6579 42.7551H59.7746Z" fill="#D9D9ED" />
      <path d="M41.9303 59.7746C32.6094 59.5547 25.1032 52.0484 24.8833 42.7275H0C0.219962 65.7961 18.8618 84.4654 41.9303 84.6854V59.7746Z" fill="#A1C74D" />
    </svg>
  }

  const Vector3 = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.0654 28.3108L18.6363 7.2627C7.3723 14.8817 0 27.7352 0 42.3428C0 42.6991 0 43.0828 0.0274063 43.439H24.9946C24.9672 43.0828 24.9672 42.6991 24.9672 42.3428C24.9398 36.5875 27.7352 31.4625 32.0654 28.3108Z" fill="#D9D9ED" />
      <path d="M59.7462 42.3427C59.7462 42.699 59.7188 43.0827 59.7188 43.439H84.686C84.686 43.0827 84.7134 42.699 84.7134 42.3427C84.7134 27.8448 77.4233 15.0186 66.2963 7.39966L52.8398 28.4477C57.033 31.6269 59.7462 36.6696 59.7462 42.3427Z" fill="#D9D9ED" />
      <path d="M52.1541 27.9544L65.5832 6.9338C58.8961 2.54879 50.9208 0 42.3427 0C33.8467 0 25.9263 2.49398 19.2939 6.82417L32.723 27.8448C35.4637 26.0086 38.7798 24.9398 42.3427 24.9398C45.9877 24.9398 49.3587 26.0634 52.1541 27.9544Z" fill="#D9D9ED" />
      <path d="M51.4688 57.1696L64.8979 78.1903C76.2715 71.0098 84.0001 58.5673 84.6304 44.2612H59.6358C59.0329 49.7151 55.9086 54.4016 51.4688 57.1696Z" fill="#FFBC0F" />
      <path d="M34.1206 57.6903L20.6641 78.7383C26.9949 82.5204 34.422 84.6855 42.3151 84.6855C50.3177 84.6855 57.7996 82.4656 64.1853 78.6013L50.7562 57.5532C48.2622 58.9235 45.3846 59.7183 42.3425 59.7183C39.3826 59.7457 36.5871 59.0058 34.1206 57.6903Z" fill="#FFBC0F" />
      <path d="M25.0493 44.2612H0.0546875C0.685033 58.6221 8.49584 71.1468 19.9791 78.2999L33.4082 57.2792C28.8587 54.5386 25.6522 49.7973 25.0493 44.2612Z" fill="#FFBC0F" />
    </svg>

  }


  const Vector4 = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5547 12.2518C20.3914 4.47023 30.7668 0.13797 41.8044 0V24.8346C37.3893 24.9726 33.2502 26.7386 30.1045 29.8016L12.5547 12.2518Z" fill="#D9D9ED" />
      <path d="M54.7465 29.9671C51.6559 26.8766 47.572 25.0554 43.1846 24.8622V0C54.1946 0.220752 64.5148 4.6082 72.2963 12.3897L54.7465 29.9671Z" fill="#D9D9ED" />
      <path d="M59.8789 42.495C59.8789 42.4398 59.8789 42.4122 59.8789 42.357C59.8789 38.1903 58.3888 34.1616 55.6846 30.9883L73.262 13.4109C80.6572 21.2752 84.7135 31.5678 84.7135 42.3846C84.7135 42.4398 84.7135 42.4674 84.7135 42.5226H59.8789V42.495Z" fill="#D9D9ED" />
      <path d="M54.8848 54.6086C57.727 51.7112 59.4654 47.9308 59.7965 43.8745H84.6863C84.3 54.5534 79.9677 64.57 72.4622 72.1584L54.8848 54.6086Z" fill="#37BCDA" />
      <path d="M43.1846 59.8515C47.1305 59.6584 50.9109 58.1407 53.8911 55.5469L71.4685 73.1243C63.7973 80.3815 53.7531 84.493 43.1846 84.6862V59.8515Z" fill="#37BCDA" />
      <path d="M41.8047 84.7137C31.2086 84.5758 21.1367 80.5195 13.3828 73.2622L30.9602 55.6848C33.9956 58.2787 37.8035 59.7411 41.7771 59.8791V84.7137H41.8047Z" fill="#37BCDA" />
      <path d="M12.3895 72.2964C4.80111 64.6804 0.41366 54.6086 0.0273438 43.8745H24.9172C25.2759 47.986 27.0695 51.8216 29.9669 54.7466L12.3895 72.2964Z" fill="#37BCDA" />
      <path d="M0 42.4948C0 42.4396 0 42.412 0 42.3568C0 31.4572 4.11151 21.137 11.5895 13.2451L29.1669 30.8225C26.3799 34.0234 24.8346 38.1073 24.8346 42.3568C24.8346 42.412 24.8346 42.4396 24.8346 42.4948H0Z" fill="#D9D9ED" />
    </svg>

  }


  const validate = () => {
    let a = value1.length > 0 && value2.length > 0 && value3.length > 0 && value4.length > 0
    return a
  }

  return (
    <div className="exploration2">
      <Header goView={goView} />
      <div className="exploration2-content">
        <div className="exploration2-text">
          <p>Escribe al lado de cada gráfica cuál fue la fracción que te quedó sombreada</p>
        </div>
        <div className="exploration2-activity">
          {false && (
            <>
              <div onClick={() => renderActivity()}>laala</div>
              <div className="exploration2-activity-svg">
                <svg id="pie"></svg>
              </div>
            </>)}

          <div className="activity">
            <div className="activity-circle">
              <Vector1 />
              <div className="activity-circle-quarter">
                <input type="number" maxLength={1} value={value1} onChange={(e) => setValue1(e.target.value)} />
                <div>
                  2
                </div>
              </div>
            </div>

            <div className="activity-circle">
              <Vector2 />
              <div className="activity-circle-quarter">
                <input type="number" maxLength={1} value={value2} onChange={(e) => setValue2(e.target.value)} />
                <div>
                  4
                </div>
              </div>
            </div>

            <div className="activity-circle">
              <Vector3 />
              <div className="activity-circle-quarter">
                <input type="number" maxLength={1} value={value3} onChange={(e) => setValue3(e.target.value)} />
                <div>
                  6
                </div>
              </div>
            </div>

            <div className="activity-circle">
              <Vector4 />
              <div className="activity-circle-quarter">
                <input type="number" maxLength={1} value={value4} onChange={(e) => setValue4(e.target.value)} />
                <div>
                  8
                </div>
              </div>
            </div>

          </div>
        </div>

        <button className={`${validate() ? "" : "disabled"}`}>Siguiente</button>
      </div>
    </div >
  )
}