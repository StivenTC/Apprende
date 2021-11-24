import React, { useEffect, useState } from 'react';

export const Navigation = ({ question, userData, goView, saveUserData, Presentation, Question, Conclusion }) => {
	const [actualView, setActualView] = useState(0)
  const [renderView, setRenderView] = useState()

	useEffect(() => {
    const changeView = (view) => {
      switch (view) {
        case 0:
          return <Presentation goView={setActualView}/>;
        case 1:
          return <Question goView={setActualView} saveUser={saveUserData} userData={userData}/>;
        case 2:
          return <Conclusion goView={setActualView} nextQuestion={goView}/>;
        default:
          return <h1>Error</h1>;
      }
    }

    setRenderView(changeView(actualView))

  }, [actualView, userData, goView, saveUserData])
	
  return (
    <div className="caster">
      {renderView}
    </div>
  );
}