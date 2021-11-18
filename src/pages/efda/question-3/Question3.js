import React, { useState } from "react";
import { QuestionType } from "../template/QuestionType";
import templateBackground from "../../../assets/question-efda-background.png";
import road from "../../../assets/road.png";
import roadActivated from "../../../assets/road_activated.png";
import { Header } from "../../../components/layout/Header/Header";
import { PresentationTemplate } from "../template/PresentationTemplate";

export const Question3 = ({ goView }) => {
  const [showView, setView] = useState(true);

  const styleLine = '<div style="border: none;border-top: 2px solid white;width: 20px;"></div>';

  const questionTemplate = {
    id: "EFDA-3",
    title: "Pregunta 3",
    description:
      'Hay tres caminos posibles. El primero tiene una distancia de <span class="text-bold color-blue">8/10</span class="text-bold color-blue"> km, el segundo de <span class="text-bold color-blue">3/5</span> km y el tercero de <span>6/12</span> km. Necesitan el <span class="text-bold">más corto</span>, ¿Por dónde deben ir?',
    imagePosition: "MIDDLE",
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
    styles: {
      general: {
        background: `top/100% 100% no-repeat url("${templateBackground}")`,
      },
      options: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      },
      labels: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      header: {
        background: "#FFFFFF"
      }
    },
    options: [
      {
        button: "A",
        label: {
          value: ["8", styleLine, "10"],
        },
        image: {
          alt: "",
          states: {
            default: road,
            activated: roadActivated,
          },
          styles: {
            height: "100px"
          }
        },
      },
      {
        button: "B",
        label: {
          value: ["3", styleLine, "5"],
        },
        image: {
          alt: "",
          states: {
            default: road,
            activated: roadActivated,
          },
          styles: {
            height: "100px"
          },
        },
      },
      {
        button: "C",
        label: {
          value: ["6", styleLine, "12"],
        },
        image: {
          alt: "",
          states: {
            default: road,
            activated: roadActivated,
          },
          styles: {
            height: "100px"
          },
        },
      },
    ],
  };
  const presentation = {
    backgroundImage: templateBackground,
    title: 'Pregunta 3',
    description: {
      value: 'Loki y tú ya emprendieron el viaje. Llevan varios días caminando, pero, llegaron a un punto donde tienen tres posibles caminos.<br/><br/>¿Cuál de los tres caminos elegir? Necesitan el <strong>más corto</strong> para llegar rápido donde Mor!'
    },
    image: '/images/persona_x2.png',
    submit: {
      label: '¡Vamos!'
    }
  };
  return (
    <section className="efda efda-question-2">
      <Header goView={goView} actualView={3} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <QuestionType question={questionTemplate}
          goView={() => goView(4)} />
      }
    </section>
  );
};
