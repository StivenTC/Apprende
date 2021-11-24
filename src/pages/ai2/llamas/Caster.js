import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Llamas } from './Llamas';
import { LlamasConclusion } from './Conclusion';
import { LlamasPresentation } from './Presentation';

function LlamasCaster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <LlamasPresentation goView={goView}/>;
        case 1:
          return <Llamas goView={goView} setResult={setResult} nextActivity={setActualView}/>;
        case 2:
          return <LlamasConclusion nextActivity={setActualView} />;
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

export default LlamasCaster;
