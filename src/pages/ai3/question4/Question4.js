import React from "react";
import { Header } from "../../../components/layout/Header/Header";
import { Comparation } from "../../ai2/templates/Comparation";

export const Question4 = ({ goView, saveUser, userData }) => {

  const question = {
    type: "FRACTION",
    title: "Reto 4",
    description: "<strong>Compara</strong> las dos fracciones usando el símbolo correcto.",
    options: [
      {
        num1: 5,
        num2: 8
      },
      {
        num1: 6,
        num2: 4
      }
    ],
    submit: {
      label: "Enviar"
    },
    clueTexts: [
      "¿Puedes hacer que las dos fracciones tengan el mismo denominador? ¡Así es más fácil compararlas",
      "¿Qué tienen en común los denominadores 8 y 4? Al multiplicar la fracción de la izquierda, 6/4, por 2/2 obtenemos 12/8. Ahora que tienes dos fracciones con el mismo denominador, 8, compara los numeradores."
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