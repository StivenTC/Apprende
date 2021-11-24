import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { AIComparations } from './AIComparations';
import { AIConclusion } from './Conclusion';
import { AIComparationsPresentation } from './Presentation';

function ComparationsCaster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <AIComparationsPresentation goView={goView} />;
        case 1:
          return <AIComparations goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <AIConclusion nextActivity={setActualView} />;
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

export default ComparationsCaster;
