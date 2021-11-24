/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import LlamasBkg from "../../../assets/llama-bkg.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { AISortDnD } from "./AISortDnD";
import saveActivity from "../../../helpers/saveActivity";

export function Question8({ goView, setResult, nextQuestion }) {
  const QuarterA = () => {
    return <svg width="43" height="63" viewBox="0 0 43 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8.82129" y1="31.0859" x2="32.8213" y2="31.0859" stroke="#EDEDFB" stroke-width="2" stroke-linecap="round" />
      <path d="M27.4925 15.064C29.0498 15.064 29.8285 15.6933 29.8285 16.952C29.8285 18.232 29.0498 18.872 27.4925 18.872H26.3085V20.696C26.3085 21.5067 26.0845 22.1253 25.6365 22.552C25.1885 22.9787 24.6018 23.192 23.8765 23.192C23.1512 23.192 22.5645 22.9787 22.1165 22.552C21.6685 22.1253 21.4445 21.5067 21.4445 20.696V18.872H13.6685C13.0072 18.872 12.4845 18.68 12.1005 18.296C11.7165 17.8907 11.5245 17.3893 11.5245 16.792C11.5245 16.1947 11.7272 15.5973 12.1325 15L21.6685 1.368C21.9245 1.00533 22.2445 0.738666 22.6285 0.567999C23.0125 0.375999 23.4178 0.279999 23.8445 0.279999C24.5058 0.279999 25.0818 0.503999 25.5725 0.952C26.0632 1.37867 26.3085 1.976 26.3085 2.744V15.064H27.4925ZM16.5485 15.064H21.4445V8.024L16.5485 15.064Z" fill="white" />
      <path d="M27.9703 39.2252C28.6316 39.2252 29.1436 39.4172 29.5063 39.8012C29.8689 40.1852 30.0503 40.6758 30.0503 41.2732C30.0503 41.8918 29.8796 42.4998 29.5382 43.0972L19.5543 60.7612C19.3196 61.2092 19.0103 61.5398 18.6263 61.7532C18.2636 61.9665 17.8796 62.0732 17.4743 62.0732C16.8556 62.0732 16.3009 61.8598 15.8103 61.4332C15.3196 60.9852 15.0743 60.4412 15.0743 59.8012C15.0743 59.3532 15.1916 58.9265 15.4263 58.5212L24.1623 43.2252H15.2983C13.7409 43.2252 12.9622 42.5638 12.9622 41.2412C12.9622 39.8972 13.7409 39.2252 15.2983 39.2252H27.9703Z" fill="white" />
    </svg>
  };
  const QuarterB = () => {
    return <svg width="43" height="63" viewBox="0 0 43 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8.82129" y1="31.0859" x2="32.8213" y2="31.0859" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M18.5045 19C20.0618 19 20.8405 19.6613 20.8405 20.984C20.8405 22.328 20.0618 23 18.5045 23H7.5605C5.98183 23 5.1925 22.328 5.1925 20.984C5.1925 19.6613 5.98183 19 7.5605 19H10.5365V5.912L7.7205 7.608C7.4005 7.8 7.0805 7.896 6.7605 7.896C6.22717 7.896 5.7685 7.672 5.3845 7.224C5.02183 6.776 4.8405 6.27467 4.8405 5.72C4.8405 4.97333 5.17117 4.408 5.8325 4.024L10.8885 0.983999C11.6352 0.535999 12.3818 0.311998 13.1285 0.311998C13.8325 0.311998 14.4085 0.535999 14.8565 0.983999C15.3045 1.41067 15.5285 1.99733 15.5285 2.744V19H18.5045ZM38.14 15.064C39.6973 15.064 40.476 15.6933 40.476 16.952C40.476 18.232 39.6973 18.872 38.14 18.872H36.956V20.696C36.956 21.5067 36.732 22.1253 36.284 22.552C35.836 22.9787 35.2493 23.192 34.524 23.192C33.7987 23.192 33.212 22.9787 32.764 22.552C32.316 22.1253 32.092 21.5067 32.092 20.696V18.872H24.316C23.6547 18.872 23.132 18.68 22.748 18.296C22.364 17.8907 22.172 17.3893 22.172 16.792C22.172 16.1947 22.3747 15.5973 22.78 15L32.316 1.368C32.572 1.00533 32.892 0.738666 33.276 0.567999C33.66 0.375999 34.0653 0.279999 34.492 0.279999C35.1533 0.279999 35.7293 0.503999 36.22 0.952C36.7107 1.37867 36.956 1.976 36.956 2.744V15.064H38.14ZM27.196 15.064H32.092V8.024L27.196 15.064Z" fill="white" />
      <path d="M27.9703 39.2252C28.6316 39.2252 29.1436 39.4172 29.5063 39.8012C29.8689 40.1852 30.0503 40.6758 30.0503 41.2732C30.0503 41.8918 29.8796 42.4998 29.5382 43.0972L19.5543 60.7612C19.3196 61.2092 19.0103 61.5398 18.6263 61.7532C18.2636 61.9665 17.8796 62.0732 17.4743 62.0732C16.8556 62.0732 16.3009 61.8598 15.8103 61.4332C15.3196 60.9852 15.0743 60.4412 15.0743 59.8012C15.0743 59.3532 15.1916 58.9265 15.4263 58.5212L24.1623 43.2252H15.2983C13.7409 43.2252 12.9622 42.5638 12.9622 41.2412C12.9622 39.8972 13.7409 39.2252 15.2983 39.2252H27.9703Z" fill="white" />
    </svg>
  };
  const QuarterC = () => {
    return <svg width="43" height="63" viewBox="0 0 43 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8.82129" y1="31.0859" x2="32.8213" y2="31.0859" stroke="#EDEDFB" stroke-width="2" stroke-linecap="round" />
      <path d="M27.0445 19C28.6018 19 29.3805 19.6613 29.3805 20.984C29.3805 22.328 28.6018 23 27.0445 23H16.1005C14.5218 23 13.7325 22.328 13.7325 20.984C13.7325 19.6613 14.5218 19 16.1005 19H19.0765V5.912L16.2605 7.608C15.9405 7.8 15.6205 7.896 15.3005 7.896C14.7672 7.896 14.3085 7.672 13.9245 7.224C13.5618 6.776 13.3805 6.27467 13.3805 5.72C13.3805 4.97333 13.7112 4.408 14.3725 4.024L19.4285 0.983999C20.1752 0.535999 20.9218 0.311998 21.6685 0.311998C22.3725 0.311998 22.9485 0.535999 23.3965 0.983999C23.8445 1.41067 24.0685 1.99733 24.0685 2.744V19H27.0445Z" fill="white" />
      <path d="M27.9703 39.2252C28.6316 39.2252 29.1436 39.4172 29.5063 39.8012C29.8689 40.1852 30.0503 40.6758 30.0503 41.2732C30.0503 41.8918 29.8796 42.4998 29.5382 43.0972L19.5543 60.7612C19.3196 61.2092 19.0103 61.5398 18.6263 61.7532C18.2636 61.9665 17.8796 62.0732 17.4743 62.0732C16.8556 62.0732 16.3009 61.8598 15.8103 61.4332C15.3196 60.9852 15.0743 60.4412 15.0743 59.8012C15.0743 59.3532 15.1916 58.9265 15.4263 58.5212L24.1623 43.2252H15.2983C13.7409 43.2252 12.9622 42.5638 12.9622 41.2412C12.9622 39.8972 13.7409 39.2252 15.2983 39.2252H27.9703Z" fill="white" />
    </svg>
  };


  const AISortCards = [
    {
      id: "pie-1",
      chart: <QuarterA />,
      quarter: "4/7"
    },
    {
      id: "pie-2",
      chart: <QuarterB />,
      quarter: "14/7"
    },
    {
      id: "pie-3",
      chart: <QuarterC />,
      quarter: "1/7"
    }
  ];

  const [selectCards, setSelecCards] = useState([]);
  const [showFeedback, setFeedback] = useState("");
  const [dataAnswers, setDataAnswers] = useState([]);
  const [attempts, setAttempts] = useState(1);
  const clueTexts = [
    "¿Las fracciones tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para ordenarlas.",
    "Recuerda que para ordenar fracciones que tienen el mismo denominador (en este caso 7), ordenas los numeradores de mayor a menor."
  ];

  const validate = () => {
    return selectCards.length >= 3;
  };

  const nextActivity = () => {
    let corrects = ['14/7', '4/7', '1/7'];
    let answered = selectCards.map((t) => t.quarter);
    //saveUser(AISortCards)

    let ans = dataAnswers;
    ans.push(answered.join(';'))
    setDataAnswers(ans)

    let data = {
      'ENTRE2-Reto 8- Intento 1': dataAnswers[0],
      'ENTRE2-Reto 8- Intento 2': dataAnswers[1],
      'ENTRE2-Reto 8- Intento 3': dataAnswers[2],
      'ENTRE2-Reto 8 Veces': attempts - 1,
    }

    if (JSON.stringify(corrects) === JSON.stringify(answered)) {
      saveActivity(data)
      setFeedback('correct');
      setResult(true);
      //saveUser({ ...userData, aiSort: true })
    } else if (attempts < 3) {
      setSelecCards([]);
      setFeedback('clue');
      setAttempts(attempts + 1);
    } else {
      data['ENTRE2-Reto 8 Veces'] = attempts
      saveActivity(data)
      setResult(false);
      //saveUser({ ...userData, aiSort: true })
      goView(2);
    }
  };
  return (
    <div className="ai-sort question8">
      <div className="ai-sort-body">
        <p>Utiliza los recuadros de abajo para ordenar las fracciones de <strong>mayor a menor</strong>.</p>
        <div className="ai-sort-activity">
          <AISortDnD cards={AISortCards} answer={setSelecCards} />
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>
      </div>
      {showFeedback === 'correct' && <FeedbackCorrect goView={nextQuestion} view={9} />}
      {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={clueTexts} />}
    </div>
  );
}