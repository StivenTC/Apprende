import React, { useEffect, useState } from 'react';
import { AIComparations } from './comparations/AIComparations';
import { AIConclusion } from './comparations/Conclusion';
import { AIComparationsPresentation } from './comparations/Presentation';
import { Launcher } from './Launcher';
import { LlamasConclusion } from './llamas/Conclusion';
import { Llamas } from './llamas/Llamas';
import { LlamasPresentation } from './llamas/Presentation';


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
          return <LlamasPresentation goView={setActualView} userData={userData} />;
        case 2:
          return <Llamas goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 3:
          return <LlamasConclusion goView={setActualView} />;
        case 4:
          return <AIComparationsPresentation goView={setActualView} userData={userData} />;
        case 5:
          return <AIComparations goView={setActualView} userData={userData} saveUser={saveUserData} />;
        case 6:
          return <AIConclusion goView={setActualView} />;
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
