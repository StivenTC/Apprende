import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Altavoz from "../../../assets/altavoz.png"
import { Header } from "../../components/layout/Header/Header";

export const ConclusionTemplate = ({ goView }) => {
  const [showSolution, setShowSolution] = useState(false);

  const Solution = () => {
    return <div className="focus-conclusion-content">
      <h2>Solución</h2>
      <img src="" />
    </div>
  }

  const nextView = () => {
    if (showSolution) {
      goView(0)
    } else {
      setShowSolution(true)
    }
  }
  return (
    <div className="focus-conclusion">
      <Header goView={goView} actualView={3} />
      {showSolution ?
        <Solution /> : <div className="focus-conclusion-content">
          <img src={Altavoz} alt="Una pista" />
          <h2>Ten en cuenta</h2>
          <img src=""/>

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