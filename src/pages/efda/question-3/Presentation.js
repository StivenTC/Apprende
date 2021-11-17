import React from "react";
import templateBackground from "../../../assets/question-efda-background.png";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Presentation = ({ goView }) => {

  const presentation = {
    backgroundImage: templateBackground,
    title: 'Pregunta 3',
    description: {
      value: 'Loki y tú ya emprendieron el viaje. Llevan varios días caminando, pero, llegaron a un punto donde tienen tres posibles caminos.<br/><br/>¿Cuál de los tres caminos elegir? Necesitan el <strong>más corto</strong> para llegar rápido donde Mor!'
    },
    image: '/images/persona_x2.png',
    submit: {
      label: '¡Vamos!'
    }
  };

  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={4}/>
};
