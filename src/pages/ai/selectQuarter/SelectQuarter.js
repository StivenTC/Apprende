/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import saveActivity from "../../../helpers/saveActivity";

export const SelectQuarter = ({ goView, saveUser, userData }) => {

  const [selectOption, setSelectOption] = useState('');
  const [showFeedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const [dataAnswers, setDataAnswers] = useState([]);

  const clueTexts = [
    "Las fracciones equivalentes representan la misma cantidad aunque el numerador y el denominador sean diferentes.",
    "Para encontrar una fracción equivalente a 3/4 debes multiplicar o dividir el numerador y el denominador de la fracción por el mismo número."
  ]
  const FraccionA = () => {
    return <svg width="117" height="84" viewBox="0 0 117 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="41" fill="#28D2EE" />
      <rect x="30" width="26" height="41" fill="#28D2EE" />
      <rect x="58" width="29" height="41" fill="#28D2EE" />
      <rect x="89" width="28" height="41" fill="#D9D9ED" />
      <rect y="43" width="28" height="41" fill="#D9D9ED" />
      <rect x="30" y="43" width="26" height="41" fill="#D9D9ED" />
      <rect x="58" y="43" width="29" height="41" fill="#D9D9ED" />
      <rect x="89" y="43" width="28" height="41" fill="#D9D9ED" />
    </svg>
  }
  const FraccionB = () => {
    return <svg width="117" height="84" viewBox="0 0 117 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="37.6552" height="41" fill="#28D2EE" />
      <rect x="40.3447" width="34.9655" height="41" fill="#28D2EE" />
      <rect x="78" width="39" height="41" fill="#28D2EE" />
      <rect y="43" width="37.6552" height="41" fill="#28D2EE" />
      <rect x="40.3447" y="43" width="34.9655" height="41" fill="#D9D9ED" />
      <rect x="78" y="43" width="39" height="41" fill="#D9D9ED" />
    </svg>
  }
  const FraccionC = () => {
    return <svg width="117" height="84" viewBox="0 0 117 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18.4546" height="41" fill="#28D2EE" />
      <rect x="19.7725" width="17.1364" height="41" fill="#28D2EE" />
      <rect x="38.2275" width="19.1136" height="41" fill="#28D2EE" />
      <rect x="58.6592" width="18.4546" height="41" fill="#28D2EE" />
      <rect x="78.6025" width="18.4546" height="41" fill="#28D2EE" />
      <rect x="98.5459" width="18.4546" height="41" fill="#28D2EE" />
      <rect y="43" width="18.4546" height="41" fill="#28D2EE" />
      <rect x="19.7725" y="43" width="17.1364" height="41" fill="#28D2EE" />
      <rect x="38.2275" y="43" width="19.1136" height="41" fill="#28D2EE" />
      <rect x="58.6592" y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="78.6025" y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="98.5459" y="43" width="18.4546" height="41" fill="#D9D9ED" />
    </svg>

  }
  const FraccionD = () => {
    return <svg width="117" height="84" viewBox="0 0 117 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18.4546" height="41" fill="#28D2EE" />
      <rect x="19.7725" width="17.1364" height="41" fill="#28D2EE" />
      <rect x="38.2275" width="19.1136" height="41" fill="#28D2EE" />
      <rect x="58.6592" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="78.6025" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="98.5459" width="18.4546" height="41" fill="#D9D9ED" />
      <rect y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="19.7725" y="43" width="17.1364" height="41" fill="#D9D9ED" />
      <rect x="38.2275" y="43" width="19.1136" height="41" fill="#D9D9ED" />
      <rect x="58.6592" y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="78.6025" y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="98.5459" y="43" width="18.4546" height="41" fill="#D9D9ED" />
    </svg>

  }

  const selectCard = (id) => {
    setSelectOption(id)
  }

  const getClasses = (index) => {
    let style = ""

    if (selectOption === index) {
      style += " selected"
    } else if (String(selectOption).length > 0) {
      style += " no-selected"
    }
    return style
  }

  const validate = () => {
    return String(selectOption).length > 0
  }

  const nextActivity = () => {
    let ans = dataAnswers;
    ans.push(String.fromCharCode(65 + selectOption))
    setDataAnswers(ans)

    let data = {
      'ENTRE1-Reto 2- Intento 1': dataAnswers[0],
      'ENTRE1-Reto 2- Intento 2': dataAnswers[1],
      'ENTRE1-Reto 2- Intento 3': dataAnswers[2],
      'ENTRE1-Reto 2 Veces': attempts - 1,
    }
    if (selectOption === 2) {
      setFeedback('correct')
      saveActivity(data)
      saveUser({ ...userData, selectQuarter: true })
    } else if (attempts < 3) {
      setSelectOption('')
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      data['ENTRE1-Reto 2 Veces'] = attempts
      saveActivity(data)
      saveUser({ ...userData, selectQuarter: false })
      goView(6)
    }
  }

  return (
    <div className="select-quarter">
      <Header goView={goView} actualView={2} />
      <div className="select-quarter-body">
        <p>Selecciona el gráfico que representa una <strong>fracción equivalente</strong> a la fracción que encuentras en la tarjeta:</p>
        <div className="scales-fractions"><span>3</span>
          <span>4</span>
        </div>
        <div className="select-quarter-list">
          <div className={`select-quarter-card ${getClasses(0)}`}
            onClick={() => selectCard(0)}>
            <FraccionA />
          </div>
          <div className={`select-quarter-card ${getClasses(1)}`}
            onClick={() => selectCard(1)}>
            <FraccionB />
          </div>
          <div className={`select-quarter-card ${getClasses(2)}`}
            onClick={() => selectCard(2)}>
            <FraccionC />
          </div>
          <div className={`select-quarter-card ${getClasses(3)}`}
            onClick={() => selectCard(3)}>
            <FraccionD />
          </div>
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          Siguiente
          <BiRightArrowAlt />
        </button>

        {showFeedback === 'correct' && <FeedbackCorrect goView={goView} view={0} />}
        {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={clueTexts} />}
      </div>
    </div>
  )
}