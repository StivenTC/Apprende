import React, { useEffect, useState } from 'react';
import { Launcher } from './Launcher';
import { Presentation } from './focus/Presentation';
import { Focus } from './focus/Focus';


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
          return <Focus goView={setActualView} saveUser={saveUserData} />;
        default:
          return <h1>jajaj</h1>;
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
