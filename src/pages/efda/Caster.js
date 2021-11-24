import React, { useEffect, useState } from 'react';
import { Finish } from './Finish';
import { Launcher } from './Launcher';
import { Question1 } from './question-1/Question-1';
import { Question10 } from './question-10/Question-10';
import { Question11 } from './question-11/Question-11';
import { Question12 } from './question-12/Question-12';
import { Question2 } from './question-2/Question-2';
import { Question3 } from './question-3/Question3';
import { Question4 } from './question-4/Question-4';
import { Question5 } from './question-5/Question-5';
import { Question6 } from './question-6/Question-6';
import { Question7 } from './question-7/Question7';
import { Question8 } from './question-8/Question8';
import { Question9 } from './question-9/Question-9';

function CasterEFDA() {
  const [actualView, setActualView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [userData, saveUserData] = useState({})

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Launcher goView={setActualView} userData={userData} />;
        case 1:
          return <Question1 goView={setActualView} />;
        case 2:
          return <Question2 goView={setActualView} />;
        case 3:
          return <Question3 goView={setActualView} />;
        case 4:
          return <Question4 goView={setActualView} />;
        case 5:
          return <Question5 goView={setActualView} />;
        case 6:
          return <Question6 goView={setActualView} />;
        case 7:
          return <Question7 goView={setActualView} />;
        case 8:
          return <Question8 goView={setActualView} />;
        case 9:
          return <Question9 goView={setActualView} />;
        case 10:
          return <Question10 goView={setActualView} />;
        case 11:
          return <Question11 goView={setActualView} />;
        case 12:
          return <Question12 goView={setActualView} />;
        case 13:
          return <Finish goView={setActualView} />;
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

export default CasterEFDA;
