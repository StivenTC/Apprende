import { useEffect, useState } from "react";
import Barril from "../../../assets/EFDA/barril.png";
import OptionA from "../../../assets/EFDA/q1-a.png";
import OptionB from "../../../assets/EFDA/q1-b.png";
import OptionC from "../../../assets/EFDA/q1-c.png";
import OptionD from "../../../assets/EFDA/q1-d.png";
import { Header } from "../../../components/layout/Header/Header";
import { PresentationTemplate } from "../../../components/templates/presentation/Presentation";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";

export const Question1 = ({ goView, saveUser, userData }) => {
  const [showView, setView] = useState('');
  const [renderView, setRenderView] = useState(0)

  const questionTemplate = {
    title: "Pregunta 1",
    description:
      'Si necesitas llevarte el barril con agua que tiene una figura de una <strong>fracción equivalente</strong> a <span class="highlight-blue">3/4</span> km<br/>¿cúal barril deberás elegir?',
    submit: {
      label: "Enviar",
    },
    states: {
      buttons: {
        activated: "bg-orange color-white",
        default: "bg-white",
      },
      labels: {
        activated: "bg-orange color-white",
        default: "bg-green color-white",
      },
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

  const presentationTemplate = {

  }

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 'presentation':
          return <PresentationTemplate data={presentationTemplate} />;
        case 'activity':
          return <Question1 userData={userData} />;
      }
    }

    setRenderView(changeView(showView))

  }, [showView])

  return (
    <section className="efda efda-question-1">
      <Header />
      <Select4Options
        question={questionTemplate} />
    </section>
  );
}
