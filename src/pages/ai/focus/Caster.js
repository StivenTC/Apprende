import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { FocusConclusion } from './Conclusion';
import { Presentation } from './Presentation';
import { Focus } from './Focus';

function FocusCaster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Presentation goView={goView} userData={userData} />;
        case 1:
          return <Focus nextActivity={setActualView} goView={goView} setResult={setResult} />;
        case 2:
          return <FocusConclusion nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={1} />
      {renderView}
    </>

  );
}

export default FocusCaster;
