/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import ScaleImg from "../../../assets/recta_ai_3_pregunta_7.png";
import Guerrero from "../../../assets/Guerrero Inca.png";
import { NumberLine } from "../../ai2/templates/NumberLine";

export const Question7 = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE3-Reto 7',
    description: 'Arrastra cada guerrero al escudo que tenga el número más cercano a la fracción del guerrero.',
    answer: ['14/15', '15/2', '6/10'],
    options: [
      {
        id: 'card-01',
        quarter: '14/15',
        color: '#FF820F',
        image1: Guerrero,
        image2: Guerrero,
        styles: {}
      },
      {
        id: 'card-02',
        quarter: '6/10',
        color: '#28D2EE',
        image1: Guerrero,
        image2: Guerrero,
        styles: {}
      },
      {
        id: 'card-03',
        quarter: '15/2',
        color: '#43D8BC',
        image1: Guerrero,
        image2: Guerrero,
        styles: {}
      }
    ],
    scaleImage: ScaleImg,
    backgroundImage: '/images/AI/valle.png',
    clueTexts: [
      `¿A qué número natural se acerca 14/15? ¿Está más cerca del 0? ¿Está más cerca de 1? ¿Está más cerca de otro número?
        ¿A qué número se acerca 6/10?
        ¿A qué número se acerca 15/2?`,
      `1. Entre más cerca estén el numerador y el denominador, más se acerca la fracción a uno (por ejemplo, 5/6)
        <br/><br/>2. Si el denominador es aproximadamente el doble del numerador, la fracción se acerca a 1/2 (por ejemplo, 8/15)
        <br/><br/>3. Si el numerador es mucho más grande que el denominador, divide el numerador entre el denominador para identificar el entero más cercano (por ejemplo, 45/9).`
    ]
  };

  return (
    <NumberLine
      goView={goView}
      nextActivity={nextActivity}
      setResult={setResult}
      nextQuestion={8}
      question={question} />
  )
}