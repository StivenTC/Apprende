
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEquals, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import createPie from "../../../components/shapes/CeatePie";
import saveActivity from "../../../helpers/saveActivity";

export const Comparation = ({ goView, saveUser, userData, question }) => {
  const [selectOption, setSelectOption] = useState('');
  const [showFeedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(1);
  const [dataAnswers, setDataAnswers] = useState([]);

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
    if (isPie()) {
      question.options.forEach((option, index) => {
        createPie(`pie${index + 1}`, 55, 55, 50, option.total, option.list, ['#28D2EE', '#EDEDFB']);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

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

  const isPie = () => {
    return question.type === 'PIE';
  }

  const nextActivity = () => {
    let ans = dataAnswers;
    ans.push(String.fromCharCode(65 + selectOption))
    setDataAnswers(ans)

    let data = {
      'ENTRE2-Reto 2- Intento 1': dataAnswers[0],
      'ENTRE2-Reto 2- Intento 2': dataAnswers[1],
      'ENTRE2-Reto 2- Intento 3': dataAnswers[2],
      'ENTRE2-Reto 2 Veces': attempts - 1,
    }
    if (selectOption === question.answer) {
      saveActivity(data)
      setFeedback('correct')
      saveUser({ ...userData, aiComparations: true })
    } else if (attempts < 3) {
      setSelectOption('')
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      data['ENTRE2-Reto 2 Veces'] = attempts
      saveActivity(data)
      saveUser({ ...userData, aiComparations: false })
      goView(6)
    }
  }
  console.log(selectOption)
  return (
    <div className="ai-comparations">
      <div className="ai-comparations-body">
        <p dangerouslySetInnerHTML={{ __html: question.description }} />

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
              {
                isPie() ?
                  <svg viewBox="0 0 110 110" id="pie1" /> :
                  <div className="scales-fractions">
                    <span>{question.options[0].num1}</span>
                    <span>{question.options[0].num2}</span>
                  </div>
              }
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
              {
                isPie() ?
                  <svg viewBox="0 0 110 110" id="pie2" /> :
                  <div className="scales-fractions">
                    <span>{question.options[1].num1}</span>
                    <span>{question.options[1].num2}</span>
                  </div>
              }
            </div>
          </div>
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          {question.submit.label}
          <BiRightArrowAlt />
        </button>

        {showFeedback === 'correct' && <FeedbackCorrect goView={goView} view={0} />}
        {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={question.clueTexts} />}
      </div>
    </div>
  )
}