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
    return <svg width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.0988 0.0898438C25.4697 0.252575 18.4808 3.01669 12.9834 7.53083L33.0988 31.9159L33.0988 0.0898438Z" fill="#D9D9ED" />
      <path d="M1.58427 26.5561C2.93866 19.6704 6.44424 13.5567 11.372 8.94399L31.2923 33.0926L1.58427 26.5561Z" fill="#D9D9ED" />
      <path d="M1.23937 28.6739C1.05889 30.0681 0.96582 31.4897 0.96582 32.9331C0.96582 38.0333 2.12796 42.862 4.20184 47.1689L30.0815 35.0199L1.23937 28.6739Z" fill="#D9D9ED" />
      <path d="M5.19494 49.0695L32.22 36.3827L20.6343 63.033C14.1016 60.1681 8.68001 55.2384 5.19494 49.0695Z" fill="#D9D9ED" />
      <path d="M22.6242 63.8289C26.1163 65.094 29.884 65.7839 33.8128 65.7839C37.4077 65.7839 40.8676 65.2064 44.105 64.139L34.4015 36.7379L22.6242 63.8289Z" fill="#D9D9ED" />
      <path d="M46.1164 63.4017L36.6249 36.5989L61.7543 50.2122C58.0981 56.1133 52.6251 60.7702 46.1164 63.4017Z" fill="#D9D9ED" />
      <path d="M62.823 48.3546C65.272 43.7562 66.6599 38.5067 66.6599 32.9331C66.6599 32.0574 66.6256 31.1898 66.5584 30.3314L38.2604 35.0483L62.823 48.3546Z" fill="#D9D9ED" />
      <path d="M66.3213 28.199L37.0078 33.0851L56.6282 9.30008C61.7418 14.239 65.2568 20.8226 66.3213 28.199Z" fill="#D9D9ED" />
      <path d="M55.0381 7.86107C49.6519 3.29561 42.7751 0.435067 35.241 0.112727L35.241 31.8604L55.0381 7.86107Z" fill="#D9D9ED" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.19531 49.0702L32.2204 36.3834L20.6347 63.0337C14.102 60.1688 8.68038 55.2391 5.19531 49.0702ZM33.8132 65.7846C29.8844 65.7846 26.1167 65.0947 22.6246 63.8296L34.4019 36.7386L44.1053 64.1397C40.868 65.2071 37.408 65.7846 33.8132 65.7846ZM46.1168 63.4024L36.6253 36.5996L61.7547 50.2129C58.0985 56.114 52.6255 60.7709 46.1168 63.4024ZM66.6602 32.9338C66.6602 38.5074 65.2723 43.7569 62.8233 48.3553L38.2608 35.049L66.5587 30.3321C66.626 31.1905 66.6602 32.0581 66.6602 32.9338ZM66.3217 28.1997L37.0082 33.0858L56.6286 9.30078C61.7421 14.2397 65.2572 20.8233 66.3217 28.1997Z" fill="#28D2EE" />
    </svg>;
  };
  const QuarterB = () => {
    return <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.6066 0.742188C24.9775 0.904918 17.9886 3.66903 12.4912 8.18317L32.6066 32.5683L32.6066 0.742188Z" fill="#D9D9ED" />
      <path d="M1.09208 27.2085C2.44648 20.3228 5.95206 14.209 10.8798 9.59633L30.8001 33.745L1.09208 27.2085Z" fill="#D9D9ED" />
      <path d="M0.747178 29.3262C0.566706 30.7204 0.473633 32.1421 0.473633 33.5854C0.473633 38.6856 1.63577 43.5144 3.70966 47.8213L29.5894 35.6723L0.747178 29.3262Z" fill="#D9D9ED" />
      <path d="M4.70276 49.7218L31.7278 37.0351L20.1421 63.6854C13.6094 60.8204 8.18782 55.8907 4.70276 49.7218Z" fill="#D9D9ED" />
      <path d="M22.132 64.4812C25.6241 65.7464 29.3919 66.4362 33.3207 66.4362C36.9155 66.4362 40.3754 65.8587 43.6128 64.7913L33.9094 37.3902L22.132 64.4812Z" fill="#D9D9ED" />
      <path d="M45.6243 64.054L36.1327 37.2512L61.2621 50.8646C57.6059 56.7657 52.1329 61.4226 45.6243 64.054Z" fill="#D9D9ED" />
      <path d="M62.3308 49.0069C64.7798 44.4085 66.1677 39.1591 66.1677 33.5854C66.1677 32.7098 66.1334 31.8421 66.0662 30.9838L37.7682 35.7007L62.3308 49.0069Z" fill="#D9D9ED" />
      <path d="M65.8291 28.8513L36.5157 33.7374L56.136 9.95243C61.2496 14.8913 64.7646 21.475 65.8291 28.8513Z" fill="#D9D9ED" />
      <path d="M54.5459 8.51341C49.1597 3.94796 42.2829 1.08741 34.7488 0.76507L34.7488 32.5127L54.5459 8.51341Z" fill="#D9D9ED" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6073 0.742188C24.9782 0.904918 17.9893 3.66903 12.4919 8.18317L32.6073 32.5683L32.6073 0.742188ZM1.09277 27.2085C2.44717 20.3228 5.95275 14.209 10.8805 9.59633L30.8008 33.745L1.09277 27.2085ZM4.70345 49.7218L31.7285 37.0351L20.1428 63.6854C13.6101 60.8204 8.18851 55.8907 4.70345 49.7218ZM33.3214 66.4362C29.3925 66.4362 25.6248 65.7464 22.1327 64.4812L33.91 37.3902L43.6135 64.7913C40.3761 65.8587 36.9162 66.4362 33.3214 66.4362ZM45.6249 64.054L36.1334 37.2512L61.2628 50.8646C57.6066 56.7657 52.1336 61.4226 45.6249 64.054ZM66.1684 33.5854C66.1684 39.1591 64.7805 44.4085 62.3315 49.0069L37.7689 35.7007L66.0669 30.9838C66.1341 31.8421 66.1684 32.7098 66.1684 33.5854ZM65.8298 28.8513L36.5163 33.7374L56.1367 9.95243C61.2503 14.8913 64.7653 21.475 65.8298 28.8513ZM34.7495 0.76507C42.2836 1.08741 49.1604 3.94796 54.5466 8.51341L34.7495 32.5127L34.7495 0.76507Z" fill="#28D2EE" />
    </svg>;

  };
  const QuarterC = () => {
    return <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.1896 0.0390625C24.5605 0.201793 17.5716 2.96591 12.0742 7.48005L32.1896 31.8652L32.1896 0.0390625Z" fill="#D9D9ED" />
      <path d="M0.675092 26.5053C2.02948 19.6196 5.53506 13.5059 10.4628 8.89321L30.3831 33.0419L0.675092 26.5053Z" fill="#D9D9ED" />
      <path d="M0.330186 28.6231C0.149714 30.0173 0.0566406 31.4389 0.0566406 32.8823C0.0566406 37.9825 1.21878 42.8113 3.29267 47.1182L29.1724 34.9691L0.330186 28.6231Z" fill="#D9D9ED" />
      <path d="M4.28576 49.0187L31.3108 36.332L19.7251 62.9822C13.1924 60.1173 7.77083 55.1876 4.28576 49.0187Z" fill="#D9D9ED" />
      <path d="M21.715 63.7781C25.2071 65.0433 28.9749 65.7331 32.9037 65.7331C36.4985 65.7331 39.9584 65.1556 43.1958 64.0882L33.4924 36.6871L21.715 63.7781Z" fill="#D9D9ED" />
      <path d="M45.2073 63.3509L35.7157 36.5481L60.8451 50.1614C57.1889 56.0625 51.7159 60.7195 45.2073 63.3509Z" fill="#D9D9ED" />
      <path d="M61.9138 48.3038C64.3628 43.7054 65.7507 38.4559 65.7507 32.8823C65.7507 32.0067 65.7164 31.139 65.6492 30.2807L37.3512 34.9975L61.9138 48.3038Z" fill="#D9D9ED" />
      <path d="M65.4121 28.1482L36.0987 33.0343L55.719 9.2493C60.8326 14.1882 64.3476 20.7718 65.4121 28.1482Z" fill="#D9D9ED" />
      <path d="M54.129 7.81029C48.7427 3.24483 41.8659 0.384285 34.3318 0.0619453L34.3318 31.8096L54.129 7.81029Z" fill="#D9D9ED" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32.1896 0.0390625C24.5605 0.201793 17.5716 2.96591 12.0742 7.48005L32.1896 31.8652L32.1896 0.0390625ZM0.675092 26.5053C2.02948 19.6196 5.53506 13.5059 10.4628 8.89321L30.3831 33.0419L0.675092 26.5053ZM0.0566406 32.8823C0.0566406 31.4389 0.149714 30.0173 0.330186 28.6231L29.1724 34.9691L3.29267 47.1182C1.21878 42.8113 0.0566406 37.9825 0.0566406 32.8823ZM4.28576 49.0187L31.3108 36.332L19.7251 62.9822C13.1924 60.1173 7.77083 55.1876 4.28576 49.0187ZM32.9037 65.7331C28.9749 65.7331 25.2071 65.0433 21.715 63.7781L33.4924 36.6871L43.1958 64.0882C39.9584 65.1556 36.4985 65.7331 32.9037 65.7331ZM45.2073 63.3509L35.7157 36.5481L60.8451 50.1614C57.1889 56.0625 51.7159 60.7195 45.2073 63.3509ZM65.7507 32.8823C65.7507 38.4559 64.3628 43.7054 61.9138 48.3038L37.3512 34.9975L65.6492 30.2807C65.7164 31.139 65.7507 32.0067 65.7507 32.8823ZM65.4121 28.1482L36.0987 33.0343L55.719 9.2493C60.8326 14.1882 64.3476 20.7718 65.4121 28.1482ZM34.3318 0.0619453C41.8659 0.384285 48.7427 3.24483 54.129 7.81029L34.3318 31.8096L34.3318 0.0619453Z" fill="#28D2EE" />
    </svg>;
  };


  const AISortCards = [
    {
      id: "pie-1",
      chart: <QuarterC />,
      quarter: "9/9"
    },
    {
      id: "pie-2",
      chart: <QuarterA />,
      quarter: "5/9"
    },
    {
      id: "pie-3",
      chart: <QuarterB />,
      quarter: "8/9"
    }
  ];

  const [selectCards, setSelecCards] = useState([]);
  const [showFeedback, setFeedback] = useState("");
  const [dataAnswers, setDataAnswers] = useState([]);
  const [attempts, setAttempts] = useState(1);
  const clueTexts = [
    "¿Las fracciones tienen el mismo denominador? Si la respuesta es sí, fíjate en los numeradores para ordenarlas.",
    "Recuerda que para ordenar fracciones que tienen el mismo denominador (en este caso 9), ordenas los numeradores de menor a mayor."
  ];

  const validate = () => {
    return selectCards.length >= 3;
  };

  const nextActivityAction = () => {
    let corrects = ['5/9', '8/9', '9/9'];
    let answered = selectCards.map((t) => t.quarter);
    //saveUser(AISortCards)

    let ans = dataAnswers;
    ans.push(answered.join(';'))
    setDataAnswers(ans)

    let data = {
      'ENTRE2-Reto 3- Intento 1': dataAnswers[0],
      'ENTRE2-Reto 3- Intento 2': dataAnswers[1],
      'ENTRE2-Reto 3- Intento 3': dataAnswers[2],
      'ENTRE2-Reto 3 Veces': attempts - 1,
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
      data['ENTRE2-Reto 3 Veces'] = attempts
      saveActivity(data)
      setResult(false);
      //saveUser({ ...userData, aiSort: true })
      goView(9);
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