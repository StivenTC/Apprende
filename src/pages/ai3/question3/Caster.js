import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Conclusion3 } from './Conclusion';
import { Question3 } from './AISort';
import { Presentation3 } from './Presentation';
import { AISortQuestion } from './Question';

function Question3Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Presentation3 goView={goView} />;
        case 1:
          return <Question3 goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <Conclusion3 goView={setActualView} />;
        case 3:
          return <AISortQuestion nextActivity={setActualView} result={result} />;
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
