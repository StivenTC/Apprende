import React, { useEffect, useState } from 'react';
import { Launcher } from './Launcher';
import { Presentation } from './focus/Presentation';
import { Focus } from './focus/Focus';
import { FocusConclusion } from './focus/Conclusion';
import { SelectQuarterPresentation } from './selectQuarter/Presentation';
import { SelectQuarter } from './selectQuarter/SelectQuarter';
import { SelectQuarterConclusion } from './selectQuarter/Conclusion';
import { RaindropPresentation } from './raindrops/Presentation';
import { Raindrops } from './raindrops/Raindrops';
import { RaindropConclusion } from './raindrops/Conclusion';
import { RaindropQuestion } from './raindrops/Question';


function CasterAI() {
  const [actualView, setActualView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [userData, saveUserData] = useState({ complete: 0 })

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        case 0:
          return <Launcher goView={setActualView} userData={userData} />;
        case 1:
          return <Presentation goView={setActualView} saveUser={saveUserData} />;
        case 2:
          return <Focus goView={setActualView} saveUser={saveUserData} userData={userData} />;
        case 3:
          return <FocusConclusion goView={setActualView} saveUser={saveUserData} />;
        case 4:
          return <SelectQuarterPresentation goView={setActualView} saveUser={saveUserData} />;
        case 5:
          return <SelectQuarter goView={setActualView} saveUser={saveUserData} userData={userData} />;
        case 6:
          return <SelectQuarterConclusion goView={setActualView} saveUser={saveUserData} />;
        case 7:
          return <RaindropPresentation goView={setActualView} saveUser={saveUserData} />;
        case 8:
          return <Raindrops goView={setActualView} saveUser={saveUserData} userData={userData} />;
        case 9:
          return <RaindropConclusion goView={setActualView} saveUser={saveUserData} />;
        case 10:
          return <RaindropQuestion goView={setActualView} userData={userData} />;
        default:
          return <h1>Gotas</h1>;
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

export default CasterAI;
