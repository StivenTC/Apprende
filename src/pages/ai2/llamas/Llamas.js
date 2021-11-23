/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { NumberLine } from "../templates/NumberLine";
import ScaleImg from "../../../assets/llamaScale.svg";
import Llama from "../../../assets/llama.svg";
import LlamaGhost from "../../../assets/llamaGhost.svg";

export const Llamas = ({ goView, setResult, nextActivity }) => {

  const question = {
    id: 'ENTRE2-Reto 1',
    description: 'Arrastra y organiza las fracciones de <strong>menor a mayor</strong> sobre la recta numérica.',
    answer: ['1/8', '3/8', '7/8'],
    options: [
      {
        id: 'card-01',
        quarter: '7/8',
        color: '#43D8BC',
        image1: LlamaGhost,
        image2: Llama,
        styles: {}
      },
      {
        id: 'card-02',
        quarter: '1/8',
        color: '#28D2EE',
        image1: LlamaGhost,
        image2: Llama,
        styles: {}
      },
      {
        id: 'card-03',
        quarter: '3/8',
        color: '#FF820F',
        image1: LlamaGhost,
        image2: Llama,
        styles: {}
      }
    ],
    scaleImage: ScaleImg,
    backgroundImage: '/images/AI/llama-bkg.png',
    clueTexts: [
      "¿Las fracciones tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para ordenarlas.",
      "Para ordenar fracciones que tienen el mismo denominador(en este caso 8), ordena los numeradores de menor a mayor."
    ]
  };

  return (
    <NumberLine
      goView={goView}
      nextActivity={nextActivity}
      setResult={setResult}
      nextQuestion={2}
      question={question} />
  )
}