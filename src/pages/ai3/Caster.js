import React, { useEffect, useState } from 'react';
import { Question2 } from '../efda/question-2/Question-2';
import { Launcher } from './Launcher';
import { Conclusion1 } from './question1/Conclusion';
import { Presentation1 } from './question1/Presentation';
import { Question1 } from './question1/Question1';
import { Conclusion2 } from './question2/Conclusion';
import { Presentation2 } from './question2/Presentation';
import { Question3 } from './question3/AISort';
import { Conclusion3 } from './question3/Conclusion';
import { Presentation3 } from './question3/Presentation';
import { Conclusion4 } from './question4/Conclusion';
import { Presentation4 } from './question4/Presentation';
import { Question4 } from './question4/Question4';


function CasterAI3() {
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
          return <Presentation1 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 2:
          return <Question1 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 3:
          return <Conclusion1 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 4:
          return <Presentation2 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 5:
          return <Question2 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 6:
          return <Conclusion2 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 7:
          return <Presentation3 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 8:
          return <Question3 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 9:
          return <Conclusion3 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 10:
          return <Presentation4 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 11:
          return <Question4 goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 12:
          return <Conclusion4 goView={setActualView} userData={userData} saveUser={saveUserData} />;
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
