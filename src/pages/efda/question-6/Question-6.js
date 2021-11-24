import { useState } from "react";
import Nuts from "../../../assets/EFDA/q6-nuts.png";
import NutsBKG from "../../../assets/EFDA/night-nuts.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question6 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-6",
    title: "Pregunta 6",
    description:
      `Selecciona la barca que tenga una <strong>fracción que puedes usar para encontrar una fracción equivalente a</strong> <span class="highlighted-blue">3/8</span>.<br/>¿Cuál de las barcas debes escoger para cruzar el río?`,
    submit: {
      label: "Enviar",
    },
    options: [
      {
        optionBkg: Nuts,
        option: <div className="scales-fractions"><span>3</span><span>8</span></div>
      },
      {
        optionBkg: Nuts,
        option: <div className="scales-fractions"><span>3</span><span>1</span></div>
      },
      {
        optionBkg: Nuts,
        option: <div className="scales-fractions"><span>1</span><span>3</span></div>
      },
      {
        optionBkg: Nuts,
        option: <div className="scales-fractions"><span>8</span><span>8</span></div>
      }
    ]
  };
  const presentation = {
    backgroundImage: NutsBKG,
    title: 'Pregunta 6',
    description: {
      value: `La noche se acerca y tú y Loki deben cenar algo. Tú recogiste 4/3 kilos de fruta y le pides a Loki que él recolecte una <strong>fracción equivalente de nueces</strong>. ¿Cuánto debe recoger Loki?`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return (
    <section className="efda efda-question-5">
      <Header goView={goView} actualView={6} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <Select4Options
          question={questionTemplate}
          goView={() => goView(7)} />
      }
    </section>
  );
}
