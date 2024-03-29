/* eslint-disable react-hooks/exhaustive-deps */
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import saveActivity from "../../../helpers/saveActivity";

export const SelectQuarterTemplate = ({ goView, setResult, nextActivity, question, nextQuestion }) => {
  const [selectOption, setSelectOption] = useState('');
  const [showFeedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [dataAnswers, setDataAnswers] = useState([]);

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
    let ans = dataAnswers;
    ans.push(String.fromCharCode(65 + selectOption))
    setDataAnswers(ans)

    let data = {
      [`${question.id}- Intento 1`]: dataAnswers[0],
      [`${question.id}- Intento 2`]: dataAnswers[1],
      [`${question.id}- Intento 3`]: dataAnswers[2],
      [`${question.id} veces`]: attempts - 1,
    }
    if (selectOption === question.answer) {
      setFeedback('correct')
      saveActivity(data)
      //saveUser({ ...userData, selectQuarter: true })
      setResult(true);
    } else if (attempts < 3) {
      setSelectOption('')
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      //saveUser({ ...userData, selectQuarter: false })
      data[`${question.id} veces`] = attempts
      saveActivity(data)
      setResult(false);
      goView(2)
    }
  }

  const assignImageFromState = (option, index) => {
    return option.default;
  };

  return (
    <div className="select-quarter">
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
                <img src={assignImageFromState(option, index)} alt="" />
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