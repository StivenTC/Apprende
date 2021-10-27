import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();

  const [name] = useState(() => {
    const lsData = "userData";
    // getting stored value
    const saved = localStorage.getItem(lsData);
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    if (name.length <= 0) {
      history.push("/registro");
    }
  }, [history, name.length])

  return (
    <div className="App">
      <div>
        <h1>Apprende</h1>
        <h3>Bienvenido</h3>
        <Link to="/exploracion">
          <button className="go-btn">Exploración</button>
        </Link>
        <Link to="/actividades-interactivas">
          <button className="go-btn">Actividades interactivas</button>
        </Link>
        <Link to="/metacognicion">
          <button className="go-btn">Metacognición</button>
        </Link>
        <Link to="/video-fraccion">
          <button className="go-btn">Video fracciones equivalentes</button>
        </Link>
      </div>
    </div>

  );
}

export default App;
