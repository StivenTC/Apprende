import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi"
import { Header } from "../../../components/layout/Header/Header";
import robot from "../../../assets/Saludo.png";
import llama from "../../../assets/llama-view.png";

export function AISortQuestion({ goView, userData }) {
  const [textArea, setTextArea] = useState("");
  const nextView = () => {
    let data = {
      'ENTRE2-Reto 3 - MI2': textArea,
    }
    if (textArea.length > 5) {
      saveActivity(data)
      goView(0)
    }
  }
  return (
    <div className="rain-drop-question">
      <Header goView={goView} actualView={10} />
      <div className="rain-drop-question-content">
        <img src={robot} alt="robot" />
        <p>{userData.aiSort ?
          "Cuéntale al Robot cómo llegaste a la respuesta correcta."
          :
          "¿Qué puedes hacer para encontrar la respuesta correcta?"
        }</p>
        <div className="rain-drop-question-answer">
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