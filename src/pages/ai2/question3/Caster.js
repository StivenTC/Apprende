import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Question3 } from './Question3';
import { Conclusion } from './Conclusion';
import { Presentation } from './Presentation';

function Question3Caster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <Presentation goView={goView}/>;
        case 1:
          return <Question3 goView={goView} setResult={setResult} nextActivity={setActualView}/>;
        case 2:
          return <Conclusion nextActivity={setActualView} />;
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

export default Question3Caster;
