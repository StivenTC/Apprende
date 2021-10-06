/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import TopCloud from "../../../assets/top-clouds.svg";

export const Raindrops = ({ goView }) => {

  const [selectOption, setSelectOption] = useState('');
  const [showFeedback, setFeedback] = useState("");
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

    if (selectOption === 2) {
      setFeedback('correct')
    } else if (attempts < 3) {
      setSelectOption('')
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      goView(6)
    }
  }

  return (
    <div className="rain-drop">
      <Header goView={goView} actualView={2} />
      <div className="rain-drop-body">
        <div className="rain-drop-header">
          <img src={TopCloud} alt="Nuebs altas" />
        </div>


        {showFeedback === 'correct' && <FeedbackCorrect goView={goView} view={7} />}
        {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} />}
      </div>
    </div>
  )
}