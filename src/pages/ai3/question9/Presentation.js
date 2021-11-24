import React from "react";
import { PresentationTemplate } from "../../templates/PresentationTemplate";

export const Question9Presentation = ({ goView }) => {

  const presentation = {
    title: 'Reto 9',
    description: `Fabio está organizando una rifa entre sus cuatro mejores amigos. El ganador será aquel que saque la boleta con la <strong>fracción más cerca al número 2.<strong/><br/><br/>
      Juanita tiene la boleta <strong>3/2</strong>, Mariana la boleta <strong>2/5</strong> , Teresa tiene la fracción <strong>7/4</strong> y Julio la boleta <strong>10/2</strong>. ¿Quién es el ganador de la rifa?`,
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };
  return <PresentationTemplate goView={goView} presentation={presentation} nextPage={1} />;
};
