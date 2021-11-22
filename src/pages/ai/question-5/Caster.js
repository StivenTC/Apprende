import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { Ballons } from './Balloons';
import { BalloonsConclusion } from './Conclusion';
import { BalloonsPresentation } from './Presentation';
import { BalloonsQuestion } from './Question';

function Question5({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <BalloonsPresentation goView={goView} userData={userData} />;
        case 1:
          return <Ballons goView={goView} setResult={setResult} />;
        case 2:
          return <BalloonsConclusion goView={goView} />;
        case 3:
          return <BalloonsQuestion nextActivity={setActualView} result={result} />;
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

export default Question5;
