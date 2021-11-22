import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Conclusion } from './Conclusion';
import { Question3 } from './Question3';

function Question3Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
        case 1:
          return <Question3 goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <Conclusion nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={3} />
      {renderView}
    </>

  );
}

export default Question3Caster;
