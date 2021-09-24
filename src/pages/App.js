import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Apprende</h1>
        <h3>Bienvenido</h3>
        <Link to="/activities">
          <button>Empezar</button>
        </Link>
      </div>
    </div>

  );
}

export default App;
