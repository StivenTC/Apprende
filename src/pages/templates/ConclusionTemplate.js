import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Altavoz from "../../assets/altavoz.png"
import { Header } from "../../components/layout/Header/Header";

export const ConclusionTemplate = ({ goView, ImgConclusion, ImgSolution, nextIDView }) => {
  const [showSolution, setShowSolution] = useState(false);

  const Solution = () => {
    return <div className="focus-conclusion-content">
      <h2>Solución</h2>
      <ImgSolution />
    </div>
  }

  const nextView = () => {
    if (showSolution) {
      goView(nextIDView)
    } else {
      setShowSolution(true)
    }
  }
  return (
    <div className="focus-conclusion">
      {showSolution ?
        <Solution /> : <div className="focus-conclusion-content">
          <img src={Altavoz} alt="Una pista" />
          <h2>Ten en cuenta</h2>
          <ImgConclusion />
        </div>}
      <button
        className="btn-next"
        onClick={() => nextView()}>
        Siguiente
        <BiRightArrowAlt />
      </button>
    </div>
  )
}