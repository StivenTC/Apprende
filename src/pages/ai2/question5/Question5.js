import React from "react";
import { Header } from "../../../components/layout/Header/Header";
import { Comparation } from "../templates/Comparation";

export const Question5 = ({ goView, saveUser, userData }) => {

  const question = {
    type: "PIE",
    title: "Reto 5",
    description: "<strong>Compara</strong> las dos fracciones representadas en los siguientes gráficos usando el símbolo correcto.",
    options: [
      {
        total: 12,
        list: [0, 1, 9, 10, 11]
      },
      {
        total: 12,
        list: [0, 1, 2, 3, 9, 10, 11]
      }
    ],
    submit: {
      label: "Enviar"
    },
    clueTexts: [
      "¿Las fracciones representadas tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para compararlas.",
      "Recuerda que cuando comparas fracciones que tienen el mismo denominador (en este caso 12), la fracción con el numerador más grande es la mayor."
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