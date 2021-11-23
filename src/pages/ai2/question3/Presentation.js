import React from "react";
import { PresentationTemplate } from "../../templates/PresentationTemplate";

export const Presentation = ({ goView }) => {

  const presentation = {
    title: 'Reto 3',
    description: 'Selecciona el gráfico que representa una fracción equivalente a la fracción que encuentras en la tarjeta:',
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={1}/>;
};
