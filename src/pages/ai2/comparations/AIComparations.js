import React from "react";
import { Header } from "../../../components/layout/Header/Header";
import { Comparation } from "../templates/Comparation";

export const AIComparations = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE2-Reto 4',
    type: "PIE",
    description: "<strong>Compara</strong> las dos fracciones representadas en los siguientes gráficos usando el símbolo correcto.",
    options: [
      {
        total: 6,
        list: [0, 4, 5]
      },
      {
        total: 6,
        list: [5]
      }
    ],
    submit: {
      label: "Siguiente"
    },
    clueTexts: [
      "¿Las fracciones representadas tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para compararlas.",
      "Recuerda que cuando comparas fracciones que tienen el mismo denominador (en este caso 6), la fracción con el numerador más grande es la mayor."
    ],
    answer: 1
  };

  return (
    <Comparation
      goView={goView}
      nextActivity={nextActivity}
      nextQuestion={5}
      setResult={setResult}
      question={question} />
  )
}