import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useHistory } from 'react-router';
import Robot from "../../../assets/Riendo.png"
import saveDatainSheets from '../../../helpers/saveData';

export const SignOut = () => {
  let history = useHistory();

  const goView = () => {

    let appData = JSON.parse(localStorage.getItem('appData'));
    let userData = JSON.parse(localStorage.getItem('userData'));
    let combo = JSON.parse(localStorage.getItem('combo'));
    let dataOrganized = { ...appData, ...userData, Combo: combo.combo }

    console.log(dataOrganized)
    saveDatainSheets(dataOrganized).then(() => {
      localStorage.clear();
      history.push("/");
      console.log("listo")
    }
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