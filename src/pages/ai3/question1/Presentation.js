import React from "react";
import { PresentationTemplate } from "../../templates/PresentationTemplate";
import PresentationImage from "../../../assets/Presentations/ai3-q1.png";

export const Presentation1 = ({ goView }) => {

  const presentation = {
    title: 'Reto 1',
    description: 'Selecciona el gráfico que representa una fracción equivalente a la fracción que encuentras en la tarjeta:',
    image: PresentationImage,
    submit: {
      label: '¡Vamos!'
    }
  };

  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={2} />;
};
