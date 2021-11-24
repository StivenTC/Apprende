/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { BsDropletFill } from "react-icons/bs";
import TopCloud from "../../../assets/top-clouds.svg";
import BottomWater from "../../../assets/bottom-water.svg";
import saveActivity from "../../../helpers/saveActivity";

export function Raindrops({ goView, setResult }) {

  const [selectedDrop, setSelectedDrop] = useState('');
  const [showFeedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const [corrects, setCorrects] = useState([]);
  const [dataAnswers, setDataAnswers] = useState([]);

  const quarters = ["3/4", "12/16", "3/8", "6/4", "18/24"];
  const clueTexts = [
    "Las fracciones equivalentes representan la misma cantidad aunque el numerador y el denominador sean diferentes.",
    "Para encontrar una fracción equivalente a 6/8 debes multiplicar o dividir el numerador y el denominador de la fracción por el mismo número."
  ];
  const Drop = () => {
    return <svg className="water-drop" width="101" height="139" viewBox="0 0 101 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.1459 3.31289C52.346 -2.687 57.6459 0.812887 59.6459 3.31289C92.0459 42.5128 100.146 78.9796 100.146 92.313C100.946 132.313 63.8125 139.98 45.1458 138.813C8.74584 137.213 -0.0208066 109.813 0.145867 96.313C-2.85413 56.313 41.3505 9.99951 47.1459 3.31289Z" fill="#00D7F0" />
      <path d="M67.4979 26.9988C68.9978 26.499 70.3315 28.4986 70.998 29.4984C72.9982 32.4986 74.7644 36.4032 76.998 40.4984C79.998 45.9986 87.998 67.4984 89.998 74.4984C91.998 81.4984 91.998 103.498 89.998 108.498C88.398 112.498 84.998 112.498 83.498 111.998C80.498 110.498 81.498 107.998 82.498 103.498C83.498 98.9984 83.498 91.9984 82.998 82.4984C83.498 72.9984 76.998 54.9984 75.998 51.9984C74.998 48.9984 67.6514 32.1105 66.9981 29.4984C66.7481 28.499 66.4979 27.332 67.4979 26.9988Z" fill="#A4EEEF" />
      <circle cx="78.998" cy="120" r="5" fill="#A4EEEF" />
    </svg>;
  };
  const Splash = () => {
    return <svg className="drop-splash scale-in-center" width="198" height="92" viewBox="0 0 198 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M60.0303 49.7923C60.0303 49.7923 67.3408 36.3087 64.3282 25.1858C61.3157 14.0629 53.0741 13.4255 48.4972 15.6792C43.9202 17.933 39.9431 27.2845 47.0489 32.7042C54.1792 38.1191 59.022 41.0595 60.0303 49.7923Z" fill="#00D7F0" />
        <path d="M56.7326 61.514C56.7326 61.514 48.7374 30.1644 26.8109 29.115C6.20441 28.1252 5.95705 47.8498 18.8386 50.8449C30.2595 53.5158 43.3631 47.0549 56.7326 61.514Z" fill="#00D7F0" />
        <path d="M56.536 68.5009C56.536 68.5009 46.2499 55.6494 33.478 60.0384C22.6699 63.7515 28.2739 72.6657 33.8251 73.5115C42.1421 74.7947 47.5926 67.3273 56.536 68.5009Z" fill="#00D7F0" />
      </g>
      <g clip-path="url(#clip1)">
        <path d="M137.341 58.4173C137.341 58.4173 130.03 44.9337 133.043 33.8108C136.055 22.6879 144.297 22.0505 148.874 24.3042C153.451 26.558 157.428 35.9095 150.322 41.3292C143.192 46.7441 138.349 49.6845 137.341 58.4173Z" fill="#00D7F0" />
        <path d="M140.639 70.139C140.639 70.139 148.634 38.7894 170.56 37.74C191.167 36.7502 191.414 56.4748 178.533 59.4699C167.112 62.1408 154.008 55.6799 140.639 70.139Z" fill="#00D7F0" />
        <path d="M140.835 77.1259C140.835 77.1259 151.121 64.2744 163.893 68.6634C174.701 72.3765 169.097 81.2907 163.546 82.1365C155.229 83.4197 149.778 75.9523 140.835 77.1259Z" fill="#00D7F0" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="61.9883" height="55.9242" fill="white" transform="translate(0.365234 51.8008) rotate(-56.0598)" />
        </clipPath>
        <clipPath id="clip1">
          <rect width="61.9883" height="55.9242" fill="white" transform="matrix(-0.558328 -0.829621 -0.829621 0.558328 197.006 60.4258)" />
        </clipPath>
      </defs>
    </svg>;
  };
  const selectDrop = (id) => {
    let correctAnswers = [0, 1, 4];
    let okAnswers = corrects;
    let ans = dataAnswers;
    ans.push(quarters[id])
    setDataAnswers(ans)

    let data = {
      'ENTRE1-Reto 4- Gotas': dataAnswers,
      'ENTRE1-Reto 4 Veces': attempts - 1,
    }
    setSelectedDrop(id);
    if (correctAnswers.includes(id)) {
      okAnswers.push(id);
      setCorrects(okAnswers);
      if (okAnswers.length >= 3) {
        saveActivity(data)
        setFeedback('correct');
        //saveUser({ ...userData, rainDrop: true });
        setResult(true);
      }
    } else if (attempts < 3) {
      setTimeout(function () {
        setSelectedDrop('');
        setFeedback('clue');
        setAttempts(attempts + 1);
      }, 500);
    } else {
      //saveUser({ ...userData, rainDrop: false });
      setResult(false);
      data['ENTRE1-Reto 4 Veces'] = attempts
      saveActivity(data)
      setTimeout(function () {
        goView(2);
      }, 500);
    }
  };

  const getClasses = (index) => {
    let style = "";
    if (selectedDrop === index) {
      style += " show-splash";
    }
    if (corrects.includes(index)) {
      style += " answered";
    }
    return style;
  };

  return (
    <div className="rain-drop">
      <div className="rain-drop-body">
        <div className="rain-drop-header">
          <img src={TopCloud} alt="Nubes altas" />
          <p>Selecciona las <strong>tres</strong> gotas con <strong>fracciones equivalentes</strong> a 6/8</p>
          <div className="rain-drop-header-quest">
            <div className="rain-drop-header-quest-drops">
              {[...Array(3)].map((item, i) => <div key={i}
                className={`${i < corrects.length ? "fill-mini-drop" : ""}`}>
                <BsDropletFill />
              </div>
              )}
            </div>
            <div className="scales-fractions"><span>6</span>
              <span>8</span>
            </div>
          </div>
        </div>
        <div className="slide-in-top">
          {[...Array(2)].map(() => <div className="rain-drop-activity">
            {quarters.map((quart, i) => <div
              key={quart}
              onClick={() => selectDrop(i)}
              className={`rain-drop-activity-drop ${getClasses(i)}`}>
              <Drop />
              <Splash />
              <div className="scales-fractions">
                <span>{quart.split(/\//)[0]}</span>
                <span>{quart.split(/\//)[1]}</span>
              </div>
            </div>
            )}
          </div>)}
        </div>
      </div>
      <img src={BottomWater} alt="Piso de agua" className="bottom-water" />
      {showFeedback === 'correct' && <FeedbackCorrect goView={goView} view={3} />}
      {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={clueTexts} />}
    </div>
  );
}