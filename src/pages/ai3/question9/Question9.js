/* eslint-disable react-hooks/exhaustive-deps */

import { SelectQuarterTemplate } from "../../ai/templates/SelectQuarterTemplate";

export const Question9 = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE3-Reto 9',
    title: "Reto 9",
    description: "El ganador será aquel que saque la boleta con la <strong>fracción más cerca al número 2</strong>. ¿Quién es el ganador de la rifa?",
    fraction: {
      num1: 2,
      num2: ''
    },
    submit: {
      label: "Enviar"
    },
    options: [
      {
        disabled: "/images/AI/AI3/A_off.png",
        default: "/images/AI/AI3/A.png"
      },
      {
        disabled: "/images/AI/AI3/B_off.png",
        default: "/images/AI/AI3/B.png"
      },
      {
        disabled: "/images/AI/AI3/C_off.png",
        default: "/images/AI/AI3/C.png"
      },
      {
        disabled: "/images/AI/AI3/D_off.png",
        default: "/images/AI/AI3/D.png"
      }
    ],
    clueTexts: [
      "¿Cómo debe ser el numerador comparado con el denominador para que una fracción represente un número natural mayor que uno?",
      "Si el numerador es más grande que el denominador, la fracción representa un número mayor que 1. Divide en cada opción de respuesta el numerador entre el denominador para identificar el número más cercano. ¿Cuál de las opciones te da el número más cercano a 2? ¿Cuál tiene un numerador cercano al doble del denominador?"
    ],
    answer: 2
  };

  return (
    <div className="select-quarter">
      <SelectQuarterTemplate
        nextQuestion={10}
        goView={goView}
        setResult={setResult}
        nextActivity={nextActivity}
        question={question} />
    </div>
  )
}