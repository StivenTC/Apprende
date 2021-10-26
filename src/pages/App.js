import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from "../assets/Apprende blanco.png";

function App() {
  let history = useHistory();
  const combos = [
    {
      combo: "Combo 1",
      activities: [
        {
          name: "Exploración Fracciones",
          route: "/exploracion"
        },
        {
          name: "Fracciones equivalentes",
          route: "/infografia?fracciones=equivalentes"
        },
        {
          name: "Entrenamiento 1",
          route: "/actividades-interactivas"
        },
        {
          name: " ¿Cómo llegué tan lejos?",
          route: "/metacognicion"
        }
      ]
    },
    {
      combo: "Combo 2",
      activities: [
        {
          name: "Exploración Fracciones",
          route: "/exploracion"
        },
        {
          name: "Entrenamiento 1",
          route: "/actividades-interactivas"
        },
        {
          name: "Comparar fracciones",
          route: "/infografia?fracciones=equivalentes"
        },
        {
          name: "Entrenamiento 2",
          route: "/actividades-interactivas-2"
        },
      ]
    },
    {
      combo: "Combo 3",
      activities: [
        {
          name: "Video 1",
          route: "/video?media=exploracion"
        },
        {
          name: "Entrenamiento 1",
          route: "/actividades-interactivas"
        },
        {
          name: "Video 2",
          route: "/video?media=comparar"
        },
        {
          name: "Entrenamiento 2",
          route: "/actividades-interactivas-2"
        }
      ]
    },
  ]

  const [name] = useState(() => {
    const lsData = "userData";
    // getting stored value
    const saved = localStorage.getItem(lsData);
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [actualCombo, setActualCombo] = useState(() => {
    const lsData = "combo";
    // getting stored value
    const saved = localStorage.getItem(lsData);
    const initialValue = JSON.parse(saved);
    return initialValue || { combo: "" };
  });

  useEffect(() => {
    if (name.length <= 0) {
      history.push("/registro");
    }
  }, [history, name.length])

  const selectCombo = (name) => {
    let currentCombo = combos.find(el => el.combo === name)
    localStorage.setItem("combo", JSON.stringify(currentCombo));
    console.log(currentCombo)
    setActualCombo(currentCombo)
  }
  console.log(actualCombo)
  return (
    <div className="App">
      <div>
        <img src={Logo} alt='Apprende' />
        <h1>{actualCombo?.combo?.length > 1 ? actualCombo.combo : "Bienvenido"}</h1>
        {
          actualCombo.combo.length > 1 ?
            actualCombo.activities.map((combo) =>
              <Link key={combo.name} to={combo.route}>
                <button className="go-btn">{combo.name}</button>
              </Link>
            ) :
            combos.map((combo) =>
              <button
                onClick={() => selectCombo(combo.combo)}
                key={combo.combo}
                className="go-btn">{combo.combo}</button>
            )
        }
      </div>
    </div>

  );
}

export default App;
