import { useState } from "react";
import { Header } from "../../../components/layout/Header/Header"
import { BiRightArrowAlt } from "react-icons/bi";

export const Exploration2 = ({ goView, userData }) => {
  const [conclusion, goConclusion] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [textArea, setTextArea] = useState("");

  const Vector1 = () => {
    return <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${!userData.circle1[0] ? "colorete" : ""}`} d="M84 42C84 36.4845 82.9136 31.023 80.8029 25.9273C78.6922 20.8316 75.5985 16.2016 71.6985 12.3015C67.7984 8.40145 63.1684 5.30776 58.0727 3.19706C52.977 1.08636 47.5155 -2.41091e-07 42 0C36.4845 2.41091e-07 31.023 1.08636 25.9273 3.19706C20.8316 5.30776 16.2016 8.40146 12.3015 12.3015C8.40145 16.2016 5.30776 20.8316 3.19706 25.9273C1.08636 31.023 -4.82182e-07 36.4845 0 42L42 42H84Z" fill="#68C4D3" stroke="#F7FAFF" strokeWidth="4" />
      <path className={`${!userData.circle1[1] ? "colorete" : ""}`} d="M84 42C84 47.5155 82.9136 52.977 80.8029 58.0727C78.6922 63.1684 75.5985 67.7984 71.6985 71.6985C67.7984 75.5985 63.1684 78.6922 58.0727 80.8029C52.977 82.9136 47.5155 84 42 84C36.4845 84 31.023 82.9136 25.9273 80.8029C20.8316 78.6922 16.2016 75.5985 12.3015 71.6985C8.40145 67.7984 5.30776 63.1684 3.19706 58.0727C1.08636 52.977 -4.82182e-07 47.5155 0 42L42 42H84Z" fill="#68C4D3" stroke="#F7FAFF" strokeWidth="4" />
    </svg>
  }

  const Vector2 = () => {
    return <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${!userData.circle2[0] ? "colorete" : ""}`} d="M42.2856 2.10648e-05C36.8076 2.13042e-05 31.3832 1.07899 26.3222 3.17533C21.2612 5.27167 16.6626 8.34432 12.7891 12.2179C8.91559 16.0914 5.84294 20.6899 3.7466 25.7509C1.65026 30.812 0.571287 36.2363 0.571287 41.7143L42.2856 41.7143L42.2856 2.10648e-05Z" fill="#A1C74D" stroke="#F7FAFF" strokeWidth="4" />
      <path className={`${!userData.circle2[1] ? "colorete" : ""}`} d="M83.9999 41.7143C83.9999 36.2363 82.9209 30.8119 80.8245 25.7509C78.7282 20.6899 75.6556 16.0914 71.782 12.2178C67.9085 8.3443 63.3099 5.27165 58.2489 3.17531C53.1879 1.07897 47.7636 -2.39451e-07 42.2856 0V41.7143H83.9999Z" fill="#A1C74D" stroke="#F7FAFF" strokeWidth="4" />
      <path className={`${!userData.circle2[2] ? "colorete" : ""}`} d="M0.571438 41.7143C0.571437 47.1923 1.65041 52.6167 3.74674 57.6777C5.84309 62.7387 8.91573 67.3372 12.7893 71.2108C16.6628 75.0843 21.2613 78.1569 26.3224 80.2533C31.3834 82.3496 36.8077 83.4286 42.2857 83.4286L42.2857 41.7143L0.571438 41.7143Z" fill="#A1C74D" stroke="#F7FAFF" strokeWidth="4" />
      <path className={`${!userData.circle2[3] ? "colorete" : ""}`} d="M41.7144 83.4286C47.1924 83.4286 52.6168 82.3496 57.6778 80.2533C62.7388 78.1569 67.3373 75.0843 71.2109 71.2107C75.0844 67.3372 78.1571 62.7387 80.2534 57.6776C82.3497 52.6166 83.4287 47.1923 83.4287 41.7143L41.7144 41.7143L41.7144 83.4286Z" fill="#A1C74D" stroke="#F7FAFF" strokeWidth="4" />
    </svg>
  }

  const Vector3 = () => {
    return <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="0" className={`${!userData.circle3[0] ? "colorete" : ""}`} d="M21.7566 5.83896C15.1457 9.65574 9.65602 15.1454 5.83924 21.7563C2.02246 28.3672 0.0130864 35.8662 0.0130825 43.4998L43.5001 43.4998L21.7566 5.83896Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" mask="url(#path-2-inside-2)" />
      <path id="1" className={`${!userData.circle3[1] ? "colorete" : ""}`} d="M65.2434 5.83897C58.6326 2.02219 51.1335 0.0128213 43.4999 0.0128161C35.8664 0.0128194 28.3673 2.02219 21.7564 5.83897L43.4999 43.4998L65.2434 5.83897Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" mask="url(#path-3-inside-3)" />
      <path id="2" className={`${!userData.circle3[2] ? "colorete" : ""}`} d="M86.9869 43.4999C86.9869 35.8663 84.9775 28.3672 81.1607 21.7564C77.3439 15.1455 71.8542 9.65583 65.2434 5.83905L43.4999 43.4999L86.9869 43.4999Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" mask="url(#path-1-inside-1)" />
      <path id="3" className={`${!userData.circle3[3] ? "colorete" : ""}`} d="M65.2434 81.1607C71.8543 77.3439 77.344 71.8542 81.1608 65.2433C84.9775 58.6325 86.9869 51.1334 86.9869 43.4998L43.4999 43.4998L65.2434 81.1607Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" mask="url(#path-5-inside-5)" />
      <path id="4" className={`${!userData.circle3[4] ? "colorete" : ""}`} d="M21.7566 81.1607C28.3674 84.9774 35.8665 86.9868 43.5001 86.9868C51.1336 86.9868 58.6327 84.9775 65.2436 81.1607L43.5001 43.4998L21.7566 81.1607Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" mask="url(#path-6-inside-6)" />
      <path id="5" className={`${!userData.circle3[5] ? "colorete" : ""}`} d="M0.0131435 43.4999C0.0131429 51.1334 2.02252 58.6325 5.83929 65.2434C9.65607 71.8542 15.1458 77.3439 21.7566 81.1607L43.5001 43.4999L0.0131435 43.4999Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" mask="url(#path-4-inside-4)" />
    </svg>
  }

  const Vector4 = () => {
    return <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="0" className={`${!userData.circle4[0] ? "colorete" : ""}`} d="M21.7501 21.7501C17.712 25.7882 14.5088 30.5822 12.3234 35.8582C10.138 41.1343 9.01314 46.7891 9.01314 52.4999L52.5 52.4999L21.7501 21.7501Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="4" />
      <path id="1" className={`${!userData.circle4[1] ? "colorete" : ""}`} d="M52.4996 9.01297C46.7888 9.01297 41.1339 10.1378 35.8579 12.3232C30.5818 14.5086 25.7878 17.7118 21.7497 21.75L52.4996 52.4998L52.4996 9.01297Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="4" />
      <path id="2" className={`${!userData.circle4[2] ? "colorete" : ""}`} d="M83.2496 21.75C79.2114 17.7119 74.4175 14.5087 69.1414 12.3233C63.8653 10.1378 58.2105 9.01301 52.4997 9.01302L52.4997 52.4999L83.2496 21.75Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="4" />
      <path id="3" className={`${!userData.circle4[3] ? "colorete" : ""}`} d="M95.9874 52.4996C95.9874 46.7888 94.8626 41.1339 92.6772 35.8579C90.4917 30.5818 87.2885 25.7878 83.2504 21.7497L52.5005 52.4996L95.9874 52.4996Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="4" />
      <path id="4" className={`${!userData.circle4[4] ? "colorete" : ""}`} d="M83.2498 83.2496C87.288 79.2114 90.4912 74.4175 92.6766 69.1414C94.862 63.8653 95.9869 58.2105 95.9869 52.4997L52.5 52.4997L83.2498 83.2496Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="4" />
      <path id="5" className={`${!userData.circle4[5] ? "colorete" : ""}`} d="M52.5004 95.9864C58.2112 95.9864 63.8661 94.8616 69.1421 92.6762C74.4182 90.4908 79.2122 87.2875 83.2503 83.2494L52.5004 52.4996L52.5004 95.9864Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="4" />
      <path id="6" className={`${!userData.circle4[6] ? "colorete" : ""}`} d="M21.7504 83.25C25.7886 87.2881 30.5825 90.4913 35.8586 92.6767C41.1347 94.8622 46.7895 95.987 52.5003 95.987L52.5003 52.5001L21.7504 83.25Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="4" />
      <path id="7" className={`${!userData.circle4[7] ? "colorete" : ""}`} d="M9.01261 52.4999C9.01261 58.2107 10.1374 63.8656 12.3228 69.1416C14.5083 74.4177 17.7115 79.2117 21.7496 83.2498L52.4995 52.5L9.01261 52.4999Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="4" />
    </svg>
  }
  const validate = () => {
    let a = value1.length > 0 && value2.length > 0 && value3.length > 0 && value4.length > 0
    return a
  }
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

        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? goConclusion(true) : console.log("no posible")}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
        :
        <div className="exploration2-content conclusion">
          <div className="exploration2-text">
            <h1>Conclusión</h1>
            <svg width="168" height="154" viewBox="0 0 168 154" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="47.7795" cy="32.3669" r="31.3669" fill="#68C4D3" stroke="#F7FAFF" strokeWidth="2" />
              <path d="M80.1464 32.3669C80.1464 28.1164 79.3092 23.9076 77.6826 19.9806C76.056 16.0537 73.6719 12.4856 70.6664 9.48005C67.6608 6.4745 64.0927 4.09037 60.1658 2.46378C56.2389 0.837195 52.03 -1.85795e-07 47.7795 0C43.529 1.85795e-07 39.3202 0.837195 35.3932 2.46379C31.4663 4.09037 27.8982 6.4745 24.8926 9.48005C21.8871 12.4856 19.503 16.0537 17.8764 19.9806C16.2498 23.9076 15.4126 28.1164 15.4126 32.3669L47.7795 32.3669H80.1464Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" mask="url(#path-2-inside-1)" />
              <path d="M153.357 32.9172C153.357 28.6957 152.526 24.5154 150.91 20.6152C149.295 16.715 146.927 13.1712 143.942 10.1861C140.957 7.20097 137.413 4.83306 133.513 3.21753C129.612 1.60201 125.432 0.770508 121.211 0.770508V32.9172H153.357Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-3-inside-2)" />
              <path d="M120.771 65.064C124.992 65.064 129.173 64.2325 133.073 62.6169C136.973 61.0014 140.517 58.6335 143.502 55.6484C146.487 52.6633 148.855 49.1195 150.47 45.2193C152.086 41.319 152.917 37.1388 152.917 32.9172L120.771 32.9172L120.771 65.064Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-4-inside-3)" />
              <path d="M89.0645 32.9172C89.0645 37.1388 89.896 41.319 91.5115 45.2193C93.127 49.1195 95.4949 52.6633 98.48 55.6484C101.465 58.6335 105.009 61.0014 108.909 62.6169C112.809 64.2325 116.99 65.064 121.211 65.064L121.211 32.9172L89.0645 32.9172Z" fill="#A1C74D" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-5-inside-4)" />
              <path d="M121.211 0.770506C116.989 0.770507 112.809 1.60201 108.909 3.21753C105.008 4.83306 101.465 7.20097 98.4795 10.1861C95.4944 13.1712 93.1265 16.715 91.511 20.6152C89.8955 24.5154 89.064 28.6957 89.064 32.9172L121.211 32.9172L121.211 0.770506Z" fill="#A1C74D" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-6-inside-5)" />
              <path d="M80.9072 105.963C80.9072 100.08 79.3587 94.3012 76.4173 89.2066C73.4759 84.112 69.2453 79.8814 64.1507 76.94L47.3943 105.963L80.9072 105.963Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-7-inside-6)" />
              <path d="M30.6382 76.94C25.5436 79.8814 21.313 84.112 18.3717 89.2066C15.4303 94.3012 13.8818 100.08 13.8818 105.963L47.3946 105.963L30.6382 76.94Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-8-inside-7)" />
              <path d="M64.1508 76.94C59.0562 73.9987 53.2772 72.4502 47.3944 72.4502C41.5117 72.4502 35.7326 73.9987 30.638 76.94L47.3944 105.963L64.1508 76.94Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-9-inside-8)" />
              <path d="M13.8819 105.963C13.8819 111.846 15.4304 117.625 18.3718 122.719C21.3131 127.814 25.5437 132.045 30.6383 134.986L47.3948 105.963L13.8819 105.963Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-10-inside-9)" />
              <path d="M64.1508 134.986C69.2454 132.045 73.476 127.814 76.4174 122.719C79.3587 117.625 80.9073 111.846 80.9073 105.963L47.3944 105.963L64.1508 134.986Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-11-inside-10)" />
              <path d="M30.6382 134.986C35.7328 137.927 41.5119 139.476 47.3946 139.476C53.2774 139.476 59.0565 137.927 64.1511 134.986L47.3946 105.963L30.6382 134.986Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-12-inside-11)" />
              <path d="M120.605 72.4503C116.204 72.4503 111.846 73.3172 107.78 75.0013C103.714 76.6855 100.019 79.154 96.9075 82.266L120.605 105.963L120.605 72.4503Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-13-inside-12)" />
              <path d="M144.302 82.266C141.19 79.1541 137.495 76.6856 133.429 75.0014C129.363 73.3172 125.006 72.4504 120.605 72.4504L120.605 105.963L144.302 82.266Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-14-inside-13)" />
              <path d="M154.118 105.963C154.118 101.562 153.251 97.2041 151.567 93.1382C149.883 89.0722 147.415 85.3778 144.303 82.2659L120.606 105.963L154.118 105.963Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-15-inside-14)" />
              <path d="M144.303 129.66C147.415 126.548 149.883 122.854 151.567 118.788C153.251 114.722 154.118 110.364 154.118 105.963L120.605 105.963L144.303 129.66Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-16-inside-15)" />
              <path d="M120.605 139.476C125.006 139.476 129.364 138.609 133.43 136.925C137.496 135.241 141.191 132.772 144.303 129.66L120.605 105.963L120.605 139.476Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-17-inside-16)" />
              <path d="M96.9082 129.66C100.02 132.772 103.715 135.241 107.781 136.925C111.847 138.609 116.204 139.476 120.605 139.476L120.605 105.963L96.9082 129.66Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-18-inside-17)" />
              <path d="M87.0917 105.963C87.0917 110.364 87.9585 114.722 89.6427 118.788C91.3269 122.854 93.7954 126.548 96.9073 129.66L120.604 105.963L87.0917 105.963Z" fill="#06D6A0" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-19-inside-18)" />
              <path d="M96.9074 82.2661C93.7955 85.3781 91.3269 89.0725 89.6427 93.1385C87.9586 97.2044 87.0917 101.562 87.0917 105.963L120.604 105.963L96.9074 82.2661Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="2" mask="url(#path-20-inside-19)" />
            </svg>


          </div>
          <div className="exploration2-activity">
            <p>¿Identificas algo particular frente a las gráficas de estas fracciones? <br />Escribe abajo tu respuesta</p>
            <div className="conclusion-answer">
              <textarea placeholder="Respuesta:" rows="3" value={textArea} onChange={(e) => setTextArea(e.target.value)} maxLength="300" />
              {textArea.length > 250 && <span>{textArea.length}/300</span>}
            </div>
            <button className={`btn-next ${textArea.length > 5 ? "" : "disabled"}`} onClick={() => textArea.length > 5 ? goView(15) : console.log("no posible")}>
              Siguiente
              <BiRightArrowAlt />
            </button>
          </div>
        </div>
      }
    </div >
  )
}