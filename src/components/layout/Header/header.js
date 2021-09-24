import { IoArrowBackOutline } from "react-icons/io5";

export const Header = ({ goView }) => {

  return (
    <header>
      <div className="header-content">
        <IoArrowBackOutline />
        <div onClick={() => goView(0)}>Inicio</div>
      </div>
    </header>
  )
}