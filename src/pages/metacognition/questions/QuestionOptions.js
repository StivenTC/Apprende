import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Header } from "../../../components/layout/Header/Header";

export function QuestionOptions({ goView, saveUser, userData }) {
  const [actualView, setActualView] = useState(0);
  const [selectedOption, setSelectedOption] = useState();

  const questions = [
    "<strong>1. Utilizo distintas estrategias para encontrar fracciones equivalentes</strong>",
    "<strong>2. Comparo fracciones utilizando la recta numérica</strong>",
    "<strong>3. Comparo y ordeno fracciones que tienen el mismo denominador</strong>",
    "<strong>4. Comparo y ordeno fracciones que tienen diferentes denominadores</strong>",
  ];
  const options = [
    "Puedo hacer esto si veo un ejemplo",
    "Puedo hacer esto solo",
    "Puedo explicarle esto a un amigo"
  ];

  const getClasses = (index) => {
    let clases = "";
    if (selectedOption === index) {
      clases += " selected"
    }
    return clases;
  };

  const validate = () => {
    let r = false;
    if (typeof selectedOption !== "undefined") {
      r = true
    }
    return r;
  };

  const nextView = () => {
    if (validate) {
      if (actualView < (questions.length - 1)) {
        setSelectedOption();
        setActualView(actualView + 1);
      } else {
        saveUser({ ...userData, metacognition: true })
        goView(0);
      }
    }
  };

  return (
    <div className="metacognition">
      <Header goView={goView} actualView={2} />
      <div className="question-options">
        <div className="question-text-header">
          <p>¿Qué tan bien puedes hacer esto?</p>
          <br />
          {actualView ?
            <br />
            :
            <p>Para cada una de las opciones <strong>selecciona la opción</strong> en la casilla que consideres más apropiada.</p>
          }
          <p dangerouslySetInnerHTML={{ __html: questions[actualView] }} />
        </div>
        <div className="question-options-activity">
          {actualView > 0 && <> <br /><br /></>}
          {options.map((option, i) =>
            <div key={option}
              className={`question-options-activity-option ${getClasses(i)}`}>
              <div>
                <button onClick={() => setSelectedOption(i)} />
                <p>{option}</p>
              </div>
            </div>
          )}
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => nextView()}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}