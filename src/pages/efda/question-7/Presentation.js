import React from "react";
import templateBackground from "../../../assets/background_pregunta7.png";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Presentation = ({ goView }) => {

  const presentation = {
    backgroundImage: templateBackground,
    title: 'Pregunta 7',
    description: {
      value: 'Al amanecer tú y Loki están listos para seguir su marcha. En un pueblo cercano les ofrecen bicicletas, alpacas o patinetas para continuar su recorrido. Deben llegar a la cueva <strong>lo más rápido posible</strong>. La vendedora les dice cuántas horas les tomaría cada opción. ¿Con cuál de los tres medios de transporte se <strong>demoran menos</strong> para llegar a la cueva?',
      classAdded: 'justify'
    },
    submit: {
      label: '¡Vamos!'
    }
  };

  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={1}/>
};
