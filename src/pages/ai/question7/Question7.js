import { SelectItemTemplate } from "../templates/SelectItemTemplate";

export const Question7 = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE1-Reto 7',
    title: "Reto 7",
    description: "Dispara a la <strong>fracción que usarías para encontrar una fracción equivalente</strong> a la que aparece abajo",
    fraction: {
      num1: 7,
      num2: 10
    },
    submit: {
      label: "Enviar"
    },
    options: [
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 1,
          num2: 10
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 7,
          num2: 7
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 10,
          num2: 7
        }
      },
      {
        activated: "/images/AI/diana_amarilla.png",
        default: "/images/AI/diana_azul.png",
        value: {
          num1: 1,
          num2: 7
        }
      }
    ],
    clueTexts: [
      "¿Estás seguro de que estás multiplicando por una fracción igual a 1? ¿Ya comparaste el numerador y el denominador?",
      "Para encontrar una fracción equivalente a 7/10 debes multiplicarla por una fracción que tenga arriba y abajo el mismo número (por ejemplo 2/2, 3/3, 4/4...), es decir, una fracción igual a 1."
    ],
    answer: 1
  };

  return (
    <div className="select-quarter">
      <SelectItemTemplate
        nextQuestion={8}
        goView={goView}
        setResult={setResult}
        nextActivity={nextActivity}
        question={question} />
    </div>
  )
}