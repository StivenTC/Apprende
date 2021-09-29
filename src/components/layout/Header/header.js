import { IoArrowBackOutline } from "react-icons/io5";

export const Header = ({ goView, actualView }) => {

  const goBack = () => {
    let go = actualView > 0 ? actualView - 1 : 0
    if (actualView === 3) {
      go = 1
    }
    goView(go)
  }

  return (
    <header>
      <div className="header-content">
        <IoArrowBackOutline type="button" onClick={goBack} />
        <div type="button" onClick={() => goView(0)}>Inicio</div>
      </div>
    </header>
  )
}