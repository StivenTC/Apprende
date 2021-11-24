import { useState } from "react";
import Boat from "../../../assets/EFDA/q5-boat.png";
import RiverBoatBKG from "../../../assets/EFDA/river-boat.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question5 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-5",
    title: "Pregunta 5",
    description:
      `Selecciona la barca que tenga una <strong>fracción que puedes usar para encontrar una fracción equivalente a</strong> <span class="highlighted-blue">3/8</span>.<br/>¿Cuál de las barcas debes escoger para cruzar el río?`,
    submit: {
      label: "Enviar",
    },
    options: [
      {
        optionBkg: Boat,
        option: <div className="scales-fractions"><span>3</span><span>8</span></div>
      },
      {
        optionBkg: Boat,
        option: <div className="scales-fractions"><span>3</span><span>1</span></div>
      },
      {
        optionBkg: Boat,
        option: <div className="scales-fractions"><span>1</span><span>3</span></div>
      },
      {
        optionBkg: Boat,
        option: <div className="scales-fractions"><span>8</span><span>8</span></div>
      }
    ]
  };
  const presentation = {
    backgroundImage: RiverBoatBKG,
    title: 'Pregunta 5',
    description: {
      value: `Cada vez estás más cerca del objetivo. Ahora te encuentras frente a un gran río. Hay <strong>4 barcas</strong> y cada una tiene una fracción. Shaia te da el siguiente mensaje: “Selecciona la barca que tenga una <strong>fracción que puedes usar para encontrar una fracción equivalente a 3/8</strong>“.<br/>¿Cuál de las barcas debes escoger para cruzar el río?`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return (
    <section className="efda efda-question-5">
      <Header goView={goView} actualView={5} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <Select4Options
          question={questionTemplate}
          goView={() => goView(6)} />
      }
    </section>
  );
}
