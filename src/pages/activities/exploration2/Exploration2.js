import { useState } from "react";
import { Header } from "../../../components/layout/header/Header"

export const Exploration2 = ({ goView, userData }) => {
  const [conclusion, goConclusion] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [textArea, setTextArea] = useState("");

  const Vector1 = () => {
    return <svg width="146" height="146" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${!userData.circle1[0] ? "colorete" : ""}`} d="M72.9891 43.6036C88.5821 43.6036 101.331 55.7368 102.279 71.0929H145.93C144.935 31.66 112.659 0 72.9891 0C33.3193 0 1.04315 31.66 0.0478516 71.0929H43.6989C44.6468 55.7368 57.3961 43.6036 72.9891 43.6036Z" fill="#68C4D3" />
      <path className={`${!userData.circle1[1] ? "colorete" : ""}`} d="M72.9886 101.426C56.9217 101.426 43.888 88.534 43.6036 72.5144H0C0.236976 112.611 32.8449 145.029 72.9886 145.029C113.132 145.029 145.693 112.611 145.977 72.5144H102.374C102.089 88.534 89.0556 101.426 72.9886 101.426Z" fill="#68C4D3" />
    </svg>
  }

  const Vector2 = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${!userData.circle2[0] ? "colorete" : ""}`} d="M24.8833 41.9303C25.1032 32.6094 32.6094 25.1032 41.9303 24.8833V0C18.8618 0.219962 0.219962 18.8618 0 41.9303H24.8833Z" fill="#A1C74D" />
      <path className={`${!userData.circle2[1] ? "colorete" : ""}`} d="M42.7549 24.8833C52.0758 25.1032 59.582 32.6094 59.802 41.9303H84.6852C84.4653 18.8618 65.7959 0.219962 42.7549 0V24.8833Z" fill="#A1C74D" />
      <path className={`${!userData.circle2[2] ? "colorete" : ""}`} d="M41.9303 59.7746C32.6094 59.5547 25.1032 52.0484 24.8833 42.7275H0C0.219962 65.7961 18.8618 84.4654 41.9303 84.6854V59.7746Z" fill="#A1C74D" />
      <path className={`${!userData.circle2[3] ? "colorete" : ""}`} d="M59.7746 42.7551C59.5547 52.076 52.0484 59.5823 42.7275 59.8022V84.6855C65.7961 84.4655 84.4379 65.8237 84.6579 42.7551H59.7746Z" fill="#A1C74D" />
    </svg>
  }

  const Vector3 = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${!userData.circle3[0] ? "colorete" : ""}`} d="M51.4688 57.1696L64.8979 78.1903C76.2715 71.0098 84.0001 58.5673 84.6304 44.2612H59.6358C59.0329 49.7151 55.9086 54.4016 51.4688 57.1696Z" fill="#FFBC0F" />
      <path className={`${!userData.circle3[1] ? "colorete" : ""}`} d="M25.0493 44.2612H0.0546875C0.685033 58.6221 8.49584 71.1468 19.9791 78.2999L33.4082 57.2792C28.8587 54.5386 25.6522 49.7973 25.0493 44.2612Z" fill="#FFBC0F" />
      <path className={`${!userData.circle3[2] ? "colorete" : ""}`} d="M34.1206 57.6903L20.6641 78.7383C26.9949 82.5204 34.422 84.6855 42.3151 84.6855C50.3177 84.6855 57.7996 82.4656 64.1853 78.6013L50.7562 57.5532C48.2622 58.9235 45.3846 59.7183 42.3425 59.7183C39.3826 59.7457 36.5871 59.0058 34.1206 57.6903Z" fill="#FFBC0F" />
      <path className={`${!userData.circle3[3] ? "colorete" : ""}`} d="M32.0654 28.3108L18.6363 7.2627C7.3723 14.8817 0 27.7352 0 42.3428C0 42.6991 0 43.0828 0.0274063 43.439H24.9946C24.9672 43.0828 24.9672 42.6991 24.9672 42.3428C24.9398 36.5875 27.7352 31.4625 32.0654 28.3108Z" fill="#FFBC0F" />
      <path className={`${!userData.circle3[4] ? "colorete" : ""}`} d="M52.1541 27.9544L65.5832 6.9338C58.8961 2.54879 50.9208 0 42.3427 0C33.8467 0 25.9263 2.49398 19.2939 6.82417L32.723 27.8448C35.4637 26.0086 38.7798 24.9398 42.3427 24.9398C45.9877 24.9398 49.3587 26.0634 52.1541 27.9544Z" fill="#FFBC0F" />
      <path className={`${!userData.circle3[5] ? "colorete" : ""}`} d="M59.7462 42.3427C59.7462 42.699 59.7188 43.0827 59.7188 43.439H84.686C84.686 43.0827 84.7134 42.699 84.7134 42.3427C84.7134 27.8448 77.4233 15.0186 66.2963 7.39966L52.8398 28.4477C57.033 31.6269 59.7462 36.6696 59.7462 42.3427Z" fill="#FFBC0F" />
    </svg>

  }


  const Vector4 = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${!userData.circle4[0] ? "colorete" : ""}`} d="M43.1846 59.8515C47.1305 59.6584 50.9109 58.1407 53.8911 55.5469L71.4685 73.1243C63.7973 80.3815 53.7531 84.493 43.1846 84.6862V59.8515Z" fill="#37BCDA" />
      <path className={`${!userData.circle4[1] ? "colorete" : ""}`} d="M41.8047 84.7137C31.2086 84.5758 21.1367 80.5195 13.3828 73.2622L30.9602 55.6848C33.9956 58.2787 37.8035 59.7411 41.7771 59.8791V84.7137H41.8047Z" fill="#37BCDA" />
      <path className={`${!userData.circle4[2] ? "colorete" : ""}`} d="M12.3895 72.2964C4.80111 64.6804 0.41366 54.6086 0.0273438 43.8745H24.9172C25.2759 47.986 27.0695 51.8216 29.9669 54.7466L12.3895 72.2964Z" fill="#37BCDA" />
      <path className={`${!userData.circle4[3] ? "colorete" : ""}`} d="M0 42.4948C0 42.4396 0 42.412 0 42.3568C0 31.4572 4.11151 21.137 11.5895 13.2451L29.1669 30.8225C26.3799 34.0234 24.8346 38.1073 24.8346 42.3568C24.8346 42.412 24.8346 42.4396 24.8346 42.4948H0Z" fill="#37BCDA" />
      <path className={`${!userData.circle4[4] ? "colorete" : ""}`} d="M12.5547 12.2518C20.3914 4.47023 30.7668 0.13797 41.8044 0V24.8346C37.3893 24.9726 33.2502 26.7386 30.1045 29.8016L12.5547 12.2518Z" fill="#37BCDA" />
      <path className={`${!userData.circle4[5] ? "colorete" : ""}`} d="M54.7465 29.9671C51.6559 26.8766 47.572 25.0554 43.1846 24.8622V0C54.1946 0.220752 64.5148 4.6082 72.2963 12.3897L54.7465 29.9671Z" fill="#37BCDA" />
      <path className={`${!userData.circle4[6] ? "colorete" : ""}`} d="M59.8789 42.495C59.8789 42.4398 59.8789 42.4122 59.8789 42.357C59.8789 38.1903 58.3888 34.1616 55.6846 30.9883L73.262 13.4109C80.6572 21.2752 84.7135 31.5678 84.7135 42.3846C84.7135 42.4398 84.7135 42.4674 84.7135 42.5226H59.8789V42.495Z" fill="#37BCDA" />
      <path className={`${!userData.circle4[7] ? "colorete" : ""}`} d="M54.8848 54.6086C57.727 51.7112 59.4654 47.9308 59.7965 43.8745H84.6863C84.3 54.5534 79.9677 64.57 72.4622 72.1584L54.8848 54.6086Z" fill="#37BCDA" />
    </svg>

  }


  const validate = () => {
    let a = value1.length > 0 && value2.length > 0 && value3.length > 0 && value4.length > 0
    return a
  }
  console.log(userData)
  return (
    <div className="exploration2">
      <Header goView={goView} actualView={2} />
      {!conclusion ? <div className="exploration2-content">
        <div className="exploration2-text">
          <p>Escribe al lado de cada gráfica cuál fue la fracción que te quedó sombreada</p>
        </div>

        <div className="exploration2-activity">
          <div className="activity">
            <div className="activity-circle">
              <Vector1 />
              <div className="activity-circle-quarter">
                <input min="0" type="number" pattern="[0,9]" maxLength={1} value={value1} onChange={(e) => setValue1(e.target.value)} />
                <div>
                  2
                </div>
              </div>
            </div>

            <div className="activity-circle">
              <Vector2 />
              <div className="activity-circle-quarter">
                <input min="0" type="number" pattern="[0,9]*" maxLength={1} value={value2} onChange={(e) => setValue2(e.target.value)} />
                <div>
                  4
                </div>
              </div>
            </div>

            <div className="activity-circle">
              <Vector3 />
              <div className="activity-circle-quarter">
                <input min="0" type="number" pattern="[0,9]*" maxLength={1} value={value3} onChange={(e) => setValue3(e.target.value)} />
                <div>
                  6
                </div>
              </div>
            </div>

            <div className="activity-circle">
              <Vector4 />
              <div className="activity-circle-quarter">
                <input min="0" type="number" pattern="[0,9]*" maxLength={1} value={value4} onChange={(e) => setValue4(e.target.value)} />
                <div>
                  8
                </div>
              </div>
            </div>

          </div>
        </div>

        <button className={`${validate() ? "" : "disabled"}`} onClick={() => validate() ? goConclusion(true) : console.log("no posible")}>Siguiente</button>
      </div>
        :
        <div className="exploration2-content conclusion">
          <div className="exploration2-text">
            <h1>Conclusión</h1>
            <svg width="165" height="167" viewBox="0 0 165 167" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.6001 23.5884C46.8464 23.5884 53.5889 30.005 54.0902 38.126H77.1749C76.6485 17.2721 59.5794 0.528809 38.6001 0.528809C17.6209 0.528809 0.551751 17.2721 0.0253906 38.126H23.1101C23.6114 30.005 30.3538 23.5884 38.6001 23.5884Z" fill="#D9D9ED" />
              <path d="M38.5998 54.1675C30.1028 54.1675 23.21 47.3498 23.0596 38.8779H0C0.125324 60.0828 17.3699 77.2271 38.5998 77.2271C59.8297 77.2271 77.0492 60.0828 77.1996 38.8779H54.14C53.9896 47.3498 47.0968 54.1675 38.5998 54.1675Z" fill="#68C4D3" />
              <path d="M109.93 38.2239C110.13 29.7269 116.973 22.8842 125.47 22.6837V0C104.441 0.200519 87.4466 17.1945 87.2461 38.2239H109.93Z" fill="#A1C74D" />
              <path d="M126.222 22.6837C134.719 22.8842 141.561 29.7269 141.762 38.2239H164.446C164.245 17.1945 147.226 0.200519 126.222 0V22.6837Z" fill="#D9D9ED" />
              <path d="M141.737 38.9758C141.537 47.4728 134.694 54.3155 126.197 54.516V77.1997C147.227 76.9992 164.221 60.0052 164.421 38.9758H141.737Z" fill="#D9D9ED" />
              <path d="M125.47 54.4909C116.973 54.2904 110.13 47.4477 109.93 38.9507H87.2461C87.4466 59.9801 104.441 76.9991 125.47 77.1996V54.4909Z" fill="#A1C74D" />
              <path d="M29.2309 114.641L16.9889 95.4531C6.72061 102.399 0 114.116 0 127.432C0 127.757 0 128.107 0.0249837 128.432H22.7851C22.7601 128.107 22.7601 127.757 22.7601 127.432C22.7352 122.186 25.2835 117.514 29.2309 114.641Z" fill="#D9D9ED" />
              <path d="M54.4639 127.432C54.4639 127.757 54.4389 128.107 54.4389 128.432H77.199C77.199 128.107 77.224 127.757 77.224 127.432C77.224 114.216 70.5783 102.524 60.435 95.5781L48.168 114.766C51.9905 117.664 54.4639 122.261 54.4639 127.432Z" fill="#D9D9ED" />
              <path d="M47.5443 114.316L59.7863 95.1534C53.6903 91.156 46.42 88.8325 38.6001 88.8325C30.8552 88.8325 23.6349 91.106 17.5889 95.0535L29.8309 114.216C32.3292 112.542 35.3523 111.568 38.6001 111.568C41.923 111.568 44.996 112.592 47.5443 114.316Z" fill="#D9D9ED" />
              <path d="M46.9199 140.948L59.1619 160.111C69.5302 153.565 76.5756 142.223 77.1502 129.181H54.3651C53.8154 134.153 50.9673 138.425 46.9199 140.948Z" fill="#FFBC0F" />
              <path d="M31.1049 141.423L18.8379 160.611C24.6091 164.058 31.3797 166.032 38.575 166.032C45.8702 166.032 52.6908 164.009 58.512 160.486L46.27 141.298C43.9965 142.548 41.3732 143.272 38.6 143.272C35.9018 143.297 33.3534 142.622 31.1049 141.423Z" fill="#FFBC0F" />
              <path d="M22.8349 129.181H0.0498047C0.62443 142.273 7.74478 153.69 18.2129 160.211L30.455 141.048C26.3077 138.55 23.3846 134.228 22.8349 129.181Z" fill="#FFBC0F" />
              <path d="M99.2197 100.001C106.364 92.9076 115.822 88.9583 125.884 88.8325V111.472C121.859 111.598 118.086 113.208 115.218 116L99.2197 100.001Z" fill="#D9D9ED" />
              <path d="M137.681 116.151C134.864 113.333 131.141 111.673 127.142 111.497V88.8325C137.178 89.0338 146.586 93.0334 153.68 100.127L137.681 116.151Z" fill="#D9D9ED" />
              <path d="M142.36 127.571C142.36 127.521 142.36 127.496 142.36 127.445C142.36 123.647 141.001 119.974 138.536 117.081L154.56 101.058C161.301 108.227 164.999 117.61 164.999 127.47C164.999 127.521 164.999 127.546 164.999 127.596H142.36V127.571Z" fill="#D9D9ED" />
              <path d="M137.808 138.614C140.399 135.973 141.983 132.526 142.285 128.829H164.975C164.623 138.564 160.673 147.695 153.831 154.612L137.808 138.614Z" fill="#37BCDA" />
              <path d="M127.142 143.393C130.739 143.217 134.185 141.834 136.902 139.469L152.925 155.493C145.932 162.109 136.776 165.857 127.142 166.033V143.393Z" fill="#37BCDA" />
              <path d="M125.884 166.058C116.225 165.932 107.043 162.234 99.9746 155.619L115.998 139.595C118.765 141.96 122.237 143.293 125.859 143.419V166.058H125.884Z" fill="#37BCDA" />
              <path d="M99.0692 154.738C92.1516 147.795 88.152 138.614 87.7998 128.829H110.489C110.816 132.577 112.452 136.073 115.093 138.74L99.0692 154.738Z" fill="#37BCDA" />
              <path d="M87.7744 127.571C87.7744 127.521 87.7744 127.495 87.7744 127.445C87.7744 117.509 91.5225 108.101 98.3394 100.907L114.363 116.93C111.822 119.848 110.414 123.571 110.414 127.445C110.414 127.495 110.414 127.521 110.414 127.571H87.7744Z" fill="#D9D9ED" />
            </svg>

          </div>
          <div className="exploration2-activity">
            <p>¿Identificas algo particular frente a las gráficas de estas fracciones? Escribe abajo tu respuesta</p>
            <div className="conclusion-answer">
              <textarea placeholder="Respuesta:" rows="3" value={textArea} onChange={(e) => setTextArea(e.target.value)} maxlength="500" />
              <span>{textArea.length}/500</span>
            </div>
            <button className={`${textArea.length > 5 ? "" : "disabled"}`} onClick={() => textArea.length > 5 ? goView(0) : console.log("no posible")}>Siguiente</button>
          </div>
        </div>
      }
    </div >
  )
}