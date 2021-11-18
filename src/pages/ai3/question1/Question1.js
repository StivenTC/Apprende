import React from "react";
import { Header } from "../../../components/layout/Header/Header";
import { Comparation } from "../../ai2/templates/Comparation";

export const Question1 = ({ goView, saveUser, userData }) => {

  const question = {
    type: "PIE",
    title: "Reto 1",
    description: "<strong>Compara</strong> las dos fracciones representadas en los siguientes gráficos usando el símbolo correcto.",
    options: [
      {
        total: 4,
        list: [3]
      },
      {
        total: 8,
        list: [0, 1, 2, 6, 7]
      }
    ],
    submit: {
      label: "Enviar"
    },
    clueTexts: [
      "¿Los gráficos representan fracciones que tienen el mismo numerador? Si la respuesta es sí, fíjate en los denominadores para compararlas.",
      "Dado que las fracciones tienen el mismo numerador (3), ¿qué significa un denominador más grande? Recuerda que el denominador representa el número de partes iguales en los que se divide la unidad. Un denominador más grande significa partes de la unidad más pequeñas."
    ],
    answer: 0
  };

  return (
    <React.Fragment>
      <Header goView={goView} actualView={2} />
      <Comparation
        goView={goView}
        saveUser={saveUser}
        userData={userData}
        question={question}/>
    </React.Fragment>
  )
}