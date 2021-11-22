import { SelectItemTemplate } from "../templates/SelectItemTemplate";

export const Question6 = ({ goView, setResult, nextActivity }) => {

  const question = {
    title: "Reto 6",
    description: "Dispara a la diana que tiene la fracción equivalente a la que aparece en la tarjeta",
    fraction: {
     num1: 5,
     num2: 7
    },
    submit: {
      label: "Enviar"
    },
    options: [
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 10,
          num2: 21
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 14,
          num2: 28
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 15,
          num2: 14
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 20,
          num2: 28
        }
      }
    ],
    clueTexts: [
      "Las fracciones equivalentes representan la misma cantidad aunque el numerador y el denominador sean diferentes.",
      "Para encontrar  fracciones equivalente a 6/10 debes multiplicar o dividir el numerador y el denominador de la fracción por el mismo número"
    ],
    answer: 3
  };

  return (
    <div className="select-quarter">
      <SelectItemTemplate
        nextQuestion={7}
        goView={goView}
        setResult={setResult}
        nextActivity={nextActivity}
        question={question}/>
    </div>
  )
}