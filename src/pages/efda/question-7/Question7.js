import React, { useState } from "react";
import byke from "../../../assets/byke.png";
import alpaca from "../../../assets/alpaca.png";
import skeboard from "../../../assets/skeboard.png";
import templateBackground from "../../../assets/background_pregunta7.png";
import { Header } from "../../../components/layout/Header/Header";
import { QuestionType } from "../template/QuestionType";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question7 = ({ goView }) => {
  const [showView, setView] = useState(true);
  const styleLine = '<div style="border: none;border-top: 2px solid #073B4C;width: 20px;"></div>';

  const questionTemplate = {
    id: "EFDA-7",
    title: "Pregunta 7",
    description: 'Cada opción muestra la fracción en horas que te demoras en llegar a la cueva. ¿Con cuál de los tres medios de transporte <span class="text-bold">te demoras menos</span>?',
    imagePosition: "TOP",
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
        default: "bg-white color-gray-2",
      },
    },
    styles: {
      general: {
        background: `#F7FAFF`,
      },
      options: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      },
      labels: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "24px",
        marginTop: "23px"
      },
      header: {
        background: "transparent"
      },
    },
    options: [
      {
        button: "A",
        label: {
          value: ["5", styleLine, "6"],
        },
        image: {
          alt: "",
          states: {
            default: byke,
            activated: byke,
          },
          styles: {
            width: "85px",
            height: "56px"
          }
        },
      },
      {
        button: "B",
        label: {
          value: ["3", styleLine, "6"],
        },
        image: {
          alt: "",
          states: {
            default: alpaca,
            activated: alpaca,
          },
          styles: {
            width: "54px",
            height: "79px"
          }
        },
      },
      {
        button: "C",
        label: {
          value: ["9", styleLine, "6"],
        },
        image: {
          alt: "",
          states: {
            default: skeboard,
            activated: skeboard,
          },
          styles: {
            width: "23px",
            height: "81px"
          }
        },
      },
    ],
  };
  const presentation = {
    backgroundImage: templateBackground,
    title: 'Pregunta 7',
    description: {
      value: 'Loki y tú están listos para seguir su marcha. En un pueblo cercano les ofrecen bicicletas, alpacas o patinetas para continuar su recorrido. Deben llegar a la cueva <strong>lo más rápido posible</strong>. La vendedora les dice cuántas horas les tomaría cada opción. ¿Con cuál de los tres medios de transporte se demoran menos para llegar a la cueva?',
      classAdded: 'justify'
    },
    submit: {
      label: '¡Vamos!'
    }
  };
  return (
    <section className="efda efda-question-2">
      <Header goView={goView} actualView={7} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <QuestionType question={questionTemplate}
          goView={() => goView(8)} />
      }
    </section>
  );
};
