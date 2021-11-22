import React, { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useHistory } from 'react-router';
import Robot from "../../../assets/Riendo.png"
import saveDatainSheets from '../../../helpers/saveData';

export const SignOut = () => {
  const [savingData, setSavingData] = useState(false);
  let history = useHistory();

  const goView = () => {
    setSavingData(true)
    let appData = JSON.parse(localStorage.getItem('appData'));
    let userData = JSON.parse(localStorage.getItem('userData'));
    let combo = JSON.parse(localStorage.getItem('combo')) || {};
    let dataOrganized = { ...appData, ...userData, Combo: combo.combo }

    saveDatainSheets(dataOrganized).then(() => {
      localStorage.clear();
      history.push("/");
      setSavingData(false)
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

        {savingData ?
          <h2>Guardando...</h2> :
          <button
            className="btn-next"
            onClick={() => goView()}>
            Reiniciar sesión
            <BiRightArrowAlt />
          </button>
        }
      </div>
    </div>
  );
}