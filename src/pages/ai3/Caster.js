import React, { useEffect, useState } from 'react';
import { Launcher } from './Launcher';
import { Conclusion1 } from './question1/Conclusion';
import { Presentation2 } from './question2/Presentation';
import Question1Caster from './question1/Caster';
import Question2Caster from './question2/Caster';
import Question3Caster from './question3/Caster';
import Question4Caster from './question4/Caster';
import Question5Caster from './question5/Caster';
import Question6Caster from './question6/Caster';
import { Header } from '../../components/layout/Header/Header';
import Question7Caster from './question7/Caster';
import Question8Caster from './question8/Caster';

function CasterAI3() {
  const [actualView, setActualView] = useState(8)
  const [renderView, setRenderView] = useState(0)
  const [userData, saveUserData] = useState({ complete: 0 })

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Launcher goView={setActualView} userData={userData} />;
        case 1:
          return <Question1Caster setActualView={setActualView} userData={userData} />;
        case 2:
          return <Question2Caster setActualView={setActualView} userData={userData} />;
        case 3:
          return <Question3Caster setActualView={setActualView} userData={userData} />;
        case 4:
          return <Question4Caster setActualView={setActualView} userData={userData} />;
        case 5:
          return <Question5Caster setActualView={setActualView} userData={userData} />;
        case 6:
          return <Question6Caster setActualView={setActualView} userData={userData} />;
        case 7:
          return <Question7Caster setActualView={setActualView} userData={userData} />;
        case 8:
          return <Question8Caster setActualView={setActualView} userData={userData} />;
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

export default CasterAI3;
