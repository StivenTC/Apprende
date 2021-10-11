import { useState } from "react";
import { Header } from "../../../components/layout/Header/Header"
import { BiRightArrowAlt } from "react-icons/bi";

export const Exploration = ({ goView, saveUser }) => {
  //const [play, setPlay] = useState(false);

  const defaultColor = {
    circle1: [0, 0],
    circle2: [0, 0, 0, 0],
    circle3: [0, 0, 0, 0, 0, 0],
    circle4: [0, 0, 0, 0, 0, 0, 0, 0],
  }

  const [colors, setColors] = useState(defaultColor);

  const VectorSvg = () => {
    return <svg width="146" height="73" viewBox="0 0 146 73" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M146 73C146 63.4135 144.112 53.9209 140.443 45.0641C136.775 36.2073 131.397 28.1599 124.619 21.3812C117.84 14.6025 109.793 9.22539 100.936 5.55679C92.0791 1.8882 82.5865 -4.19039e-07 73 0C63.4135 4.19039e-07 53.9209 1.8882 45.0641 5.5568C36.2073 9.22539 28.1599 14.6025 21.3812 21.3812C14.6025 28.1599 9.22538 36.2073 5.55679 45.0641C1.8882 53.9209 -8.38078e-07 63.4135 0 73L73 73H146Z" fill="#D9D9ED" stroke="#D9D9ED" />
    </svg>
  }

  const VectorSvg2 = () => {
    return <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1" fill="white">
        <path d="M73 -3.19093e-06C63.4135 -2.77189e-06 53.9209 1.8882 45.0641 5.55679C36.2073 9.22539 28.1599 14.6025 21.3812 21.3812C14.6025 28.1599 9.22538 36.2073 5.55679 45.0641C1.8882 53.9209 -4.02901e-06 63.4135 -3.19093e-06 73L73 73L73 -3.19093e-06Z" />
      </mask>
      <path d="M73 -3.19093e-06C63.4135 -2.77189e-06 53.9209 1.8882 45.0641 5.55679C36.2073 9.22539 28.1599 14.6025 21.3812 21.3812C14.6025 28.1599 9.22538 36.2073 5.55679 45.0641C1.8882 53.9209 -4.02901e-06 63.4135 -3.19093e-06 73L73 73L73 -3.19093e-06Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" mask="url(#path-1-inside-1)" />
    </svg>
  }

  const VectorSvg3 = () => {
    return <svg width="177" height="169" viewBox="0 0 177 169" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 0) })} className={`${colors.circle3[0] ? "color-path" : ""}`} d="M161.238 84.2376C161.238 71.4234 157.865 58.835 151.457 47.7375C145.05 36.6401 135.835 27.4248 124.738 21.0177L88.2376 84.2375L161.238 84.2376Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 1) })} className={`${colors.circle3[1] ? "color-path" : ""}`} d="M51.7377 21.0177C40.6403 27.4248 31.4249 36.6401 25.0178 47.7375C18.6107 58.8349 15.2377 71.4234 15.2377 84.2375L88.2377 84.2375L51.7377 21.0177Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 2) })} className={`${colors.circle3[2] ? "color-path" : ""}`} d="M124.738 21.0177C113.641 14.6106 101.052 11.2375 88.2379 11.2375C75.4238 11.2375 62.8353 14.6106 51.7379 21.0177L88.2379 84.2375L124.738 21.0177Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 3) })} className={`${colors.circle3[3] ? "color-path" : ""}`} d="M15.238 84.2375C15.238 97.0517 18.6111 109.64 25.0181 120.738C31.4252 131.835 40.6406 141.05 51.738 147.457L88.238 84.2375L15.238 84.2375Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 4) })} className={`${colors.circle3[4] ? "color-path" : ""}`} d="M124.738 147.457C135.835 141.05 145.051 131.835 151.458 120.738C157.865 109.64 161.238 97.0518 161.238 84.2376L88.2379 84.2376L124.738 147.457Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 5) })} className={`${colors.circle3[5] ? "color-path" : ""}`} d="M51.7376 147.457C62.835 153.865 75.4235 157.238 88.2376 157.238C101.052 157.238 113.64 153.865 124.738 147.457L88.2376 84.2376L51.7376 147.457Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
    </svg>
  }

  const VectorSvg4 = () => {
    return <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 0) })} className={`${colors.circle4[0] ? "color-path4" : ""}`} d="M88.2373 15.2378C78.6508 15.2378 69.1582 17.126 60.3014 20.7946C51.4446 24.4632 43.3972 29.8403 36.6185 36.619L88.2373 88.2378L88.2373 15.2378Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 1) })} className={`${colors.circle4[1] ? "color-path4" : ""}`} d="M139.856 36.619C133.078 29.8403 125.03 24.4632 116.173 20.7946C107.317 17.126 97.8241 15.2378 88.2376 15.2378L88.2376 88.2378L139.856 36.619Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 2) })} className={`${colors.circle4[2] ? "color-path4" : ""}`} d="M161.238 88.2373C161.238 78.6508 159.35 69.1582 155.681 60.3014C152.013 51.4446 146.636 43.3972 139.857 36.6185L88.2383 88.2373L161.238 88.2373Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 3) })} className={`${colors.circle4[3] ? "color-path4" : ""}`} d="M139.857 139.856C146.636 133.078 152.013 125.03 155.681 116.173C159.35 107.317 161.238 97.8241 161.238 88.2376L88.2383 88.2376L139.857 139.856Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 4) })} className={`${colors.circle4[4] ? "color-path4" : ""}`} d="M88.2383 161.237C97.8248 161.237 107.317 159.349 116.174 155.681C125.031 152.012 133.078 146.635 139.857 139.856L88.2383 88.2374L88.2383 161.237Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 5) })} className={`${colors.circle4[5] ? "color-path4" : ""}`} d="M36.6192 139.857C43.3979 146.636 51.4453 152.013 60.3021 155.681C69.1589 159.35 78.6515 161.238 88.238 161.238L88.238 88.2383L36.6192 139.857Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 6) })} className={`${colors.circle4[6] ? "color-path4" : ""}`} d="M15.2373 88.238C15.2373 97.8245 17.1255 107.317 20.7941 116.174C24.4627 125.031 29.8398 133.078 36.6185 139.857L88.2373 88.238L15.2373 88.238Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 7) })} className={`${colors.circle4[7] ? "color-path4" : ""}`} d="M36.6185 36.6192C29.8398 43.3979 24.4627 51.4453 20.7941 60.3021C17.1255 69.1589 15.2373 78.6515 15.2373 88.238L88.2373 88.238L36.6185 36.6192Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
    </svg>
  }

  const colorette = (array, index) => {
    let a = array
    a[index] = 1 - array[index]
    return a
  }

  const validate = () => {
    let a = colors.circle1.includes(1) && colors.circle2.includes(1) && colors.circle3.includes(1) && colors.circle4.includes(1)
    return a
  }

  const nextActivity = () => {
    saveUser(colors)
    goView(2)
  }

  return (
    <div className="exploration">
      <Header goView={goView} actualView={1} />
      <div className="exploration-content">
        <div className="exploration-text">
          <h1>Fracciones</h1>
          <p>Colorea la mitad de cada una de las 4 figuras representadas</p>
        </div>
        <div className="exploration-activity">
          <div className="activity">
            <div className="activity-circle circle-1">
              {defaultColor.circle1.map((item, i) =>
                <div key={item + i} onClick={() => setColors({ ...colors, circle1: colorette(colors.circle1, i) })} className={`${colors.circle1[i] ? "colorete" : ""}`}>
                  <VectorSvg />
                </div>
              )}
            </div>

            <div className="activity-circle circle-2">
              {defaultColor.circle2.map((item, i) =>
                <div key={item + i} onClick={() => setColors({ ...colors, circle2: colorette(colors.circle2, i) })} className={`${colors.circle2[i] ? "colorete" : ""}`}>
                  <VectorSvg2 />
                </div>
              )}
            </div>

            <div className="activity-circle circle-3">
              <div>
                <VectorSvg3 />
              </div>
            </div>

            <div className="activity-circle">
              <div>
                <VectorSvg4 />
              </div>
            </div>
          </div>
        </div>

        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div >
  )
}