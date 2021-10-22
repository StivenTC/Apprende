/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import LlamasBkg from "../../../assets/llama-bkg.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { LlamasDnD } from "./LlamasDnD";

export const Llamas = ({ goView, saveUser, userData }) => {

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
  const [selectCards, setSelecCards] = useState([]);
  const [llamaCards, setLlamaCards] = useState(llamasCards);
  const [showFeedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const clueTexts = [
    "¿Las fracciones tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para ordenarlas.",
    "Para ordenar fracciones que tienen el mismo denominador(en este caso 8), ordena los numeradores de menor a mayor."
  ]

  const validate = () => {
    return selectCards.length >= 3
  }

  const nextActivity = () => {
    let corrects = ['1/8', '3/8', '7/8']
    let answered = selectCards.map((t) => t.quarter)

    if (JSON.stringify(corrects) === JSON.stringify(answered)) {
      setFeedback('correct')
      saveUser({ ...userData, llamas: true })
    } else if (attempts < 3) {
      setSelecCards([])
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      saveUser({ ...userData, llamas: false })
      goView(3)
    }
  }
  return (
    <div className="llamas">
      <Header goView={goView} actualView={2} />
      <div className="llamas-body">
        <p>Arrastra y organiza las fracciones de <strong>menor a mayor</strong> sobre la recta numérica.</p>
        <div className="llamas-activity">
          <LlamasDnD cards={llamaCards} answer={setSelecCards} />
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>

      </div>
      {showFeedback === 'correct' && <FeedbackCorrect goView={goView} view={0} />}
      {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={clueTexts} />}
      <img className="bottom-bkg" src={LlamasBkg} alt="landscape green" />
    </div>
  )
}