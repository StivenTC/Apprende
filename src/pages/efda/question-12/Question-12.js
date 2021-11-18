import { useState } from "react";
import OptionA from "../../../assets/EFDA/q12-a.png";
import OptionB from "../../../assets/EFDA/q12-b.png";
import OptionC from "../../../assets/EFDA/q12-c.png";
import OptionD from "../../../assets/EFDA/q12-d.png";
import PiramidBKG from "../../../assets/EFDA/piramid.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question12 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-12",
    title: "Pregunta 12",
    description:
      'La altura de Mor es de 12/7 metros. ¿A cuál de los siguientes números está <strong>más cerca</strong> la estatura de Mor?',
    submit: {
      label: "Enviar",
    },
    options: [
      {
        optionBkg: '',
        option: <img src={OptionA} alt="Opción 1/1" />
      },
      {
        optionBkg: '',
        option: <img src={OptionB} alt="Opción 1" />
      },
      {
        optionBkg: '',
        option: <img src={OptionC} alt="Opción 5/10" />
      },
      {
        optionBkg: '',
        option: <img src={OptionD} alt="Opción 7/10" />
      }
    ]
  };
  const presentation = {
    backgroundImage: PiramidBKG,
    title: 'Pregunta 12',
    description: {
      value: `Al encontrar a Mor ves que donde está atrapado hay un candado que se abre cuando se resuelve el siguiente acertijo: la altura de Mor es de 12/7 metros. ¿A cuál de los siguientes números está <strong>más cerca</strong> la estatura de Mor?`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return (
    <section className="efda efda-question-12">
      <Header goView={goView} actualView={12} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <Select4Options
          question={questionTemplate}
          goView={() => goView(13)} />
      }
    </section>
  );
}
