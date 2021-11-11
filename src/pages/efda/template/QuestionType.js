import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Header } from "../../../components/layout/Header/Header";
import classNames from "classnames";
import './QuestionType.scss';

export const QuestionType = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(-1);

  const validate = () => {
    return true;
  };

  const assignState = (baseClass, key, index) => {
    const isSelected = selectedOption === index;

    return classNames({
      [baseClass]: true,
      [question.states[key].default]: !isSelected,
      [question.states[key].activated]: isSelected
    });
  };

  const assignImageFromState = (image, index) => {
    return selectedOption === index ? image.states.activated : image.states.default;
  };

  return (
    <div className="efda-question-container" style={question.styles.general}>
      <Header />
      <div className="efda-question">
        <div className="efda-question-header" style={question.styles.header}>
          <strong>{ question.title }</strong>
          <p dangerouslySetInnerHTML={{ __html: question.description }} />
        </div>
        <div className="efda-question-options" style={question.styles.options}>
          {question.options.map(({ button, label, image }, index) =>
            <div className="efda-question-column">
              { question.imagePosition === 'TOP' &&
                <div className="efda-question-image">
                  <img src={assignImageFromState(image, index)} style={image.styles} alt={image.alt}/>
                </div>
              }

              <div
                key={`${button}-label`}
                className={assignState(`efda-question-label`, `labels`, index)}
                style={question.styles.labels}>
                {label.value.map((value, i) => <span dangerouslySetInnerHTML={{ __html: value }} />)}
              </div>

              { question.imagePosition === 'MIDDLE' &&
                <div className="efda-question-image">
                  <img src={assignImageFromState(image, index)} style={image.styles} alt={image.alt}/>
                </div>
              }

              <button
                key={`${button}-button`}
                className={assignState(`btn-question`, `buttons`, index)}
                style={question.styles.buttons}
                onClick={() => setSelectedOption(index)}>
                {button}
              </button>
            </div>
          )}
        </div>
  
        <button className={`btn-secondary btn-next ${validate() ? "" : "disabled"}`}>
          {question.submit.label}
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}