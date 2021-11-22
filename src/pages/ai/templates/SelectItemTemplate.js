/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";

export const SelectItemTemplate = ({ goView, setResult, question, nextActivity, nextQuestion }) => {

  const [selectOption, setSelectOption] = useState('');
  const [showFeedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(1);

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

  const nextActivityAction = () => {
    if (selectOption === question.answer) {
      setFeedback('correct')
      //saveUser({ ...userData, selectQuarter: true })
      setResult(true)
    } else if (attempts < 3) {
      setSelectOption('')
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      //saveUser({ ...userData, selectQuarter: false })
      setResult(false)
      goView(2)
    }
  }

  const getItemStyle = (option, index) => {
    let background = `center center/95% no-repeat url("${option.default}")`

    if (selectOption === index) {
      background = `0.3em center/100% no-repeat url("${option.activated}")`
    }

    return {
      background
    }
  };

  return (
    <div className="select-item" style={{background: `url("/images/fondo_p.png") no-repeat center/100% 100%`}}>
      <div className="select-item-body">
        <p className="select-item-title">{question.title}</p>
        <p className="select-item-description" dangerouslySetInnerHTML={{ __html: question.description }}/>
        <div className="scales-fractions fraction1">
          <span>{question.fraction.num1}</span>
          <span>{question.fraction.num2}</span>
        </div>
        <div className="select-item-list">
          {
            question.options.map((option, index) => 
            <div
              className={`select-item-card ${getClasses(index)}`}
              style={getItemStyle(option, index)}
              onClick={() => selectCard(index)}>
            <div className="scales-fractions fraction2">
              <span>{option.value.num1}</span>
              <span>{option.value.num2}</span>
            </div>
          </div>)
          }
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivityAction() : console.log("no posible")}>
          {question.submit.label}
          <BiRightArrowAlt />
        </button>

        {showFeedback === 'correct' && <FeedbackCorrect goView={nextActivity} view={nextQuestion} />}
        {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={question.clueTexts} />}
      </div>
    </div>
  )
}