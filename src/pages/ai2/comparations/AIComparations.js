
import { Header } from "../../../components/layout/Header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEquals, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import createPie from "../../../components/shapes/CeatePie";

export const AIComparations = ({ goView, saveUser, userData }) => {
  const [selectOption, setSelectOption] = useState('');
  const [showFeedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const clueTexts = [
    "¿Las fracciones representadas tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para compararlas.",
    "Recuerda que cuando comparas fracciones que tienen el mismo denominador (en este caso 6), la fracción con el numerador más grande es la mayor."
  ]
  const options = [
    {
      icon: <FaGreaterThan />,
      text: "Mayor que",
      value: ">"
    }, {
      icon: <FaLessThan />,
      text: "Menor que",
      value: "<"
    }, {
      icon: <FaEquals />,
      text: "Igual a",
      value: "="
    }]

  useEffect(() => {
    createPie("pie1", 55, 55, 50, 6, [0, 4, 5], ['#28D2EE', '#EDEDFB']);
    createPie("pie2", 55, 55, 50, 6, [5], ['#28D2EE', '#EDEDFB']);
  }, []);

  const selectCard = (id) => {
    setSelectOption(id)
  }

  const getClasses = (index) => {
    let style = ""

    if (selectOption === index) {
      style += " selected"
    }
    return style
  }

  const validate = () => {
    return String(selectOption).length > 0
  }

  const nextActivity = () => {
    console.log(selectOption)
    if (selectOption === 1) {
      setFeedback('correct')
      saveUser({ ...userData, aiComparations: true })
    } else if (attempts < 3) {
      setSelectOption('')
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      saveUser({ ...userData, aiComparations: false })
      goView(6)
    }
  }
  console.log(selectOption)
  return (
    <div className="ai-comparations">
      <Header goView={goView} actualView={2} />
      <div className="ai-comparations-body">
        <p>
          <strong>Compara</strong> las dos fracciones representadas en los siguientes gráficos usando el símbolo correcto.
        </p>

        <div className="ai-comparations-activity">
          <div className="ai-comparations-activity-items">
            {options.map((option, index) =>
              <div key={option.value}
                onClick={() => selectCard(index)}
                className={`ai-comparations-activity-card ${getClasses(index)}`}>
                <div>
                  {option.icon}
                </div>
                <p>{option.text}</p>
              </div>
            )}
          </div>
          <div className="ai-comparations-activity-response">
            <div className="ai-comparations-activity-cake">
              <svg viewBox="0 0 110 110" id="pie1" />
            </div>
            <div className="ai-comparations-activity-response-item">
              {validate() ?
                <div
                  onClick={() => setSelectOption('')}
                  className="ai-comparations-activity-card">
                  <div>
                    {options[selectOption].icon}
                  </div>
                  <p>{options[selectOption].text}</p>
                </div> :
                <div className="ai-comparations-activity-response-item-card" />}
            </div>
            <div className="ai-comparations-activity-cake">
              <svg viewBox="0 0 110 110" id="pie2" />
            </div>
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