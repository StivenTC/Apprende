import { useState } from "react";
import OptionA from "../../../assets/EFDA/q10-a.png";
import OptionB from "../../../assets/EFDA/q10-b.png";
import OptionC from "../../../assets/EFDA/q10-c.png";
import OptionD from "../../../assets/EFDA/q10-d.png";
import CaveBKG from "../../../assets/EFDA/cave.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question10 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-10",
    title: "Pregunta 10",
    description:
      'Debes retirar el <strong>número de piedras por el que dividirías</strong> tanto <strong>14</strong> como <strong>35</strong> para llegar a la <strong>fracción equivalente a 2/5</strong>. ¿Cuántas piedras debes retirar?',
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
    backgroundImage: CaveBKG,
    title: 'Pregunta 10',
    description: {
      value: `Loki y tú están a punto de entrar a una cueva, pero, la entrada está tapada por muchas piedras. La más grande de ellas tiene pintada la fracción <strong>14/35</strong>. Shaia te ayuda con la siguiente pista: “para poder entrar debes retirar el número de piedras por el que <strong>dividirías tanto 14 como 35 para llegar a la fracción equivalente 2/5</strong>”.<br/>
      ¿Cuántas piedras debes retirar?`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  return (
    <section className="efda efda-question-10">
      <Header goView={goView} actualView={10} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <Select4Options
          question={questionTemplate}
          goView={() => goView(11)} />
      }
    </section>
  );
}
