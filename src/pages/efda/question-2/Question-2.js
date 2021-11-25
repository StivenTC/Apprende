import { useState } from "react";
import OptionA from "../../../assets/EFDA/q2-a.png";
import OptionB from "../../../assets/EFDA/q2-b.png";
import OptionC from "../../../assets/EFDA/q2-c.png";
import OptionD from "../../../assets/EFDA/q2-d.png";
import CompassBKG from "../../../assets/EFDA/compass-map.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question2 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-2",
    title: "Pregunta 2",
    description:
      `La mejor brújula para la misión es la que tiene una <strong>fracción equivalente</strong> a <span class="highlight-blue">5/7</span>.<br/>
      ¿Cuál brújula debes elegir?`,
    submit: {
      label: "Enviar",
    },
    options: [
      {
        optionBkg: OptionA,
        option: <div className="scales-fractions"><span>5</span><span>14</span></div>
      },
      {
        optionBkg: OptionB,
        option: <div className="scales-fractions"><span>10</span><span>7</span></div>
      },
      {
        optionBkg: OptionC,
        option: <div className="scales-fractions"><span>15</span><span>21</span></div>
      },
      {
        optionBkg: OptionD,
        option: <div className="scales-fractions"><span>10</span><span>21</span></div>
      }
    ]
  };
  const presentation = {
    backgroundImage: CompassBKG,
    title: 'Pregunta 2',
    description: {
      value: `Antes de iniciar el viaje debes contar con la mejor brújula posible.<br/><br/>
      Loki te presenta cuatro opciones de brújulas y cada una de ellas tiene grabada una fracción. La mejor brújula es la que tiene una <strong>fracción equivalente a 5/7</strong>. ¿Cuál brújula debes elegir?`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return (
    <section className="efda efda-question-2">
      <Header goView={goView} actualView={2} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <Select4Options
          question={questionTemplate}
          goView={() => goView(3)} />
      }
    </section>
  );
}
