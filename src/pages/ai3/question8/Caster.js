import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Question8 } from './Question8';
import { Question8Conclusion } from './Conclusion';
import { Question8Presentation } from './Presentation';

function Question8Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Question8Presentation goView={goView} />;
        case 1:
          return <Question8 goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <Question8Conclusion nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <section className="caster ai3-question-7 ai3-question-8">
      <Header goView={setActualView} actualView={8} />
      {renderView}
    </section>

  );
}

export default Question8Caster;
