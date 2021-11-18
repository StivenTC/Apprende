import React from "react";
import { Header } from "../../../components/layout/Header/Header";
import { Comparation } from "../templates/Comparation";

export const AIComparations = ({ goView, saveUser, userData }) => {

  const question = {
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