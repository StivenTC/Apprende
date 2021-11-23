import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Question5Conclusion } from './Conclusion';
import { Question5Presentation } from './Presentation';
import { Question5 } from './Question5';

function Question5Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(21212)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Question5Presentation goView={goView} />;
        case 1:
          return <Question5 goView={goView} setResult={setResult} nextQuestion={setActualView} />;
        case 2:
          return <Question5Conclusion goView={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={5} />
      {renderView}
    </>

  );
}

export default Question5Caster;
