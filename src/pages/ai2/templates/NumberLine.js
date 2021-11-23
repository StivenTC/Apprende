/* eslint-disable react-hooks/exhaustive-deps */
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { NumberLineDnD } from "../templates/NumberLineDnD";
import saveActivity from "../../../helpers/saveActivity";

export const NumberLine = ({ goView, setResult, question, nextQuestion, nextActivity }) => {

  const [selectCards, setSelecCards] = useState([]);
  const [showFeedback, setFeedback] = useState("");
  const [dataAnswers, setDataAnswers] = useState([]);
  const [attempts, setAttempts] = useState(1);

  const validate = () => {
    return selectCards.length >= 3
  }

  const nextActivityAction = () => {
    let answered = selectCards.map((t) => t.quarter)

    let ans = dataAnswers;
    ans.push(answered.join(';'))
    setDataAnswers(ans)

    let data = {
      'ENTRE2-Reto 1- Intento 1': dataAnswers[0],
      'ENTRE2-Reto 1- Intento 2': dataAnswers[1],
      'ENTRE2-Reto 1- Intento 3': dataAnswers[2],
      'ENTRE2-Reto 1 Veces': attempts - 1,
    }

    if (JSON.stringify(question.answer) === JSON.stringify(answered)) {
      saveActivity(data)
      setFeedback('correct')
      setResult(true);
      //saveUser({ ...userData, llamas: true })
    } else if (attempts < 3) {
      setSelecCards([])
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      data['ENTRE2-Reto 1 Veces'] = attempts
      saveActivity(data)
      setResult(false);
      //saveUser({ ...userData, llamas: false })
      goView(2)
    }
  }
  return (
    <div className="llamas">
      <div className="llamas-body">
        <p dangerouslySetInnerHTML={{ __html: question.description }} />
        <div className="llamas-activity">
          <NumberLineDnD
            cards={question.options || []}
            answer={setSelecCards}
            scale={question.scaleImage}/>
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivityAction() : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>

      </div>
      {showFeedback === 'correct' && <FeedbackCorrect goView={nextActivity} view={nextQuestion} />}
      {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={question.clueTexts} />}
      <img className="bottom-bkg" src={question.backgroundImage} alt="landscape green" />
    </div>
  )
}