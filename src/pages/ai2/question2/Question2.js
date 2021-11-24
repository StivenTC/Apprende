/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { NumberLine } from "../templates/NumberLine";
import ScaleImg from "../../../assets/recta_ai_2_pregunta_2.png";
import Rock from "../../../assets/rock_on.png";
import RockOff from "../../../assets/rock_off.png";

export const Question2 = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE2-Reto 2',
    description: 'Arrastra y organiza las fracciones de <strong>menor a mayor</strong> sobre la recta numérica.',
    classNameOptions: 'question-2-dad',
    answer: ['1/7', '3/7', '6/7'],
    options: [
      {
        id: 'card-01',
        quarter: '6/7',
        color: '#FF820F',
        image1: RockOff,
        image2: Rock,
        styles: {
          card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          },
          image: {
            position: 'initial',
            marginTop: '5px'
          },
          position: {
            left: '30px'
          }
        }
      },
      {
        id: 'card-02',
        quarter: '3/7',
        color: '#28D2EE',
        image1: RockOff,
        image2: Rock,
        styles: {
          card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          },
          image: {
            position: 'initial',
            marginTop: '5px'
          },
          position: {
            left: '106px'
          }
        }
      },
      {
        id: 'card-03',
        quarter: '1/7',
        color: '#43D8BC',
        image1: RockOff,
        image2: Rock,
        styles: {
          card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          },
          image: {
            position: 'initial',
            marginTop: '5px'
          },
          position: {
            right: '52px'
          }
        }
      }
    ],
    scaleImage: ScaleImg,
    backgroundImage: '/images/AI/rock_bkg.png',
    clueTexts: [
      "¿Las tres fracciones de las piedras tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para organizarlas en la recta numérica.",
      "Recuerda que cuando comparamos fracciones que tienen el mismo denominador, en este caso 7, la fracción con el numerador más grande es la mayor."
    ]
  };

  return (
    <NumberLine
      goView={goView}
      setResult={setResult}
      nextActivity={nextActivity}
      nextQuestion={3}
      question={question} />
  )
}