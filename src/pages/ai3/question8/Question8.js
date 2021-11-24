/* eslint-disable react-hooks/exhaustive-deps */
import ScaleImg from "../../../assets/recta_ai_3_pregunta_8.png";
import Jugadora from "../../../assets/soccer.png";
import { NumberLine } from "../../ai2/templates/NumberLine";

export const Question8 = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE3-Reto 8',
    description: 'Arrastra cada jugador al equipo con el número que está más cerca de la fracción en su chaleco.',
    answer: ['3/6', '7/9', '5/3'],
    options: [
      {
        id: 'card-01',
        quarter: '3/6',
        color: '#FF820F',
        image1: Jugadora,
        image2: Jugadora,
        styles: {}
      },
      {
        id: 'card-02',
        quarter: '5/3',
        color: '#28D2EE',
        image1: Jugadora,
        image2: Jugadora,
        styles: {}
      },
      {
        id: 'card-03',
        quarter: '7/9',
        color: '#43D8BC',
        image1: Jugadora,
        image2: Jugadora,
        styles: {}
      }
    ],
    scaleImage: ScaleImg,
    backgroundImage: '/images/AI/soccerBkg.png',
    clueTexts: [
      `¿A qué número natural se acerca 7/9? ¿Está más cerca del 0? ¿Está más cerca de 1? ¿Está más cerca de otro número? ¿A qué número se acerca 3/6? ¿A qué número se acerca 5/3?`,
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
      nextQuestion={9}
      question={question} />
  )
}