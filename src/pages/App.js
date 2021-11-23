import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from "../assets/Apprende blanco.png";

function App() {
  let history = useHistory();
  // const combos = [
  //   {
  //     combo: "Combo 1",
  //     activities: [
  //       {
  //         name: "Exploración Fracciones",
  //         route: "/exploracion"
  //       },
  //       {
  //         name: "Fracciones equivalentes",
  //         route: "/infografia?fracciones=comparar"
  //       },
  //       {
  //         name: "Entrenamiento 1",
  //         route: "/actividades-interactivas"
  //       },
  //       {
  //         name: " ¿Cómo llegué tan lejos?",
  //         route: "/metacognicion"
  //       }
  //     ]
  //   },
  //   {
  //     combo: "Combo 2",
  //     activities: [
  //       {
  //         name: "Exploración Fracciones",
  //         route: "/exploracion"
  //       },
  //       {
  //         name: "Entrenamiento 1",
  //         route: "/actividades-interactivas"
  //       },
  //       {
  //         name: "Comparar fracciones",
  //         route: "/infografia?fracciones=comparar"
  //       },
  //       {
  //         name: "Entrenamiento 2",
  //         route: "/actividades-interactivas-2"
  //       },
  //     ]
  //   },
  //   {
  //     combo: "Combo 3",
  //     activities: [
  //       {
  //         name: "Video 1",
  //         route: "/video?media=exploracion"
  //       },
  //       {
  //         name: "Entrenamiento 1",
  //         route: "/actividades-interactivas"
  //       },
  //       {
  //         name: "Video 2",
  //         route: "/video?media=comparar"
  //       },
  //       {
  //         name: "Entrenamiento 2",
  //         route: "/actividades-interactivas-2"
  //       },
  //       {
  //         name: "Video 3",
  //         route: "/video?media=equivalente"
  //       },
  //     ]
  //   },
  //   {
  //     combo: "Combo 4",
  //     activities: [
  //       {
  //         name: "Evaluación formal",
  //         route: "/evaluacion-formal"
  //       },
  //       {
  //         name: "Entrenamiento 1",
  //         route: "/actividades-interactivas"
  //       },
  //       {
  //         name: "Entrenamiento 2",
  //         route: "/actividades-interactivas-2"
  //       },
  //       {
  //         name: "Entrenamiento 3",
  //         route: "/actividades-interactivas-3"
  //       },
  //       {
  //         name: "Video 3",
  //         route: "/video?media=equivalente"
  //       },
  //     ]
  //   },
  // ]

  const combos = [
    {
      combo: "Día 1 / Míércoles",
      activities: [
        {
          name: "1. ¿Qué tanto sabes de comparar fracciones?",
          route: "https://www.surveys.online/jfe/form/SV_b8wHHerVDfK9dEW"
        },
        {
          name: "break"
        },
        {
          name: "2. ¿Qué tanto sabes de fracciones?",
          route: "https://www.surveys.online/jfe/form/SV_24ukwgHNV2NYltc"
        },
        {
          name: "3. Exploración",
          route: "/exploracion"
        },
        {
          name: "4. Video 1",
          route: "/video?media=exploracion"
        },
        {
          name: "5. Infografia 1",
          route: "https://forms.gle/cCbNgCqT4yuzy2M26"
        },
        {
          name: "6. Entrenamiento 1",
          route: "/actividades-interactivas"
        }
      ]
    }
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
        {/* <img src={Logo} alt='Apprende' /> */}
        <h2>Agenda Mentu</h2>
        <h1>{actualCombo?.combo?.length > 1 ? actualCombo.combo : "Bienvenido"}</h1>
        {
          actualCombo.combo.length < 1 &&
          <p className="welcome-text">
            ¡Hola!<br /><br />
            <strong>¡Gracias por tu tiempo y actitud!</strong>
            <br />
            Te presentamos tu recorrido de aprendizaje en Mentu.
            <br /><br />
            Hemos creado diferentes actividades en donde podrás aprender y jugar a través de <strong>videos, retos y lecturas.</strong>
            <br /><br />
            Una vez termines cada actividad podrás avanzar a la siguiente y al final <strong>podremos evaluar tus logros.</strong>
          </p>
        }

        {
          actualCombo.combo.length > 1 ?
            actualCombo.activities.map((combo) =>
              combo.name !== "break" ?
                <Link key={combo.name} to={combo.route}>
                  <button className="go-btn">{combo.name}</button>
                </Link> :
                <p className="break-text">¡Toma un descanso!</p>
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
