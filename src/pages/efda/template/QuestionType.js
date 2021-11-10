import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Header } from "../../../components/layout/Header/Header";

export const QuestionType = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(-1);

  const validate = () => {
    return true;
  };

  return (
    <div className="efda-question-container" style={{backgroundImage: question.background}}>
      <Header />
      <div className="efda-question">
        <div className="efda-question-header">
          <h3>{ question.title }</h3>
          { question.description }
        </div>
        <div className="efda-question-options" style={question.styles.general}>
          {question.options.map(({ button, label, image }, index) =>
            <div className="efda-question-column">
              <div key={`${button}-label`} className={`efda-question-label`} style={question.styles.labels}>
                {label.value.map((value, i) => <span className="">{value}</span>)}
              </div>
              <img src={image} alt=""/>
              <button key={`${button}-button`} className={`efda-question-action`} style={question.styles.buttons} onClick={() => setSelectedOption(index)}>
                {button}
              </button>
            </div>
          )}
        </div>
  
        <button className={`btn-next ${validate() ? "" : "disabled"}`}>
          {question.submit.label}
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}