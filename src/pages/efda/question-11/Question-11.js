import { useState } from "react";
import OptionA from "../../../assets/EFDA/q11-a.png";
import OptionB from "../../../assets/EFDA/q11-b.png";
import OptionC from "../../../assets/EFDA/q11-c.png";
import OptionD from "../../../assets/EFDA/q11-d.png";
import PiramidBKG from "../../../assets/EFDA/piramid.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question11 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-11",
    title: "Pregunta 11",
    description:
      'Loki te muestra cuatro figuras que representan fracciones de cuánto mide cada una de las cuerdas en metros. ¿Cuál es la <strong>más larga</strong>?',
    submit: {
      label: "Enviar",
    },
    options: [
      {
        optionBkg: '',
        option: <img src={OptionA} alt="Opción 1/10" />
      },
      {
        optionBkg: '',
        option: <img src={OptionB} alt="Opción 2/10" />
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
    title: 'Pregunta 11',
    description: {
      value: `Ya estás del otro lado y muy cerca de rescatar a tu compañero. Solo necesitas la cuerda <strong>más larga</strong> para poder descender hasta el lugar de la cueva donde está Mor.
Loki te muestra cuatro figuras que representan fracciones de cuánto mide cada una de las cuerdas en metros. ¿Cuál es la <strong>más larga</strong>?`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return (
    <section className="efda efda-question-11">
      <Header goView={goView} actualView={11} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <Select4Options
          question={questionTemplate}
          goView={() => goView(12)} />
      }
    </section>
  );
}
