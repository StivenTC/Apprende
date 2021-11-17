import React from "react";
import templateBackground from "../../../assets/background_pregunta8.png";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Presentation = ({ goView }) => {

  const presentation = {
    backgroundImage: templateBackground,
    title: 'Pregunta 8',
    description: 'Tienes que cruzar este puente y para eso Shaia te da las siguientes instrucciones: solo las tablas de las posiciones <strong>6/7, 5/7 y 2/7</strong> resistirán tu peso. <strong>Debes seleccionar estas tablas</strong> para ir saltando y lograr cruzar.',
    submit: {
      label: '¡Vamos!'
    }
  };

  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={1}/>
};
