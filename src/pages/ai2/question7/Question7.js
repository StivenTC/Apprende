import React from "react";
import { Header } from "../../../components/layout/Header/Header";
import { Comparation } from "../templates/Comparation";

export const Question7 = ({ goView, saveUser, userData }) => {

  const question = {
    type: "FRACTION",
    title: "Reto 7",
    description: "<strong>Compara</strong> las dos fracciones usando el símbolo correcto.",
    options: [
      {
        num1: 3,
        num2: 4
      },
      {
        num1: 1,
        num2: 4
      }
    ],
    submit: {
      label: "Enviar"
    },
    clueTexts: [
      "¿Las fracciones representadas tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para compararlas.",
      "Recuerda que cuando comparas fracciones que tienen el mismo denominador (en este caso 4), la fracción con el numerador más grande es la mayor."
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