import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Question7 } from './Question7';
import { Question7Conclusion } from './Conclusion';
import { Question7Presentation } from './Presentation';

function Question7Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Question7Presentation goView={goView} />;
        case 1:
          return <Question7 goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <Question7Conclusion nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <section className="caster ai3-question-7">
      <Header goView={setActualView} actualView={7} />
      {renderView}
    </section>

  );
}

export default Question7Caster;
