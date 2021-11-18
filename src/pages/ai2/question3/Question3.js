/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import { NumberLine } from "../templates/NumberLine";
import ScaleImg from "../../../assets/llamaScale.svg";
import Llama from "../../../assets/llama.svg";
import LlamaGhost from "../../../assets/llamaGhost.svg";

export const Question3 = ({ goView, saveUser, userData }) => {

  const question = {
    description: '<strong>Arrastra la figura de los tres atletas</strong> y ubícalos sobre la línea de salida según la fracción que les fue asignada:',
    answer: ['1/8', '4/8', '6/8'],
    options: [
      {
        id: 'card-01',
        quarter: '6/8',
        color: '#FF820F',
        image1: LlamaGhost,
        image2: Llama
      },
      {
        id: 'card-02',
        quarter: '4/8',
        color: '#28D2EE',
        image1: LlamaGhost,
        image2: Llama
      },
      {
        id: 'card-03',
        quarter: '1/8',
        color: '#43D8BC',
        image1: LlamaGhost,
        image2: Llama
      }
    ],
    scaleImage: ScaleImg,
    backgroundImage: '/images/AI/llama-bkg.png',
    clueTexts: [
      "¿Las fracciones de los tres atletas tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para organizarlos en la recta numérica.",
      "Recuerda que cuando comparamos fracciones que tienen el mismo denominador, en este caso 8, la fracción con el numerador más grande es la mayor."
    ]
  };

  return (
    <>
      <Header goView={goView} actualView={2}/>
      <NumberLine
        goView={goView}
        saveUser={saveUser}
        userData={userData}
        question={question}/>
    </>
  )
}