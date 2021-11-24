/* eslint-disable react-hooks/exhaustive-deps */
import { SelectQuarterTemplate } from "../templates/SelectQuarterTemplate";

export const Question3 = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE1-Reto 3',
    title: "Reto 3",
    description: "Selecciona el gráfico que representa una <strong>fracción equivalente</strong> a la fracción que encuentras en la tarjeta",
    fraction: {
      num1: 25,
      num2: 40
    },
    submit: {
      label: "Enviar"
    },
    options: [
      {
        disabled: "/images/AI/P3/A_off.png",
        default: "/images/AI/P3/A.png"
      },
      {
        disabled: "/images/AI/P3/B_off.png",
        default: "/images/AI/P3/B.png"
      },
      {
        disabled: "/images/AI/P3/C_off.png",
        default: "/images/AI/P3/C.png"
      },
      {
        disabled: "/images/AI/P3/D_off.png",
        default: "/images/AI/P3/D.png"
      }
    ],
    clueTexts: [
      "¿Cómo encuentras una fracción equivalente a otra?. ¿Qué operaciones puedes hacer tanto en el numerador como en el denominador para encontrar fracciones equivalentes?",
      "Recuerda que dos fracciones son equivalentes si representan la misma cantidad aunque sus numeradores y denominadores sean diferentes."
    ],
    answer: 1
  };

  return (
    <div className="select-quarter">
      <SelectQuarterTemplate
        nextQuestion={4}
        nextActivity={nextActivity}
        goView={goView}
        setResult={setResult}
        question={question} />
    </div>
  )
}