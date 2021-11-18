import { useState } from "react";
import OptionA from "../../../assets/EFDA/q4-a.png";
import OptionB from "../../../assets/EFDA/q4-b.png";
import OptionC from "../../../assets/EFDA/q4-c.png";
import OptionD from "../../../assets/EFDA/q4-d.png";
import SabioLLama from "../../../assets/EFDA/sabio-llama.png";
import ExplicationImg from "../../../assets/EFDA/q4-explanation.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question4 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-4",
    title: "Pregunta 4",
    description:
      '¿Cuál de las siguientes figuras representa una <strong>fracción equivalente a la altura de la alpaca</strong>',
    explication: <img src={ExplicationImg} alt="Altura de la alpaca 12/15" />,
    submit: {
      label: "Enviar",
    },
    options: [
      {
        optionBkg: '',
        option: <img src={OptionA} alt="Opción 2/3" />
      },
      {
        optionBkg: '',
        option: <img src={OptionB} alt="Opción 3/8" />
      },
      {
        optionBkg: '',
        option: <img src={OptionC} alt="Opción 4/6" />
      },
      {
        optionBkg: '',
        option: <img src={OptionD} alt="Opción 6/8" />
      }
    ]
  };
  const presentation = {
    backgroundImage: SabioLLama,
    title: 'Pregunta 4',
    description: {
      value: `La brújula se ha dañado por un golpe. Loki y tú se encuentran con un sabio Inca que les promete guiarlos en la dirección correcta si resuelven un acertijo. El sabio les dice que su alpaca favorita mide <strong>15/12</strong> metros. Ustedes dos deben decir cuál de las siguientes figuras que representan fracciones muestra una <strong>fracción equivalente a la altura de la alpaca</strong> y así recibir la ayuda del sabio:`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return (
    <section className="efda efda-question-4">
      <Header goView={goView} actualView={4} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <Select4Options
          question={questionTemplate}
          goView={() => goView(5)} />
      }
    </section>
  );
}
