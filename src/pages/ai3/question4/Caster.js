import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Conclusion4 } from './Conclusion';
import { Presentation4 } from './Presentation';
import { Question4 } from './Question4';

function Question4Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Presentation4 goView={goView} />;
        case 1:
          return <Question4 goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <Conclusion4 nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={4} />
      {renderView}
    </>

  );
}

export default Question4Caster;
