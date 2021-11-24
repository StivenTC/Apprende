import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi"
import { Header } from "../../../components/layout/Header/Header";
import robot from "../../../assets/Saludo.png";
import llama from "../../../assets/llama-view.png";
import saveActivity from "../../../helpers/saveActivity";

export function BalloonsQuestion({ nextActivity, result }) {
  const [textArea, setTextArea] = useState("");

  const nextView = () => {
    let data = {
      'ENTRE1-Reto 5 - M1': textArea,
    }
    if (textArea.length > 5) {
      saveActivity(data)
      nextActivity(6)
    }
  }
  return (
    <div className="balloons-question">
      <div className="balloons-question-content">
        <img src={robot} alt="robot" />
        <p>{result ?
          "Cuéntale al Robot cómo llegaste a la respuesta correcta."
          :
          "¿Qué puedes hacer para encontrar la respuesta correcta?"
        }</p>
        <div className="balloons-question-answer">
          <textarea placeholder="Respuesta:" rows="5" value={textArea} onChange={(e) => setTextArea(e.target.value)} maxLength="300" />
          {textArea.length > 250 && <span>{textArea.length}/300</span>}
        </div>
        <button className={`btn-next ${textArea.length > 5 ? "" : "disabled"}`} onClick={() => nextView()}>
          ¡Siguiente!
          <BiRightArrowAlt />
        </button>
      </div>
      <img src={llama} alt="robot" className="llama-view" />
    </div>
  );
}