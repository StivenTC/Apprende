import { SelectItemTemplate } from "../templates/SelectItemTemplate";

export const Question8 = ({ goView, setResult, nextActivity }) => {

  const question = {
    title: "Reto 8",
    description: "Dispara a la fracción que <strong>usarías para encontrar una fracción equivalente</strong> a la que aparece abajo",
    fraction: {
     num1: 5,
     num2: 9
    },
    submit: {
      label: "Enviar"
    },
    options: [
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 8,
          num2: 5
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 5,
          num2: 9
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 10,
          num2: 18
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 6,
          num2: 6
        }
      }
    ],
    clueTexts: [
      "¿Cómo debe ser el numerador y el denominador de una fracción para que al multiplicarla por otra encuentres una fracción equivalente?",
      "Para encontrar una fracción equivalente a 5/9 debes multiplicarla por una fracción que tenga arriba y abajo el mismo número (por ejemplo 2/2, 3/3, 4/4...), es decir, una fracción igual a 1."
    ],
    answer: 3
  };

  return (
    <div className="select-quarter">
      <SelectItemTemplate
        goView={goView}
        setResult={setResult}
        nextActivity={nextActivity}
        question={question}/>
    </div>
  )
}