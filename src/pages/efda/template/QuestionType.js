import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import classNames from "classnames";
import saveActivity from "../../../helpers/saveActivity";

export const QuestionType = ({ question, goView }) => {
  const [selectedOption, setSelectedOption] = useState(-1);

  const validate = () => {
    return selectedOption !== -1;
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

  const ImageQuestion = ({ image, index }) => {
    return (
      <div className="efda-question-image">
        <img src={assignImageFromState(image, index)} style={image.styles} alt={image.alt} />
      </div>
    );
  };

  const nextActivity = () => {
    let data = {
      [question.id]: String.fromCharCode(65 + selectedOption),
    }
    if (validate()) {
      saveActivity(data)
      goView()
    }
  }

  return (
    <div className="efda-question-container" style={question.styles.general}>
      <div className="efda-question">
        <div className="efda-question-header" style={question.styles.header}>
          <strong>{question.title}</strong>
          <p dangerouslySetInnerHTML={{ __html: question.description }} />
        </div>
        <div className="efda-question-options" style={question.styles.options}>
          {question.options.map(({ button, label, image }, index) =>
            <div className="efda-question-column" key={index}>
              {question.imagePosition === 'TOP' &&
                <ImageQuestion image={image} index={index} />
              }

              <div
                key={`${button}-label`}
                className={assignState(`efda-question-label`, `labels`, index)}
                style={question.styles.labels}>
                {label.value.map((value, i) => <span key={i} dangerouslySetInnerHTML={{ __html: value }} />)}
              </div>

              {question.imagePosition === 'MIDDLE' &&
                <ImageQuestion image={image} index={index} />
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

        <button
          className={`btn-next btn-secondary`}
          disabled={!validate()}
          onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          {question.submit.label}
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}