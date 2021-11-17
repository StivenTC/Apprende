/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";

export const SelectQuarterTemplate = ({ goView, saveUser, userData, question }) => {

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

  const nextActivity = () => {
    if (selectOption === question.answer) {
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

  const assignImageFromState = (option, index) => {
    return option.default;
  };

  return (
    <div className="select-quarter">
      <Header goView={goView} actualView={2} />
      <div className="select-quarter-body">
        <p className="select-quarter-title">{question.title}</p>
        <p className="select-quarter-description" dangerouslySetInnerHTML={{ __html: question.description }}></p>
        <div className="scales-fractions"><span>{question.fraction.num1}</span>
          <span>{question.fraction.num2}</span>
        </div>
        <div className="select-quarter-list">
          {
            question.options.map((option, index) => 
            <div className={`select-quarter-card ${getClasses(index)}`}
            onClick={() => selectCard(index)}>
            <img src={assignImageFromState(option, index)} alt=""/>
          </div>)
          }
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