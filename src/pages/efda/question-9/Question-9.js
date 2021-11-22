import { useState } from "react";
import OptionA from "../../../assets/EFDA/q9-a.png";
import OptionB from "../../../assets/EFDA/q9-b.png";
import OptionC from "../../../assets/EFDA/q9-c.png";
import OptionD from "../../../assets/EFDA/q9-d.png";
import LavaCaveBKG from "../../../assets/EFDA/lava-cave.png";
import { Header } from "../../../components/layout/Header/Header";
import { Select4Options } from "../../../components/templates/Select4Options/Select4Options";
import { PresentationTemplate } from "../template/PresentationTemplate";
import { EFDASortDnD } from "./EFDASortDnD";
import saveActivity from "../../../helpers/saveActivity";
import { BiRightArrowAlt } from "react-icons/bi";

export const Question9 = ({ goView }) => {
  const [showView, setView] = useState(true);
  const [selectCards, setSelecCards] = useState([]);

  const AISortCards = [
    {
      id: "pie-1",
      chart: <img src={OptionA} alt="Opción 2/3" />,
      quarter: "1/4"
    },
    {
      id: "pie-2",
      chart: <img src={OptionB} alt="Opción 2/3" />,
      quarter: "3/10"
    },
    {
      id: "pie-3",
      chart: <img src={OptionC} alt="Opción 2/3" />,
      quarter: "2/5"
    },
    {
      id: "pie-4",
      chart: <img src={OptionD} alt="Opción 2/3" />,
      quarter: "2/2"
    }
  ];

  const presentation = {
    backgroundImage: LavaCaveBKG,
    title: 'Pregunta 9',
    description: {
      value: `Loki necesita cruzar de un lado a otro caminando sobre piedras. Cada piedra tiene grabada una figura que representa una fracción y debes <strong>organizarlas de menor a mayor.</strong><br/>Ayuda a Loki a cruzar y estar a salvo de la lava!`
    },
    image: '',
    submit: {
      label: '¡Vamos!'
    }
  };

  const validate = () => {
    return selectCards.length >= 4
  }

  const nextActivity = () => {
    let answered = selectCards.map((t) => t.quarter);
    let data = {
      ["EFDA-9"]: answered,
    }

    if (validate()) {
      console.log(data)
      saveActivity(data)
      goView(10)
    }
  }

  return (
    <section className="efda efda-question-9">
      <Header goView={goView} actualView={9} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <>
          <div className="efda-question-9-data">
            <p>Pregunta 9</p>
            <p>
              Debes organizar las fracciones de las <strong>figuras de menor a mayor.</strong>
              <br />Arrastra hacia abajo cada figura a la casilla correspondiente.
            </p>
          </div>
          <EFDASortDnD cards={AISortCards} answer={setSelecCards} />
          <button
            className={`btn-next btn-secondary`}
            disabled={!validate()}
            onClick={() => validate() ? nextActivity() : console.log("no posible")}>
            ¡Vamos!
            <BiRightArrowAlt />
          </button>
        </>
        // <Select4Options
        //   question={questionTemplate}
        //   goView={() => goView(11)} />
      }
    </section>
  );
}
