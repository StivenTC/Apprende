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
      `Tú recogiste 4/3 kilos de fruta y le pides a Loki que él recolecte una <strong>fracción equivalente de nueces</strong>. ¿Cuánto debe recoger Loki?`,
    submit: {
      label: "Enviar",
    },
    options: [
      {
        optionBkg: Nuts,
        option: <div className="scales-fractions"><span>8</span><span>9</span></div>
      },
      {
        optionBkg: Nuts,
        option: <div className="scales-fractions"><span>16</span><span>12</span></div>
      },
      {
        optionBkg: Nuts,
        option: <div className="scales-fractions"><span>2</span><span>6</span></div>
      },
      {
        optionBkg: Nuts,
        option: <div className="scales-fractions"><span>2</span><span>3</span></div>
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
