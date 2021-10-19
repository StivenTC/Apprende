/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import LlamasBkg from "../../../assets/llama-bkg.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { LlamasDnD } from "./LlamasDnD";

export const Llamas = ({ goView, saveUser, userData }) => {

  const [selectOption, setSelectOption] = useState('');
  const [showFeedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const clueTexts = [
    "Las fracciones equivalentes representan la misma cantidad aunque el numerador y el denominador sean diferentes.",
    "Para encontrar una fracción equivalente a 3/4 debes multiplicar o dividir el numerador y el denominador de la fracción por el mismo número."
  ]
  const llamasCards = [
    {
      id: "card-01",
      quarter: "7/8",
      color: "#43D8BC"
    },
    {
      id: "card-02",
      quarter: "1/8",
      color: "#28D2EE"
    },
    {
      id: "card-03",
      quarter: "3/8",
      color: "#FF820F"
    }
  ]

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
    if (selectOption === 2) {
      setFeedback('correct')
      saveUser({ ...userData, selectQuarter: true })
    } else if (attempts < 3) {
      setSelectOption('')
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      saveUser({ ...userData, selectQuarter: false })
      goView(6)
    }
  }

  return (
    <div className="llamas">
      <Header goView={goView} actualView={2} />
      <div className="llamas-body">
        <p>Arrastra y <strong>organiza</strong> las tres alpacas sobre la recta numérica de acuerdo con las fracciones.</p>
        <div className="llamas-activity">
          <LlamasDnD cards={llamasCards} />
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>

        {showFeedback === 'correct' && <FeedbackCorrect goView={goView} view={0} />}
        {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={clueTexts} />}
      </div>
      <img className="bottom-bkg" src={LlamasBkg} alt="landscape green" />
    </div>
  )
}