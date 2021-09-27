import { useState } from "react";
import { Header } from "../../../components/layout/header/Header"

export const Exploration = ({ goView }) => {
  //const [play, setPlay] = useState(false);

  const defaultColor = {
    circle1: [0, 0],
    circle2: [0, 0, 0, 0],
    circle3: [0, 0, 0, 0, 0, 0],
    circle4: [0, 0, 0, 0, 0, 0, 0, 0],
  }

  const [colors, setColors] = useState(defaultColor);

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
    //setPlay(true)
    createPie(60, 60, 60, 2)
  }

  const VectorSvg = () => {
    return <svg width="146" height="74" viewBox="0 0 146 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M72.9886 29.4255C56.9217 29.4255 43.888 16.534 43.6036 0.514404H0C0.236976 40.6108 32.8449 73.0292 72.9886 73.0292C113.132 73.0292 145.693 40.6108 145.977 0.514404H102.374C102.089 16.534 89.0556 29.4255 72.9886 29.4255Z" fill="#D9D9ED" />
    </svg>
  }

  const VectorSvg2 = () => {
    return <svg width="74" height="73" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43.8673 72.2778C44.2465 56.2108 57.1854 43.2719 73.2523 42.8927V0C33.4877 0.379162 1.35377 32.5131 0.974609 72.2778H43.8673Z" fill="#D9D9ED" />
    </svg>

  }

  const VectorSvg3 = () => {
    return <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 0) })} className={`${colors.circle3[0] ? "color-path" : ""}`} d="M55.273 49.7749L32.1245 13.4932C12.7081 26.6264 0 48.7829 0 73.9628C0 74.5769 0 75.2383 0.0472418 75.8525H43.0846C43.0373 75.2383 43.0373 74.5769 43.0373 73.9628C42.9901 64.042 47.8087 55.2077 55.273 49.7749Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 1) })} className={`${colors.circle3[1] ? "color-path" : ""}`} d="M102.987 73.9626C102.987 74.5768 102.94 75.2382 102.94 75.8523H145.977C145.977 75.2382 146.024 74.5768 146.024 73.9626C146.024 48.9717 133.458 26.8625 114.278 13.7292L91.082 50.011C98.31 55.4911 102.987 64.1836 102.987 73.9626Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 2) })} className={`${colors.circle3[2] ? "color-path" : ""}`} d="M89.9018 49.1608L113.05 12.9263C101.523 5.36762 87.7759 0.974121 72.9892 0.974121C58.3442 0.974121 44.6913 5.27313 33.2588 12.7373L56.4073 48.9719C61.1315 45.8067 66.8477 43.9642 72.9892 43.9642C79.2723 43.9642 85.0831 45.9011 89.9018 49.1608Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 3) })} className={`${colors.circle3[3] ? "color-path" : ""}`} d="M88.7207 99.5205L111.869 135.755C131.475 123.378 144.797 101.93 145.883 77.2695H102.799C101.759 86.6707 96.3739 94.749 88.7207 99.5205Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 4) })} className={`${colors.circle3[4] ? "color-path" : ""}`} d="M58.8159 100.418L35.6201 136.7C46.533 143.219 59.3355 146.952 72.9412 146.952C86.7358 146.952 99.6328 143.125 110.64 136.464L87.4917 100.182C83.1926 102.544 78.2323 103.914 72.9884 103.914C67.8863 103.961 63.0676 102.686 58.8159 100.418Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle3: colorette(colors.circle3, 5) })} className={`${colors.circle3[5] ? "color-path" : ""}`} d="M43.1793 77.2695H0.0947266C1.18129 102.024 14.6452 123.614 34.4396 135.944L57.5881 99.7094C49.7459 94.9852 44.2186 86.8124 43.1793 77.2695Z" fill="#D9D9ED" />
    </svg>

  }

  const VectorSvg4 = () => {
    return <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 0) })} className={`${colors.circle4[0] ? "color-path4" : ""}`} d="M22.6162 22.0932C36.1248 8.67973 54.0094 1.21195 73.0356 0.974121V43.783C65.4251 44.0209 58.2903 47.065 52.8678 52.3448L22.6162 22.0932Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 1) })} className={`${colors.circle4[1] ? "color-path4" : ""}`} d="M95.344 52.6302C90.0166 47.3029 82.977 44.1636 75.4141 43.8306V0.974121C94.3927 1.35464 112.182 8.91755 125.596 22.331L95.344 52.6302Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 2) })} className={`${colors.circle4[2] ? "color-path4" : ""}`} d="M104.191 74.2251C104.191 74.1299 104.191 74.0824 104.191 73.9872C104.191 66.8049 101.622 59.8603 96.9609 54.3903L127.26 24.0911C140.008 37.6472 147 55.3891 147 74.0348C147 74.1299 147 74.1775 147 74.2726H104.191V74.2251Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 3) })} className={`${colors.circle4[3] ? "color-path4" : ""}`} d="M95.582 95.106C100.481 90.1116 103.478 83.5951 104.049 76.603H146.953C146.287 95.0109 138.819 112.277 125.881 125.358L95.582 95.106Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 4) })} className={`${colors.circle4[4] ? "color-path4" : ""}`} d="M75.4141 104.144C82.2159 103.811 88.7324 101.195 93.8694 96.7234L124.169 127.023C110.945 139.532 93.6316 146.62 75.4141 146.953V104.144Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 5) })} className={`${colors.circle4[5] ? "color-path4" : ""}`} d="M73.0363 147C54.7712 146.762 37.4098 139.77 24.0439 127.26L54.3431 96.9612C59.5753 101.432 66.1393 103.953 72.9888 104.191V147H73.0363Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 6) })} className={`${colors.circle4[6] ? "color-path4" : ""}`} d="M22.3318 125.595C9.25128 112.467 1.68838 95.106 1.02246 76.603H43.9265C44.5448 83.6903 47.6366 90.3019 52.6309 95.3438L22.3318 125.595Z" fill="#D9D9ED" />
      <path onClick={() => setColors({ ...colors, circle4: colorette(colors.circle4, 7) })} className={`${colors.circle4[7] ? "color-path4" : ""}`} d="M0.974609 74.2248C0.974609 74.1297 0.974609 74.0821 0.974609 73.987C0.974609 55.1986 8.06186 37.4091 20.9521 23.8054L51.2513 54.1046C46.4471 59.6222 43.7835 66.6619 43.7835 73.987C43.7835 74.0821 43.7835 74.1297 43.7835 74.2248H0.974609Z" fill="#D9D9ED" />
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
  console.log(colors.circle2)
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
              {defaultColor.circle1.map((item, i) =>
                <div onClick={() => setColors({ ...colors, circle1: colorette(colors.circle1, i) })} className={`${colors.circle1[i] ? "colorete" : ""}`}>
                  <VectorSvg />
                </div>
              )}
            </div>

            <div className="activity-circle circle-2">
              {defaultColor.circle2.map((item, i) =>
                <div onClick={() => setColors({ ...colors, circle2: colorette(colors.circle2, i) })} className={`${colors.circle2[i] ? "colorete" : ""}`}>
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

        <button className={`${validate() ? "" : "disabled"}`} onClick={() => validate() ? goView(2) : console.log("no posible")}>Siguiente</button>
      </div>
    </div >
  )
}