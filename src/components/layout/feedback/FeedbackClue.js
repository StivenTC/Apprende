import { BiRightArrowAlt } from "react-icons/bi";
import Altavoz from "../../../assets/altavoz.png"
export const FeedbackClue = ({ goView, attempt }) => {
  return (
    <div className="feedback">
      <div className="feedback-clue">
        <div className="feedback-clue-content">
          <img src={Altavoz} alt="Una pista" />
          <h2>¡Una pista!</h2>
          <div className="feedback-clue-data">
            {attempt < 3 ?
              <p>Las fracciones equivalentes representan la misma cantidad aunque el numerador y el denominador sean diferentes.</p>
              :
              <p>Para encontrar una fracción equivalente debes multiplicar o dividir el numerador y el denominador de la fracción por el mismo número.</p>
            }
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