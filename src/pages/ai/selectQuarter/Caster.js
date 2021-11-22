import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { SelectQuarterConclusion } from './Conclusion';
import { SelectQuarterPresentation } from './Presentation';
import { SelectQuarter } from './SelectQuarter';

function SelectQuarterCaster({ setActualView, saveUserData, userData }) {
  const [actualView, goView] = useState(0)
  const [renderView, setRenderView] = useState(0)
  const [result, setResult] = useState(false)

  useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        default:
        case 0:
          return <SelectQuarterPresentation goView={goView} userData={userData} />;
        case 1:
          return <SelectQuarter goView={goView} setResult={setResult} nextActivity={setActualView} />;
        case 2:
          return <SelectQuarterConclusion nextActivity={setActualView} />;
      }
    }
    setRenderView(changeView(actualView))
  }, [actualView, userData])

  return (
    <>
      <Header goView={setActualView} actualView={2} />
      {renderView}
    </>

  );
}

export default SelectQuarterCaster;
