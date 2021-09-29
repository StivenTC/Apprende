import { BiRightArrowAlt } from "react-icons/bi";

export const Presentation = ({ goView }) => {

  return (
    <div className="presentation">
      <h1>Actividad 2</h1>
      <p>Ubica cada una de las 4 fracciones representadas anteriormente en las gráficas,  en una de las rectas numéricas que aparecen abajo. Identifica cuál recta  es la que mejor que te permite representar cada fracción.
        <br />
        <br />
        <strong>Nota: cada recta corresponde mejor a una fracción.</strong>
      </p>
      <button
        className="btn-next"
        onClick={() => goView(3)}>
        ¡Vamos!
        <BiRightArrowAlt />
      </button>
    </div >
  )
}