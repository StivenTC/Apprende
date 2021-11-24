import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { RaindropConclusion } from './Conclusion';
import { RaindropPresentation } from './Presentation';
import { Raindrops } from './Raindrops';
import { RaindropQuestion } from './Question';

function RaindropsCaster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <RaindropPresentation goView={goView} userData={userData} />;
        case 1:
          return <Raindrops goView={goView} setResult={setResult} />;
        case 2:
          return <RaindropConclusion goView={goView} />;
        case 3:
          return <RaindropQuestion nextActivity={setActualView} result={result}/>;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={4} />
      {renderView}
    </>

  );
}

export default RaindropsCaster;
