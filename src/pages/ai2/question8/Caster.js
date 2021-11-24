import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Question8Conclusion } from './Conclusion';
import { Question8Presentation } from './Presentation';
import { Question8Question } from './Question';
import { Question8 } from './Question8';

function Question8Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(21212)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Question8Presentation goView={goView} />;
        case 1:
          return <Question8 goView={goView} setResult={setResult} nextQuestion={setActualView} />;
        case 2:
          return <Question8Conclusion goView={setActualView} />;
        case 3:
          return <Question8Question nextActivity={setActualView} result={result} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={8} />
      {renderView}
    </>

  );
}

export default Question8Caster;
