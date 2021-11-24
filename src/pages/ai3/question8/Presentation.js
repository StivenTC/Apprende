import React from "react";
import { PresentationTemplate } from "../../templates/PresentationTemplate";

export const Question8Presentation = ({ goView }) => {

  const presentation = {
    title: 'Reto 8',
    description: `Tres deportistas van a participar en unos partidos de fútbol. Cada una de ellas tiene una fracción asignada. Además hay tres equipos: el equipo “1/2", el equipo “1” y el equipo  “2”.
<br/>Arrastra cada jugadora al equipo con el número que está más cerca de su fracción.`,
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };
  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={1} />;
};
