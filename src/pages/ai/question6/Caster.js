import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Conclusion } from './Conclusion';
import { Question6 } from './Question6';

function Question6Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
        case 1:
          return <Question6 goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <Conclusion nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={6} />
      {renderView}
    </>

  );
}

export default Question6Caster;
