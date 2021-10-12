import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi"
import { Header } from "../../../components/layout/Header/Header";
import robot from "../../../assets/Saludo.png";
import llama from "../../../assets/llama-view.png";

export function RaindropQuestion({ goView, userData }) {
  const [textArea, setTextArea] = useState("");

  return (
    <div className="rain-drop-question">
      <Header goView={goView} actualView={10} />
      <div className="rain-drop-question-content">
        <img src={robot} alt="robot" />
        <p>{userData.rainDrop ?
          "Cuéntale al Robot cómo llegaste a la respuesta correcta."
          :
          "¿Qué puedes hacer para encontrar la respuesta correcta?"
        }</p>
        <div className="rain-drop-question-answer">
          <textarea placeholder="Respuesta:" rows="5" value={textArea} onChange={(e) => setTextArea(e.target.value)} maxLength="300" />
          {textArea.length > 250 && <span>{textArea.length}/300</span>}
        </div>
        <button
          className="btn-next"
          onClick={() => goView(0)}>
          ¡Siguiente!
          <BiRightArrowAlt />
        </button>
      </div>
      <img src={llama} alt="robot" className="llama-view" />
    </div>
  );
}