import React, { useEffect, useState } from 'react';
import { Launcher } from './Launcher';
import { Focus } from './focus/Focus';
import { SelectQuarter } from './selectQuarter/SelectQuarter';
import { Question3 } from './question3/Question3';
import { Raindrops } from './raindrops/Raindrops';
import { Question6 } from './question6/Question6';
import { Question7 } from './question7/Question7';
import { Question8 } from './question8/Question8';
import { Question9 } from './question9/Question9';
import Question5 from './question-5/Caster';


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
          return <Focus setActualView={setActualView} />;
        case 2:
          return <SelectQuarter setActualView={setActualView} />;
        case 3:
          return <Question3 setActualView={setActualView} />;
        case 4:
          return <Raindrops setActualView={setActualView} />;
        case 5:
          return <Question5 setActualView={setActualView} />;
        case 6:
          return <Question6 setActualView={setActualView} />;
        case 7:
          return <Question7 setActualView={setActualView} />;
        case 8:
          return <Question8 setActualView={setActualView} />;
        case 9:
          return <Question9 setActualView={setActualView} />;
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
