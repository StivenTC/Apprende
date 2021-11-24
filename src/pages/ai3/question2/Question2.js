import React from "react";
import { Header } from "../../../components/layout/Header/Header";
import { Comparation } from "../../ai2/templates/Comparation";

export const Question2 = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE3-Reto 2',
    type: "PIE",
    title: "Reto 2",
    description: "<strong>Compara</strong> las dos fracciones representadas en los siguientes gráficos usando el símbolo correcto.",
    options: [
      {
        total: 9,
        list: [3, 4, 5, 6, 7]
      },
      {
        total: 7,
        list: [1, 2]
      }
    ],
    submit: {
      label: "Enviar"
    },
    clueTexts: [
      "¿Puedes hacer que las dos fracciones que representan los gráficos tengan el mismo denominador? ¡Así es más fácil compararlas!",
      "¿Cuál es el denominador común entre 9 y 7? ¡Una pista! haz una lista de los múltiplos de 7 y una lista de los múltiplos de 4 y encuentra el número más pequeño en común. Este número es el denominador común. ¿Cómo utilizas este numero para convertir las dos fracciones originales (4/9 y 5/7) en dos fracciones nuevas con el mismo denominador?"
    ],
    answer: 1
  };

  return (
    <Comparation
      goView={goView}
      nextActivity={nextActivity}
      nextQuestion={3}
      setResult={setResult}
      question={question} />
  )
}