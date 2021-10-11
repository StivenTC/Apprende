import React, { useEffect, useState } from 'react';
import { Register } from '../auth/register/Register';
import { CompareCake } from './compareCake/CompareCake';
import { CompareCharts } from './compareCharts/CompareCharts';
import { CompareSquares } from './compareSquare/CompareSquare';
import { DragCake } from './dragCake/DragCake';
import { Exploration } from './exploration/Exploration';
import { Exploration2 } from './exploration2/Exploration2';
import { FillSquares } from './fillSquares/FillSquares';
import { Launcher } from './Launcher';
import { Presentation } from './presentation/Presentation';
import { Scales } from './scales/Scales';

function Caster() {
  const [actualView, setActualView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [userData, saveUserData] = useState({ complete: 0 })
  //const [examen, setExam] = useState()

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        case 0:
          return <Launcher goView={setActualView} userData={userData} />;
        case 1:
          return <Exploration goView={setActualView} saveUser={saveUserData} />;
        case 2:
          return <Exploration2 goView={setActualView} userData={userData} />;
        case 3:
          return <Scales goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 4:
          return <DragCake goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 5:
          return <CompareCake goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 6:
          return <FillSquares goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 7:
          return <CompareSquares goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 8:
          return <CompareCharts goView={setActualView} userData={userData} saveUser={saveUserData} />;
        default:
          return <Presentation goView={setActualView} />;
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
