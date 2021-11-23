/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { IoBalloon } from "react-icons/io5";
import TopCloud from "../../../assets/top-clouds.svg";
import BottomWater from "../../../assets/bottom-water.svg";
import saveActivity from "../../../helpers/saveActivity";

export function Ballons({ goView, setResult }) {

  const [selectedDrop, setSelectedDrop] = useState('');
  const [showFeedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const [corrects, setCorrects] = useState([]);
  const [dataAnswers, setDataAnswers] = useState([]);

  const quarters = ["3/20", "3/5", "12/20", "12/10", "60/100", "6/20"];
  const clueTexts = [
    "¿Cómo encuentras una fracción equivalente a otra? ¿Qué operaciones puedes hacer tanto en el numerador como en el denominador para encontrar fracciones equivalentes?",
    "Recuerda que dos fracciones son equivalentes si representan la misma cantidad aunque sus numeradores y denominadores sean diferentes."
  ];
  const Drop = () => {
    return <svg className="water-drop" width="105" height="224" viewBox="0 0 105 224" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.29545 55.9583C3.43124 92.0133 33.5586 133.109 59.2933 130.873C83.1094 128.809 107.627 82.9764 104.504 46.9214C101.382 10.8665 76.7452 -2.19267 47.9674 0.294787C19.1896 2.78225 -2.82711 19.8505 0.29545 55.9583Z" fill="#FFC107" />
      <path d="M58.8962 128.346C63.4073 141.932 65.4201 156.223 64.837 170.527C64.546 177.447 63.6462 184.341 62.7465 191.221C61.4234 201.594 59.7298 211.703 59.8092 222.116" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M69.8781 140.691H69.4944C68.4476 140.574 67.4365 140.241 66.5254 139.712C65.6143 139.184 64.823 138.472 64.202 137.621C64.609 139.384 64.4753 141.228 63.8183 142.913C62.9979 144.501 60.6957 145.427 59.3594 144.237C58.9221 143.788 58.6037 143.238 58.4332 142.636C57.9045 141.137 57.6665 139.552 57.7319 137.965C55.8808 140.499 53.1808 142.283 50.124 142.993C48.8009 143.297 47.1205 143.191 46.6045 141.961C46.4524 141.537 46.4069 141.083 46.4722 140.638C46.8061 136.624 48.5773 132.865 51.4603 130.053C53.5112 128.028 58.2215 124.76 61.2117 124.76C64.202 124.76 68.0522 129.576 69.6929 131.865C71.3336 134.154 75.9645 141.021 69.8781 140.691Z" fill="#FFC107" />
      <g style={{ mixBlendMode: "multiply" }}>
        <path d="M36.6019 123.054C85.4514 107.468 98.1401 46.3133 98.8017 24.9053C102.049 31.8294 103.991 39.2932 104.531 46.9219C107.627 82.9769 83.0963 128.81 59.2934 130.874C51.8442 131.522 44.0246 128.532 36.6019 123.054Z" fill="#E2E2E2" />
      </g>
      <g opacity="0.2">
        <path opacity="0.2" d="M9.72934 41.1255C7.77112 55.0712 8.28714 70.5913 17.2843 81.4277C19.8512 84.537 23.4633 87.3288 27.4988 87.0641C33.347 86.7466 36.9988 80.6735 39.1025 75.1561C42.6088 66.1589 44.8713 56.1826 42.6882 46.7091C38.8247 29.8261 13.1165 17.1109 9.72934 41.1255Z" fill="#FFFDFF" />
      </g>
      <g opacity="0.2">
        <path opacity="0.2" d="M41.3122 6.34073C39.9858 6.24162 38.654 6.43695 37.4119 6.91272C36.1699 7.3885 35.0484 8.13296 34.1277 9.09282C32.2808 11.0292 31.0035 13.4373 30.4362 16.0524C30.0327 17.3512 29.8963 18.7183 30.035 20.0712C30.1737 21.4241 30.5847 22.735 31.2433 23.925C32.7648 26.2272 35.5831 27.3254 38.3219 27.762C43.9452 28.675 50.23 27.0608 53.8421 22.6945C54.77 21.6289 55.444 20.3667 55.8135 19.003C56.0664 17.7563 56.046 16.4695 55.7536 15.2315C55.4612 13.9934 54.9039 12.8335 54.12 11.8317C52.5314 9.83576 50.4966 8.24053 48.1792 7.1743C46.0886 6.14227 43.3762 5.42778 41.5636 6.88321" fill="#FFFDFF" />
      </g>
    </svg>;
  };
  const Splash = () => {
    return <svg className="drop-splash scale-in-center" width="187" height="144" viewBox="0 0 187 144" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.4449 20.7734C42.4449 20.7734 48.2926 26.2446 41.0463 35.1154C41.0463 35.1154 28.858 15.4916 20.2359 18.9368C20.2359 18.9368 26.3255 9.47275 42.4449 20.7734Z" fill="#FFC107" />
      <path d="M152.472 120.436C152.472 120.436 149.031 115.918 152.075 110.061C152.075 110.061 168.354 110.383 167.096 121.384C167.14 121.294 163.299 113.555 152.472 120.436Z" fill="#FFC107" />
      <path d="M165.531 119.371C165.531 119.371 168.429 136.366 184.129 130.248C184.129 130.248 186.95 125.062 182.165 123.673C182.165 123.673 175.678 128.589 165.531 119.371Z" fill="#FFC107" />
      <path d="M24.8832 100.245C24.8832 100.245 30.386 98.8384 34.5923 103.925C34.5923 103.925 27.9485 118.79 18.3091 113.342C18.374 113.418 26.9983 112.898 24.8832 100.245Z" fill="#FFC107" />
      <path d="M20.7729 112.686C20.7729 112.686 3.99261 108.728 3.50461 125.571C3.50461 125.571 7.18057 130.19 10.3252 126.326C10.3252 126.326 8.32798 118.436 20.7729 112.686Z" fill="#FFC107" />
      <path d="M157.883 3.24513C157.883 3.24513 163.386 1.83837 167.592 6.92537C167.592 6.92537 160.949 21.7898 151.309 16.3417C151.374 16.4178 159.998 15.8977 157.883 3.24513Z" fill="#FFC107" />
      <path d="M153.773 15.6864C153.773 15.6864 136.993 11.7277 136.505 28.5712C136.505 28.5712 140.181 33.1904 143.325 29.3263C143.325 29.3263 141.328 21.4357 153.773 15.6864Z" fill="#FFC107" />
      <path d="M170.337 80C170.337 80 160.237 83.7 155.137 80.7C155.137 80.7 153.937 72.1 158.637 64C158.737 64 161.037 77.2 170.337 80Z" fill="#FFC107" />
      <path d="M54.3154 132.701C53.9845 133.201 53.5702 133.647 53.1559 134.092C51.6641 135.623 49.922 136.989 48.04 138.022C47.6525 138.246 42.8903 140.372 42.722 139.901C42.1057 138.295 41.5459 136.966 40.791 135.388C40.6793 135.194 40.5676 135 40.5945 134.778C40.6765 134.473 40.9536 134.416 41.2025 134.221C43.5285 133.241 45.7145 131.93 47.5386 130.258C48.3404 129.59 49.3358 128.809 49.8873 127.975C50.2734 127.391 50.3768 125.422 51.2378 125.751C52.8214 126.438 54.2946 127.292 55.7127 128.23C55.9134 129.921 55.1978 131.366 54.3154 132.701Z" fill="#FFC107" />
      <path d="M32.178 72.1798L28.3089 80.0748L19 71.7559L32.178 72.1798Z" fill="#FFC107" />
    </svg>;
  };
  const selectDrop = (id) => {
    let correctAnswers = [1, 2, 4];
    let okAnswers = corrects;
    let ans = dataAnswers;
    ans.push(quarters[id])
    setDataAnswers(ans)

    let data = {
      'ENTRE1-Reto 5- Globos': dataAnswers,
      'ENTRE1-Reto 5 Veces': attempts - 1,
    }
    setSelectedDrop(id);
    if (correctAnswers.includes(id)) {
      okAnswers.push(id);
      setCorrects(okAnswers);
      if (okAnswers.length >= 3) {
        saveActivity(data)
        setFeedback('correct');
        setResult(true)
        //saveUser({ ...userData, rainDrop: true });
      }
    } else if (attempts < 3) {
      setTimeout(function () {
        setSelectedDrop('');
        setFeedback('clue');
        setAttempts(attempts + 1);
      }, 500);
    } else {
      setResult(false)
      //saveUser({ ...userData, rainDrop: false });
      data['ENTRE1-Reto 5 Veces'] = attempts
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
    <div className="balloons">
      <div className="balloons-body">
        <div className="balloons-header">
          <p>Selecciona los <strong>tres globos</strong> que tienen fracciones equivalentes a <strong><sup>6</sup>/<sub>10</sub></strong></p>
          <div className="balloons-header-quest">
            <div className="balloons-header-quest-drops">
              {[...Array(3)].map((item, i) => <div key={i}
                className={`${i < corrects.length ? "fill-mini-drop" : ""}`}>
                <IoBalloon />
              </div>
              )}
            </div>
            <div className="scales-fractions"><span>6</span>
              <span>10</span>
            </div>
          </div>
        </div>
        <div className="balloons-body">
          <div className="slide-to-sky">
            {[...Array(2)].map(() => <div className="balloons-activity">
              {quarters.map((quart, i) => <div
                key={quart}
                onClick={() => selectDrop(i)}
                className={`balloons-activity-drop ${getClasses(i)}`}>
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
      </div>
      {showFeedback === 'correct' && <FeedbackCorrect goView={goView} view={3} />}
      {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={clueTexts} />}
    </div>
  );
}