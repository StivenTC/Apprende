import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useHistory } from 'react-router';
import Robot from "../../../assets/Riendo.png"
import saveDatainSheets from '../../../helpers/saveData';

export const SignOut = () => {
  let history = useHistory();
  let dataR = {
    "Nombre": "perro",
    "Edad": "22",
    "Colegio": "Unidad Pedagógica",
    "Curso": "22"
  }
  const goView = () => {
    //localStorage.clear();
    //history.push("/");
    saveDatainSheets(dataR).then(
      console.log('ñistoo')
    )
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