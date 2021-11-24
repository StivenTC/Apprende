import { Header } from "../../../components/layout/Header/Header"

import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import saveActivity from "../../../helpers/saveActivity";

export const CompareCake = ({ goView, saveUser, userData }) => {

  const [answer, setAnswer] = useState('');


  const Fraction = () => {
    return <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M99.9993 29.2892C90.7135 29.2892 81.5187 31.1182 72.9397 34.6717C64.3608 38.2252 56.5657 43.4337 49.9997 49.9997L99.9993 99.9993L99.9993 29.2892Z" fill="#37BCDA" stroke="#F7FAFF" strokeWidth="4" />
      <path d="M149.999 49.9998C143.433 43.4337 135.638 38.2253 127.059 34.6718C118.48 31.1182 109.285 29.2893 99.9995 29.2893L99.9995 99.9994L149.999 49.9998Z" fill="#37BCDA" stroke="#F7FAFF" strokeWidth="4" />
      <path d="M170.711 99.9991C170.711 90.7133 168.882 81.5184 165.328 72.9395C161.775 64.3605 156.566 56.5655 150 49.9995L100.001 99.9991L170.711 99.9991Z" fill="#37BCDA" stroke="#F7FAFF" strokeWidth="4" />
      <path d="M150 149.999C156.566 143.433 161.775 135.638 165.328 127.059C168.882 118.48 170.711 109.285 170.711 99.9992L100.001 99.9992L150 149.999Z" fill="#37BCDA" stroke="#F7FAFF" strokeWidth="4" />
      <path d="M100.001 170.709C109.286 170.709 118.481 168.88 127.06 165.327C135.639 161.773 143.434 156.565 150 149.999L100.001 99.9991L100.001 170.709Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path d="M50.0008 150C56.5669 156.566 64.3619 161.774 72.9408 165.328C81.5198 168.881 90.7146 170.71 100 170.71L100 100L50.0008 150Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path d="M29.2891 99.9996C29.2891 109.285 31.118 118.48 34.6715 127.059C38.2251 135.638 43.4335 143.433 49.9996 149.999L99.9992 99.9996L29.2891 99.9996Z" fill="#D9D9ED" stroke="#F7FAFF" strokeWidth="4" />
      <path d="M49.9995 50.0001C43.4335 56.5661 38.225 64.3611 34.6715 72.9401C31.118 81.519 29.289 90.7139 29.289 99.9997L99.9991 99.9997L49.9995 50.0001Z" fill="#37BCDA" stroke="#F7FAFF" strokeWidth="4" />
      <g opacity="0.5">
        <path d="M170.71 99.9998C170.71 87.5875 167.443 75.3938 161.237 64.6445C155.031 53.8951 146.104 44.9688 135.355 38.7626L99.9998 99.9998L170.71 99.9998Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" />
        <path d="M64.6447 38.7627C53.8954 44.9688 44.969 53.8952 38.7629 64.6445C32.5567 75.3939 29.2895 87.5875 29.2895 99.9998L100 99.9998L64.6447 38.7627Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" />
        <path d="M135.355 38.7627C124.606 32.5566 112.412 29.2893 100 29.2893C87.5877 29.2893 75.3941 32.5566 64.6448 38.7627L100 99.9998L135.355 38.7627Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" />
        <path d="M135.355 161.237C146.105 155.031 155.031 146.104 161.237 135.355C167.443 124.606 170.711 112.412 170.711 99.9998L100 99.9998L135.355 161.237Z" fill="#FFBC0F" stroke="#F7FAFF" strokeWidth="4" />
      </g>
    </svg>

  }
  const selectOption = (option) => {
    let a = option === answer ? "" : option
    setAnswer(a)
  }

  const nextView = () => {
    let data = {
      'EXPLOR-P2.2': answer,
    }

    if (answer.length > 0) {
      saveActivity(data)
      goView(6)
    }
  }
  return (
    <div className="compare-cake">
      <Header goView={goView} actualView={5} />
      <div className="compare-cake-content">
        <div className="compare-cake-content-text">
          <h2>Compara</h2>
        </div>
        <div className="column-header">
          <div>
            <span />
            Fracción A
          </div>
          <div>
            <span />
            Fracción B
          </div>
        </div>
        <div className="compare-cake-question">
          <Fraction />
          <p>¿Cuál representa una fracción mayor? ¿La fracción A o la fracción B?</p>
          <div className="compare-cake-question-options">
            <div role="button"
              className={`${answer === "A" ? "selected" : ""}`}
              onClick={() => selectOption("A")}>A</div>
            <div role="button"
              className={`${answer === "B" ? "selected" : ""}`}
              onClick={() => selectOption("B")}>B</div>
          </div>
        </div>
        <button className={`btn-next ${answer.length > 0 ? "" : "disabled"}`} onClick={() => nextView()}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  )
}