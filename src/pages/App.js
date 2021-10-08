import React from 'react';
import { Link } from 'react-router-dom';

function App() {
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
        <Link to="/video-fraccion">
          <button className="go-btn">Video fracciones equivalentes</button>
        </Link>
      </div>
    </div>

  );
}

export default App;
