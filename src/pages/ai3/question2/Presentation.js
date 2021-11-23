import React from "react";
import { PresentationTemplate } from "../../templates/PresentationTemplate";
import PresentationImage from "../../../assets/Presentations/ai3-q1.png";

export const Presentation2 = ({ goView }) => {

  const presentation = {
    title: 'Reto 2',
    description: '<strong>Compara</strong> las dos fracciones representadas en los siguientes gráficos usando el símbolo correcto.',
    image: PresentationImage,
    submit: {
      label: '¡Vamos!'
    }
  };

  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={1} />;
};
