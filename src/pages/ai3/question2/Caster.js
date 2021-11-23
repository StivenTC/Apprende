import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Conclusion2 } from './Conclusion';
import { Question2 } from './Question2';
import { Presentation2 } from './Presentation';

function Question2Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Presentation2 goView={goView} />;
        case 1:
          return <Question2 goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <Conclusion2 nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={2} />
      {renderView}
    </>

  );
}

export default Question2Caster;
