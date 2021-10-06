/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../../components/layout/header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
export const SelectQuarter = ({ goView }) => {

  const FraccionA = () => {
    return <svg width="117" height="84" viewBox="0 0 117 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="37.6552" height="41" fill="#28D2EE" />
      <rect x="40.3447" width="34.9655" height="41" fill="#28D2EE" />
      <rect x="78" width="39" height="41" fill="#28D2EE" />
      <rect y="43" width="37.6552" height="41" fill="#28D2EE" />
      <rect x="40.3447" y="43" width="34.9655" height="41" fill="#D9D9ED" />
      <rect x="78" y="43" width="39" height="41" fill="#D9D9ED" />
    </svg>
  }
  const FraccionB = () => {
    return <svg width="117" height="84" viewBox="0 0 117 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="37.6552" height="41" fill="#28D2EE" />
      <rect x="40.3447" width="34.9655" height="41" fill="#28D2EE" />
      <rect x="78" width="39" height="41" fill="#28D2EE" />
      <rect y="43" width="37.6552" height="41" fill="#28D2EE" />
      <rect x="40.3447" y="43" width="34.9655" height="41" fill="#D9D9ED" />
      <rect x="78" y="43" width="39" height="41" fill="#D9D9ED" />
    </svg>
  }
  const FraccionC = () => {
    return <svg width="117" height="84" viewBox="0 0 117 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18.4546" height="41" fill="#28D2EE" />
      <rect x="19.7725" width="17.1364" height="41" fill="#28D2EE" />
      <rect x="38.2275" width="19.1136" height="41" fill="#28D2EE" />
      <rect x="58.6592" width="18.4546" height="41" fill="#28D2EE" />
      <rect x="78.6025" width="18.4546" height="41" fill="#28D2EE" />
      <rect x="98.5459" width="18.4546" height="41" fill="#28D2EE" />
      <rect y="43" width="18.4546" height="41" fill="#28D2EE" />
      <rect x="19.7725" y="43" width="17.1364" height="41" fill="#28D2EE" />
      <rect x="38.2275" y="43" width="19.1136" height="41" fill="#28D2EE" />
      <rect x="58.6592" y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="78.6025" y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="98.5459" y="43" width="18.4546" height="41" fill="#D9D9ED" />
    </svg>

  }
  const FraccionD = () => {
    return <svg width="117" height="84" viewBox="0 0 117 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18.4546" height="41" fill="#28D2EE" />
      <rect x="19.7725" width="17.1364" height="41" fill="#28D2EE" />
      <rect x="38.2275" width="19.1136" height="41" fill="#28D2EE" />
      <rect x="58.6592" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="78.6025" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="98.5459" width="18.4546" height="41" fill="#D9D9ED" />
      <rect y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="19.7725" y="43" width="17.1364" height="41" fill="#D9D9ED" />
      <rect x="38.2275" y="43" width="19.1136" height="41" fill="#D9D9ED" />
      <rect x="58.6592" y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="78.6025" y="43" width="18.4546" height="41" fill="#D9D9ED" />
      <rect x="98.5459" y="43" width="18.4546" height="41" fill="#D9D9ED" />
    </svg>

  }

  const nextView = () => {
  }
  const validate = () => {
    return false
  }
  const nextActivity = () => {

  }

  return (
    <div className="select-quarter">
      <Header goView={goView} actualView={2} />
      <div className="select-quarter-body">
        <p>Selecciona el gráfico que representa una <strong>fracción equivalente</strong> a la fracción que encuentras en la tarjeta:</p>
        <div className="scales-fractions"><span>3</span>
          <span>4</span>
        </div>
        <div className="select-quarter-list">
          <div className="select-quarter-card">
            <FraccionA />
          </div>
          <div className="select-quarter-card">
            <FraccionB />
          </div>
          <div className="select-quarter-card">
            <FraccionC />
          </div>
          <div className="select-quarter-card">
            <FraccionD />
          </div>
        </div>
        <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  )
}