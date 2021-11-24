import React from "react";
import { PresentationTemplate } from "../../templates/PresentationTemplate";

export const Question7Presentation = ({ goView }) => {

  const presentation = {
    title: 'Reto 7',
    description: `En este reto tendrás 3 guerreros, cada uno de ellos con una fracción. Antes de la batalla, cada guerrero necesita tener el escudo que contiene el número más cercano a la fracción del guerrero.
      <br/><br/>Arrastra cada guerrero a su escudo.`,
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={1} />;
};
