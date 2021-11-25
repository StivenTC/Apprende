import { useState } from 'react';
import robot from "../../assets/Volando.png";
import FinishBKG from "../../assets/finishBKG.jpg";
import { useHistory } from 'react-router';
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export function Finish({ goView, userData }) {
  let history = useHistory();

  const [results] = useState(() => {
    const lsData = "appData";
    let correctData = ["D", "C", "C", "C", "D", "B", "B", [2, 5, 6], ["3/10", "2/5", "1/4", "2/2"], "D", "A", "C"]
    let answers = [];
    let corrects = 0
    // getting stored value
    const saved = localStorage.getItem(lsData);
    const jsonAnswers = JSON.parse(saved);

    for (var i in jsonAnswers) {
      answers.push(jsonAnswers[i])
    }
    // corrects = answers.map((t, i) => t === correctData[i])
    for (let [index, val] of answers.entries()) {
      if (val === correctData[index]) {
        corrects++
      }
    }
    return `${corrects} de 12 correctas.` || ''
  });

  return (
    <div className="efda-finish" style={{ background: `top/100% 100% no-repeat url("${FinishBKG}")` }}>
      <Link to="/">
        <img src={robot} alt='robot' />
      </Link>
      <div>
        <p>¡Has terminado!</p>
        <br />
        <br />
        <p>Resultado</p>
        <p>{results}</p>
        <button
          className="btn-next"
          onClick={() => history.push("/")}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}