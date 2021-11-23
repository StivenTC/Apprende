import React from "react";
import { PresentationBkgTemplate } from "../../templates/PresentationBkgTemplate";

export const Presentation = ({ goView }) => {

  const presentation = {
    title: 'Reto 2',
    description: 'Juliana es una exploradora que debe cruzar un río. Para eso, debe arrastrar y <strong>organizar las fracciones grabadas en las piedras de menor a mayor</strong>. ¡Ayuda a Juliana!',
    image: '/images/AI/nina.png',
    backgroundImage: '/images/AI/rock_bkg.png',
    backgroundColor: '#35bfa5',
    submit: {
      label: '¡Vamos!'
    }
  };

  return <PresentationBkgTemplate goView={goView} presentation={presentation} nextPage={1}/>;
};
