import React, { useEffect, useState } from 'react';
import { Launcher } from './Launcher';
import LlamasCaster from './llamas/Caster';
import Question2Caster from './question2/Caster';
import Question3Caster from './question3/Caster';
import ComparationsCaster from './comparations/Caster';
import Question5Caster from './question5/Caster';
import Question7Caster from './question7/Caster';
import AISortCaster from './aiSort/Caster';

function CasterAI2() {
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
          return <LlamasCaster setActualView={setActualView} userData={userData} />;
        case 2:
          return <Question2Caster setActualView={setActualView} userData={userData} />;
        case 3:
          return <Question3Caster setActualView={setActualView} userData={userData} />;
        case 4:
          return <ComparationsCaster setActualView={setActualView} userData={userData} />;
        case 5:
          return <Question5Caster setActualView={setActualView} userData={userData} />;
        case 6:
          return <AISortCaster setActualView={setActualView} userData={userData} />;
        case 7:
          return <Question7Caster setActualView={setActualView} userData={userData} />;
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

export default CasterAI2;
