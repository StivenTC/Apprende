/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { NumberLine } from "../templates/NumberLine";
import ScaleImg from "../../../assets/recta_ai_2_pregunta_3.png";
import Atleta1 from "../../../assets/atleta1_on.png";
import Atleta1Off from "../../../assets/atleta1_off.png";
import Atleta2 from "../../../assets/atleta2_on.png";
import Atleta2Off from "../../../assets/atleta2_off.png";
import Atleta3 from "../../../assets/atleta3_on.png";
import Atleta3Off from "../../../assets/atleta3_off.png";

export const Question3 = ({ goView, setResult, nextActivity }) => {

  const question = {
    description: '<strong>Arrastra la figura de los tres atletas</strong> y ubícalos sobre la línea de salida según la fracción que les fue asignada:',
    answer: ['1/8', '4/8', '6/8'],
    options: [
      {
        id: 'card-01',
        quarter: '6/8',
        color: '#FF820F',
        image1: Atleta1Off,
        image2: Atleta1,
        styles: {
          fraction: {
            marginRight: '40px'
          },
          position: {
            left: '25px'
          }
        }
      },
      {
        id: 'card-02',
        quarter: '4/8',
        color: '#28D2EE',
        image1: Atleta2Off,
        image2: Atleta2,
        styles: {
          fraction: {
            marginRight: '40px'
          },
          position: {
            left: '133px'
          }
        }
      },
      {
        id: 'card-03',
        quarter: '1/8',
        color: '#43D8BC',
        image1: Atleta3Off,
        image2: Atleta3,
        styles: {
          fraction: {
            marginRight: '40px'
          },
          position: {
            right: '73px'
          }
        }
      }
    ],
    scaleImage: ScaleImg,
    backgroundImage: '/images/AI/atletas_bkg.png',
    clueTexts: [
      "¿Las fracciones de los tres atletas tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para organizarlos en la recta numérica.",
      "Recuerda que cuando comparamos fracciones que tienen el mismo denominador, en este caso 8, la fracción con el numerador más grande es la mayor."
    ]
  };

  return (
    <NumberLine
      goView={goView}
      setResult={setResult}
      nextActivity={nextActivity}
      nextQuestion={4}
      question={question}/>
  )
}