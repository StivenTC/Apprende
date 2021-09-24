import React, { useEffect, useState } from 'react';
import { Register } from '../register/Register';
import { Exploration } from './exploration/Exploration';
import { Launcher } from './Launcher';

function Caster() {
  const [actualView, setActualView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [userData, saveUserData] = useState({})
  //const [examen, setExam] = useState()

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        case 0:
          return userData ? <Launcher goView={setActualView} /> : <Register saveUser={saveUserData} />;
        case 1:
          return <Exploration goView={setActualView} />;
        default:
          return 'foo';
      }
    }

    setRenderView(changeView(actualView))

  }, [actualView, userData])


  return (
    <div className="caster">
      {renderView}
    </div>

  );
}

export default Caster;
