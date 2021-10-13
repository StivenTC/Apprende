import React, { useEffect, useState } from 'react';
import { Launcher } from './Launcher';
import { QuestionText } from './questions/QuestionText';
import { QuestionOptions } from './questions/QuestionOptions';


function CasterMetacognicion() {
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
          return <QuestionText goView={setActualView} saveUser={saveUserData} />;
        case 2:
          return <QuestionOptions goView={setActualView} saveUser={saveUserData} userData={userData} />;
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

export default CasterMetacognicion;
