import { IoArrowBackOutline } from "react-icons/io5";
import { useHistory } from "react-router";

export const Header = ({ goView, actualView }) => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <header>
      <div className="header-content">
        <IoArrowBackOutline type="button" onClick={() => goView(actualView - 1)} />
        <div type="button" onClick={goBack}>Inicio</div>
      </div>
    </header>
  )
}