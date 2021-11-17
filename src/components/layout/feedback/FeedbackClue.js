import { BiRightArrowAlt } from "react-icons/bi";
import Altavoz from "../../../assets/altavoz.png"
import Advertencia from "../../../assets/advertencia.png"
export const FeedbackClue = ({ goView, attempt, message }) => {
  return (
    <div className="feedback">
      <div className="feedback-clue">
        <div className="feedback-clue-content">
          {attempt < 3 ?
            <>
              <img src={Altavoz} alt="Una pista" />
              <h2>¡Una pista!</h2>
            </> :
            <>
              <img src={Advertencia} alt="Advertencia" />
              <h2>¡Pilas!</h2>
            </>

          }
          <div className="feedback-clue-data">
            <p dangerouslySetInnerHTML={{ __html: message[attempt < 3 ? 0 : 1] }}/>
          </div>
        </div>
        <button
          className="btn-next"
          onClick={() => goView('')}>
          {attempt < 3 ? "Segundo intento" : "Último intento"}
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  )
}