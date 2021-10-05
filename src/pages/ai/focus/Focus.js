/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Header } from "../../../components/layout/header/Header";
import createPie from "../../../components/shapes/CeatePie";
import totem from "../../../assets/mascaraInca.png"
import { BiRightArrowAlt } from "react-icons/bi";
export const Focus = ({ goView }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answers, setAnswers] = useState([]);

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


  useEffect(() => {
    for (let card of cards) {
      createPie(card.id, 55, 55, 50, card.chart, card.portions, pieColors);
    }
  }, [cards, pieColors]);

  const selectCard = (id) => {
    let currentAnswer = answers
    let currentSelection = selectedAnswers
    let index = answers.length

    if (id % 2 === 0) {
      setSelectedCard(id)
      if (!showOptions) {
        setShowOptions(true)
      }
    } else {
      setSelectedOption(id)
      if (selectedCard !== undefined) {
        currentAnswer[index] = cards[selectedCard].value === cards[id].value
        currentSelection.push(selectedCard, id)
        setAnswers(currentAnswer)
        setSelectedAnswers(currentSelection)
        setSelectedCard('')
        setSelectedOption('')
      }
    }
  }

  const getClasses = (index) => {
    let clases = ""
    if (selectedCard === index) {
      clases += " open-card"
    }
    if (selectedOption === index) {
      clases += ` selected-${answers.length}`
    }
    if (selectedAnswers.includes(index)) {
      clases += ` open-card answered-${selectedAnswers.findIndex((e) => e === index)}`
    }
    return clases
  }
  console.log(answers)
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
          className={`btn-next ${answers.length > 2 ? "" : "disabled"}`}
          onClick={() => answers.length > 2 ? goView(3) : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  )
}