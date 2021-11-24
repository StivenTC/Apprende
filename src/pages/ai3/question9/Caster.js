import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Question9Conclusion } from './Conclusion';
import { Question9Presentation } from './Presentation';
import { Question9 } from './Question9';

function Question9Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Question9Presentation goView={goView} userData={userData} />;
        case 1:
          return <Question9 goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <Question9Conclusion nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <section className="caster ai3-question-7 ai3-question-9">
      <Header goView={setActualView} actualView={9} />
      {renderView}
    </section>
  );
}

export default Question9Caster;
