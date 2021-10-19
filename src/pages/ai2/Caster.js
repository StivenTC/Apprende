import React, { useEffect, useState } from 'react';
import { Launcher } from './Launcher';
import { Llamas } from './llamas/Llamas';
import { LlamasPresentation } from './llamas/Presentation';


function CasterAI2() {
  const [actualView, setActualView] = useState(2)
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
          return <Llamas goView={setActualView} userData={userData} />;
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
