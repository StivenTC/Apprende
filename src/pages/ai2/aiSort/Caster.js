import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { AISort } from './AISort';
import { AISortConclusion } from './Conclusion';
import { AISortPresentation } from './Presentation';
import { AISortQuestion } from './Question';

function AISortCaster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <AISortPresentation goView={goView}/>;
        case 1:
          return <AISort goView={goView} setResult={setResult} />;
        case 2:
          return <AISortConclusion goView={goView} />;
        case 3:
          return <AISortQuestion nextActivity={setActualView} result={result} />;
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

export default AISortCaster;
