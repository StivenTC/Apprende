/* eslint-disable react-hooks/exhaustive-deps */
import { SelectQuarterTemplate } from "../templates/SelectQuarterTemplate";

export const SelectQuarter = ({ goView, saveUser, userData }) => {

  const question = {
    title: "Reto 2",
    description: "Selecciona el gráfico que representa una <strong>fracción equivalente</strong> a la fracción que encuentras en la tarjeta:",
    fraction: {
      num1: 3,
      num2: 4
    },
    submit: {
      label: "Enviar"
    },
    options: [
      {
        disabled: "/images/AI/P2/A_off.png",
        default: "/images/AI/P2/A.png"
      },
      {
        disabled: "/images/AI/P2/B_off.png",
        default: "/images/AI/P2/B.png"
      },
      {
        disabled: "/images/AI/P2/C_off.png",
        default: "/images/AI/P2/C.png"
      },
      {
        disabled: "/images/AI/P2/D_off.png",
        default: "/images/AI/P2/D.png"
      }
    ],
    clueTexts: [
      "Las fracciones equivalentes representan la misma cantidad aunque el numerador y el denominador sean diferentes.",
      "Para encontrar una fracción equivalente a 3/4 debes multiplicar o dividir el numerador y el denominador de la fracción por el mismo número."
    ],
    answer: 2
  };

  return (
    <div className="select-quarter">
      <SelectQuarterTemplate
        goView={goView}
        saveUser={saveUser}
        userData={userData}
        question={question} />
    </div>
  )
}