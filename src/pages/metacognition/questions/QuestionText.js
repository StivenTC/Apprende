import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Header } from "../../../components/layout/Header/Header";

export function QuestionText({ goView }) {
  const [actualView, setActualView] = useState(0)
  const [textArea, setTextArea] = useState("");
  const [textArea2, setTextArea2] = useState("");

  const questions = [
    {
      quest: "<strong>¿Qué aprendiste con estas actividades?<br/>Escribe tus 2 aprendizajes más grandes  </strong>",
      fields: ["Aprendizaje 1", "Aprendizaje 2"]
    },
    {
      quest: "<strong>Escribe un ejemplo de cómo podrías utilizar lo que sabes sobre comparar fracciones y fracciones equivalentes en un ejemplo de tu vida.</strong>",
      fields: ["Respuesta", ""]
    }
  ]
  const validate = () => {
    let r = false
    if (!actualView) {
      r = (textArea.length > 5 && textArea2.length > 5)
    } else {
      r = textArea.length > 5
    }
    return r
  }

  const nextView = () => {
    if (validate) {
      if (actualView) {
        goView(2)
      } else {
        setActualView(1)
        setTextArea("")
      }
    }
  }
  return (
    <div className="metacognition">
      <Header goView={goView} actualView={2} />
      <div className="question-text">
        <div className="question-text-header">
          <h2>Reflexión</h2>
          <p dangerouslySetInnerHTML={{ __html: questions[actualView].quest }} />
        </div>
        <div className="question-text-activity">
          <div className="question-answer">
            <textarea placeholder={questions[actualView].fields[0]}
              rows={actualView ? 5 : 3}
              value={textArea} onChange={(e) => setTextArea(e.target.value)} maxLength="300" />
            {textArea.length > 250 && <span>{textArea.length}/300</span>}
          </div>
          {actualView === 0 && <div className="conclusion-answer">
            <div className="question-answer">
              <textarea placeholder={questions[actualView].fields[1]} rows="3" value={textArea2} onChange={(e) => setTextArea2(e.target.value)} maxLength="300" />
              {textArea2.length > 250 && <span>{textArea2.length}/300</span>}
            </div>
          </div>}
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => nextView()}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}