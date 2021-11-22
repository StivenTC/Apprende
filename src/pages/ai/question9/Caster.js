import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Conclusion } from './Conclusion';
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
        case 1:
          return <Question9 goView={goView} setResult={setResult} nextActivity={setActualView}/>;
        case 2:
          return <Conclusion goView={goView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={9} />
      {renderView}
    </>

  );
}

export default Question9Caster;
