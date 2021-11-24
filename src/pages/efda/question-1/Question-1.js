import { useState } from "react";
import Barril from "../../../assets/EFDA/barril.png";
import OptionA from "../../../assets/EFDA/q1-a.png";
import OptionB from "../../../assets/EFDA/q1-b.png";
import OptionC from "../../../assets/EFDA/q1-c.png";
import OptionD from "../../../assets/EFDA/q1-d.png";
import ValleBKG from "../../../assets/EFDA/valle.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question1 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-1",
    title: "Pregunta 1",
    description:
      'Si necesitas llevarte el barril con agua que tiene una figura de una <strong>fracción equivalente</strong> a <span class="highlight-blue">3/4</span> km<br/>¿cúal barril deberás elegir?',
    submit: {
      label: "Enviar",
    },
    options: [
      {
        optionBkg: Barril,
        option: <img src={OptionA} alt="Opción 2/3" />
      },
      {
        optionBkg: Barril,
        option: <img src={OptionB} alt="Opción 3/8" />
      },
      {
        optionBkg: Barril,
        option: <img src={OptionC} alt="Opción 4/6" />
      },
      {
        optionBkg: Barril,
        option: <img src={OptionD} alt="Opción 6/8" />
      }
    ]
  };
  const presentation = {
    backgroundImage: ValleBKG,
    title: 'Contexto',
    description: {
      value: `Estás en <strong>Perú</strong> y debes rescatar a <strong>Mor</strong> que cayó en una trampa de Lévitas en una cueva en el Valle Sagrado. Para rescatarlo contarás con la ayuda de Loki y <strong>deberás completar unos retos</strong> con fracciones.
      <br/><br/>ntes de salir necesitas recolectar agua para el largo viaje. Si necesitas llevarte el barril con agua que tiene una figura de una <strong>fracción equivalente a 3/4</strong>, ¿cuál barril deberás elegir?`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return (
    <section className="efda efda-question-1">
      <Header goView={goView} actualView={1} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <Select4Options
          question={questionTemplate}
          goView={() => goView(2)} />
      }
    </section>
  );
}
