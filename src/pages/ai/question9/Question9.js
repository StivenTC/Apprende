/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { useForm, Controller } from "react-hook-form";
import "./Question9.scss"

export const Question9 = ({ goView, setResult, nextActivity }) => {

  const [showFeedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [isValid, setIsValid] = useState({ numerator: false, denominator: false });
  const { getValues, control } = useForm();

  const validate = () => {
    return isValid.numerator && isValid.denominator;
  };

  const nextActivityAction = () => {
    const numerator = getValues('numerator');
    const denominator = getValues('denominator');

    if (numerator === denominator) {
      setFeedback('correct')
      setResult(true)
      //saveUser({ ...userData, selectQuarter: true })
    } else if (attempts < 3) {
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      setResult(false)
      //saveUser({ ...userData, selectQuarter: false })
      goView(6)
    }
  }

  const preventFromLength = (value, field) => {
    value = parseInt(value);
    let isValid = false;

    if (value > 0 && value < 100) {
      field.onChange(value);
      isValid = true;
    } else if (value === 0 || !value){
      field.onChange('');
    } else if (value >= 100){
      const valueStr = value.toString();
      field.onChange(parseInt(valueStr.substr(0, 2)));
      isValid = true;
    }

    return isValid;
  }

  const question = {
    clueTexts: [
      "¿Cómo debe ser el numerador y el denominador de una fracción para que al multiplicarla por otra encuentres una fracción equivalente?",
      "Para encontrar una fracción equivalente a 3/8 debes multiplicarla por una fracción que tenga arriba y abajo el mismo número (por ejemplo 2/2, 3/3, 4/4...), es decir, una fracción igual a 1."
    ]
  };

  return (
    <div className="ai-question9">
      <div className="ai-question9-body">
        <p className="ai-question9-title">Reto 9</p>
        <p className="ai-question9-description">Ingresa en el recuadro de abajo una fracción <strong>por la que multiplicarías 3/8</strong> para encontrar una <strong>fracción equivalente.</strong></p>
        <div className="scales-fractions">
          <span>3</span>
          <span>8</span>
        </div>
        <div className="ai-question9-fraction">
          <Controller
            control={control}
            name="numerator"
            render={({ field }) => (
              <input
                { ...field }
                type="number"
                onChange={e => {
                  const isValid = preventFromLength(e.target.value, field);
                  if (isValid) { setIsValid((prevState) => ({ ...prevState, numerator: true })); }
                }} />
            )}
          />

          <span></span>

          <Controller
            control={control}
            name="denominator"
            render={({ field }) => (
              <input 
                { ...field }
                type="number"
                onChange={e => {
                  const isValid = preventFromLength(e.target.value, field);
                  if (isValid) { setIsValid((prevState) => ({ ...prevState, denominator: true })); }
                }} />
            )}
          />
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivityAction() : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>

        {showFeedback === 'correct' && <FeedbackCorrect goView={nextActivity} view={0} />}
        {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={question.clueTexts}/>}
      </div>
    </div>
  )
}