/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Header } from "../../../components/layout/Header/Header";
import createPie from "../../../components/shapes/CeatePie";
import totem from "../../../assets/mascaraInca.png"
import { BiRightArrowAlt } from "react-icons/bi";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import saveActivity from "../../../helpers/saveActivity";

export const Focus = ({ goView, saveUser, userData }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showFeedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [dataAnswers, setDataAnswers] = useState([]);

  const pieColors = ['#FFE69B', '#EDEDFB']
  const cards = [
    {
      id: "pie1",
      chart: 5,
      portions: [4],
      value: 1
    },
    {
      id: "pie2",
      chart: 12,
      portions: [11, 10, 9],
      value: 2
    },
    {
      id: "pie3",
      chart: 4,
      portions: [3],
      value: 2
    },
    {
      id: "pie4",
      chart: 10,
      portions: [8, 9],
      value: 1
    },
    {
      id: "pie5",
      chart: 12,
      portions: [2, 3],
      value: 3
    },
    {
      id: "pie6",
      chart: 6,
      portions: [1],
      value: 3
    }
  ]
  const clueTexts = [
    "Las fracciones equivalentes representan la misma cantidad aunque el numerador y el denominador sean diferentes.",
    "Para encontrar una fracción equivalente debes multiplicar o dividir el numerador y el denominador de la fracción por el mismo número."
  ]

  useEffect(() => {
    for (let card of cards) {
      createPie(card.id, 55, 55, 50, card.chart, card.portions, pieColors);
    }
  }, [cards, pieColors]);

  const selectCard = (id) => {
    let currentAnswer = answers
    let currentSelection = selectedAnswers
    let index = 0
    let repeatIndex
    if (id % 2 === 0) {
      setSelectedCard(id)
      if (!showOptions) {
        setShowOptions(true)
      }
    } else {
      index = parseInt(selectedCard / 2)
      if (selectedCard !== undefined) {
        repeatIndex = currentSelection.findIndex(element => element && element.includes(id))
        if (repeatIndex >= 0) {
          currentSelection[repeatIndex] = []
        }
        currentAnswer[index] = cards[selectedCard].value === cards[id].value
        currentSelection[index] = [selectedCard, id]
        setAnswers(currentAnswer)
        setSelectedAnswers(currentSelection)
        setSelectedCard()
      }
    }
  }

  const getClasses = (index) => {
    let clases = ""
    if (selectedCard === index) {
      clases += " open-card"
      switch (index) {
        default:
        case 0:
          clases += " selected-green"
          break;
        case 2:
          clases += " selected-orange"
          break;
        case 4:
          clases += " selected-blue"
      }
    }
    if (selectedAnswers?.length > 0) {
      if (selectedAnswers[0]?.includes(index)) {
        clases += ` open-card selected-green`
      } else if (selectedAnswers[1]?.includes(index)) {
        clases += ` open-card selected-orange`
      } else if (selectedAnswers[2]?.includes(index)) {
        clases += ` open-card selected-blue`
      }
    }
    if (selectedAnswers.includes(index)) {
      clases += ` open-card answered-${selectedAnswers.findIndex((e) => e === index)}`
    }
    return clases
  }

  const nextView = () => {
    let ans = dataAnswers;
    ans.push(selectedAnswers.join(';'))
    setDataAnswers(ans)
    let data = {
      'ENTRE1-Reto 1- Intento 1': dataAnswers[0],
      'ENTRE1-Reto 1- Intento 2': dataAnswers[1],
      'ENTRE1-Reto 1- Intento 3': dataAnswers[2],
      'ENTRE1-Reto 1 Veces': attempts - 1,
    }
    let completeQuest = answers.every(Boolean)
    if (completeQuest) {
      saveActivity(data)
      setFeedback('correct')
      saveUser({ ...userData, focus: true })
    } else if (attempts < 3) {
      setSelectedAnswers([])
      setAnswers([])
      setShowOptions(false)
      setFeedback('clue')
      setSelectedCard()
      setAttempts(attempts + 1)
    } else {
      data['ENTRE1-Reto 1 Veces'] = attempts
      saveActivity(data)
      saveUser({ ...userData, focus: false })
      goView(3)
    }
  }

  const validate = () => {
    let r = false
    let ans = answers.filter(n => n !== undefined)
    if (ans.length > 2) {
      r = true
    }
    return r
  }
  return (
    <div className="focus">
      <Header goView={goView} actualView={2} />
      <div className="focus-body">
        <p>Arma 3 parejas de gráficos de fracciones equivalentes.</p>
        <div className={`focus-list ${showOptions ? "show-options" : ""}`}>
          {cards.map((card, i) =>
            <div key={card.id}
              className={`focus-card ${getClasses(i)}`}
              onClick={() => selectCard(i)}>
              <img src={totem} alt='Máscara inca' />
              <svg viewBox="0 0 110 110" id={card.id} />
            </div>
          )}
        </div>
        <button
          className={`btn-next ${validate() ? "" : "disabled"}`}
          onClick={() => validate() ? nextView() : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>

        {showFeedback === 'correct' && <FeedbackCorrect goView={goView} view={0} />}
        {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={clueTexts} />}
      </div>
    </div>
  )
}