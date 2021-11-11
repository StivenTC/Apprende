import { QuestionType } from "../template/QuestionType";
import byke from "../../../assets/byke.png";
import alpaca from "../../../assets/alpaca.png";
import skeboard from "../../../assets/skeboard.png";

export const Question7 = () => {
  const styleLine = '<div style="border: none;border-top: 2px solid #073B4C;width: 20px;"></div>';

  const questionTemplate = {
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

  return <QuestionType question={questionTemplate} />;
};
