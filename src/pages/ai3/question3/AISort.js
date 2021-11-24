/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/Header/Header";
import LlamasBkg from "../../../assets/llama-bkg.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { FeedbackCorrect } from "../../../components/layout/feedback/Feedback";
import { FeedbackClue } from "../../../components/layout/feedback/FeedbackClue";
import { AISortDnD } from "./AISortDnD";
import saveActivity from "../../../helpers/saveActivity";

export function Question3({ goView, setResult, nextActivity }) {
  const QuarterA = () => {
    return <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.0098 36.9352L3.7843 26.1393C8.55435 11.4588 21.5749 2 37.0098 2V36.9352Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0098 36.9365L16.4751 65.1977C3.98986 56.1274 -0.983467 40.8212 3.78433 26.1406L37.0098 36.9365Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0098 36.9336L57.5445 65.1948C45.057 74.2674 28.9626 74.2674 16.4751 65.1948L37.0098 36.9336Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0099 36.9365L70.2354 26.1406C75.0032 40.8212 70.0298 56.1274 57.5446 65.1977L37.0099 36.9365Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0099 36.9352V2C52.4448 2 65.4676 11.4611 70.2354 26.1393L37.0099 36.9352Z" fill="#28D2EE" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
    </svg>;
  };
  const QuarterB = () => {
    return <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.9945 36.9945H2C2 27.7133 5.68691 18.8124 12.2496 12.2496C18.8124 5.68691 27.7134 2 36.9945 2V36.9945Z" fill="#28D2EE" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M36.9945 36.9922V71.9839C27.7138 71.9839 18.8133 68.2973 12.2506 61.7352C5.68797 55.1731 2.00074 46.2728 2 36.9922H36.9945Z" fill="#28D2EE" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M36.9945 36.9922H72.0001C72.0001 41.5885 71.0945 46.1398 69.3351 50.3861C67.5758 54.6324 64.9971 58.4905 61.7463 61.7399C58.4956 64.9894 54.6365 67.5666 50.3895 69.3243C46.1425 71.082 41.5908 71.9857 36.9945 71.9839V36.9922Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M36.9945 36.9945V2C41.5911 1.99818 46.143 2.90202 50.3901 4.65988C54.6373 6.41773 58.4965 8.99515 61.7473 12.2449C64.9981 15.4947 67.5767 19.353 69.3359 23.5997C71.0951 27.8463 72.0004 32.3979 72.0001 36.9945H36.9945Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
    </svg>;

  };
  const QuarterC = () => {
    return <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.0276 36.9271L9.51282 15.4236C12.7397 11.2011 16.9069 7.78933 21.6833 5.45943C26.4596 3.12952 31.7136 1.94566 37.0276 2.00191V36.9271Z" fill="#28D2EE" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0277 36.9254L2.98392 44.7788C0.507581 34.0527 2.71343 24.1007 9.51286 15.4219L37.0277 36.9254Z" fill="#28D2EE" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0277 36.9258L22.2723 68.5585C17.4318 66.366 13.1695 63.0745 9.82429 58.9457C6.47911 54.8168 4.1433 49.9645 3.00256 44.7745L37.0277 36.9258Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0276 36.9258L52.338 68.3113C42.4373 73.1381 32.2522 73.2267 22.2722 68.5725L37.0276 36.9258Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0277 36.9258L71.1881 44.1822C70.1396 49.392 67.8908 54.2855 64.6202 58.4741C61.3497 62.6627 57.1475 66.031 52.3474 68.3113L37.0277 36.9258Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0277 36.9237L64.1694 14.9258C71.0994 23.4834 73.4965 33.3934 71.1881 44.1615L37.0277 36.9237Z" fill="#D9D9ED" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
      <path d="M37.0277 36.9291V2.00391C48.043 2.00391 57.2348 6.39229 64.1694 14.9499L37.0277 36.9291Z" fill="#28D2EE" stroke="#504F81" stroke-width="3" stroke-miterlimit="10" />
    </svg>;
  };


  const AISortCards = [
    {
      id: "pie-1",
      chart: <QuarterA />,
      quarter: "1/5"
    },
    {
      id: "pie-2",
      chart: <QuarterB />,
      quarter: "2/4"
    },
    {
      id: "pie-3",
      chart: <QuarterC />,
      quarter: "3/7"
    }
  ];

  const [selectCards, setSelecCards] = useState([]);
  const [showFeedback, setFeedback] = useState("");
  const [dataAnswers, setDataAnswers] = useState([]);
  const [attempts, setAttempts] = useState(1);
  const clueTexts = [
    "¿Puedes hacer que las tres fracciones que representan los gráficos tengan el mismo denominador? ¡Así es más fácil ordenarlas!",
    "¿Cuál es el denominador común entre 4, 5 y 7? ¡Una pista! haz una lista de los múltiplos de 4, 5 y 7 y encuentra el número más pequeño en común. Este número es el denominador común. ¿Cómo utilizas este numero para convertir las tres fracciones originales 1/5, 2/4 y 3/7 en tres fracciones nuevas con el mismo denominador?"
  ];

  const validate = () => {
    return selectCards.length >= 3;
  };

  const nextActivityAction = () => {
    let corrects = ['1/5', '3/7', '2/4'];
    let answered = selectCards.map((t) => t.quarter);
    //saveUser(AISortCards)

    let ans = dataAnswers;
    ans.push(answered.join(';'))
    setDataAnswers(ans)

    let data = {
      'ENTRE3-Reto 3- Intento 1': dataAnswers[0],
      'ENTRE3-Reto 3- Intento 2': dataAnswers[1],
      'ENTRE3-Reto 3- Intento 3': dataAnswers[2],
      'ENTRE3-Reto 3 Veces': attempts - 1,
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
      data['ENTRE3-Reto 3 Veces'] = attempts
      saveActivity(data)
      setResult(false);
      //saveUser({ ...userData, aiSort: true })
      goView(2);
    }
  };
  return (
    <div className="ai-sort">
      <div className="ai-sort-body">
        <p>Utiliza los recuadros de abajo para ordenar de <strong>menor a mayor</strong> las fracciones representadas en los siguientes gráficos.</p>
        <div className="ai-sort-activity">
          <AISortDnD cards={AISortCards} answer={setSelecCards} />
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivityAction() : console.log("no posible")}>
          Enviar
          <BiRightArrowAlt />
        </button>
      </div>
      {showFeedback === 'correct' && <FeedbackCorrect goView={nextActivity} view={4} />}
      {showFeedback === 'clue' && <FeedbackClue goView={setFeedback} attempt={attempts} message={clueTexts} />}
    </div>
  );
}