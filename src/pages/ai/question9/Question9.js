/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { useForm, Controller } from "react-hook-form";
import "./Question9.scss"
import saveActivity from "../../../helpers/saveActivity";

export const Question9 = ({ goView, setResult, nextActivity }) => {

  const [showFeedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [isValid, setIsValid] = useState({ numerator: false, denominator: false });
  const { getValues, control } = useForm();
  const [dataAnswers, setDataAnswers] = useState([]);

  const validate = () => {
    return isValid.numerator && isValid.denominator;
  };

  const nextActivityAction = () => {
    const numerator = getValues('numerator');
    const denominator = getValues('denominator');
    let ans = dataAnswers;
    ans.push(`${numerator}/${denominator}`)
    setDataAnswers(ans)

    let data = {
      [`ENTRE1-Reto 9- Intento 1`]: dataAnswers[0],
      [`ENTRE1-Reto 9- Intento 2`]: dataAnswers[1],
      [`ENTRE1-Reto 9- Intento 3`]: dataAnswers[2],
      [`ENTRE1-Reto 9 veces`]: attempts - 1,
    }
    if (numerator === denominator) {
      setFeedback('correct')
      saveActivity(data)
      setResult(true)
      //saveUser({ ...userData, selectQuarter: true })
    } else if (attempts < 3) {
      setFeedback('clue')
      setAttempts(attempts + 1)
    } else {
      //saveUser({ ...userData, selectQuarter: false })
      data[`ENTRE1-Reto 9 veces`] = attempts;
      setResult(false)
      saveActivity(data)
      goView(2)
    }
  }

  const preventFromLength = (value, field) => {
    value = parseInt(value);
    let isValid = false;

    if (value > -100 && value < 100 && value !== 0) {
      field.onChange(value);
      isValid = true;
    } else if (value === 0 || !value) {
      field.onChange('');
      isValid = false;
    } else if (value >= 100 || value <= -100) {
      const valueStr = value.toString();
      field.onChange(parseInt(valueStr.substr(0, value > 0 ? 2 : 3)));
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
                {...field}
                type="number"
                onChange={e => {
                  const isValid = preventFromLength(e.target.value, field);
                  setIsValid((prevState) => ({ ...prevState, numerator: isValid }));
                }} />
            )}
          />

          <span></span>

          <Controller
            control={control}
            name="denominator"
            render={({ field }) => (
              <input
                {...field}
                type="number"
                onChange={e => {
                  const isValid = preventFromLength(e.target.value, field);
                  setIsValid((prevState) => ({ ...prevState, denominator: isValid }));
                }} />
            )}
          />
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivityAction() : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>

        {showFeedback === 'correct' && <FeedbackCorrect goView={nextActivity} view={10} />}
        {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={question.clueTexts} />}
      </div>
    </div>
  )
}