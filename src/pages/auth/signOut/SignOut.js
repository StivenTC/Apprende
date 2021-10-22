import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useHistory } from 'react-router';
import Robot from "../../../assets/Riendo.png"

export const SignOut = () => {
  let history = useHistory();

  const goView = () => {
    localStorage.removeItem("userData");
    history.push("/");
  }

  return (
    <div className="sign-out">
      <div className="presentation">
        <div>
          <img src={Robot} alt="Robot" />
          <h2>¡Gracias!</h2>
        </div>

        <button
          className="btn-next"
          onClick={() => goView()}>
          Reiniciar sesión
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
}