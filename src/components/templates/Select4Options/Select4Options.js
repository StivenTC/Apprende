import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";

export const Select4Options = ({ goView, saveUser, userData, question }) => {

  const [selectOption, setSelectOption] = useState('');
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
  }

  return (
    <div className="select-4-options">
      <div className="select-4-options-body">
        <p className="select-4-options-title">{question.title}</p>
        <p className="select-4-options-description" dangerouslySetInnerHTML={{ __html: question.description }} />
        <div className="select-4-options-list">
          {
            question.options.map((option, index) =>
              <div
                role="button"
                key={index}
                className={`select-4-options-card ${getClasses(index)}`}
                onClick={() => selectCard(index)}>
                <img className="card-bkg" src={option.optionBkg} alt="imagen de fondo" />
                {option.option}
                <label>{String.fromCharCode(65 + index)}</label>
              </div>)
          }
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          {question.submit.label}
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  )
}