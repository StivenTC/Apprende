import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Conclusion1 } from './Conclusion';
import { Question1 } from './Question1';
import { Presentation1 } from './Presentation';

function Question1Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Presentation1 goView={goView} />;
        case 1:
          return <Question1 goView={goView} nextActivity={setActualView} setResult={setResult} />;
        case 2:
          return <Conclusion1 nextActivity={setActualView} />;
      }
    }
    console.log('view:::::::', actualView);
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={1} />
      {renderView}
    </>

  );
}

export default Question1Caster;
