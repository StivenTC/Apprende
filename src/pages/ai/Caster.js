import React, { useEffect, useState } from 'react';
import { Launcher } from './Launcher';
import FocusCaster from './focus/Caster';
import SelectQuarterCaster from './selectQuarter/Caster';
import Question3Caster from './question3/Caster';
import RaindropsCaster from './raindrops/Caster';
import Question6Caster from './question6/Caster';
import Question7Caster from './question7/Caster';
import Question8Caster from './question8/Caster';
import Question9Caster from './question9/Caster';
import Question5Caster from './question-5/Caster';

function CasterAI() {
  const [actualView, setActualView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [userData, saveUserData] = useState({ complete: 0 })

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Launcher goView={setActualView} userData={userData} />;
        case 1:
          return <FocusCaster setActualView={setActualView} userData={userData}/>;
        case 2:
          return <SelectQuarterCaster setActualView={setActualView} userData={userData}/>;
        case 3:
          return <Question3Caster setActualView={setActualView} />;
        case 4:
          return <RaindropsCaster setActualView={setActualView} />;
        case 5:
          return <Question5Caster setActualView={setActualView} />;
        case 6:
          return <Question6Caster setActualView={setActualView} />;
        case 7:
          return <Question7Caster setActualView={setActualView} />;
        case 8:
          return <Question8Caster setActualView={setActualView} />;
        case 9:
          return <Question9Caster setActualView={setActualView} />;
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
