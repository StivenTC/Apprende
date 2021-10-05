import { BiRightArrowAlt } from "react-icons/bi";
import Robot from "../../../assets/robot.svg"
export const FeedbackCorrect = ({ goView }) => {

  return (
    <div className="feedback">
      <div className="feedback-correct">
        <div className="feedback-correct-content">
          <img src={Robot} alt="Robot" />
          <h2>Muy bien</h2>
        </div>

        <button
          className="btn-next"
          onClick={() => goView(4)}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  )
}