import React, { useEffect, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
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
  /*
    {
      combo: "Día 1 / Miércoles",
      activities: [
        {
          name: "1. ¿Qué tanto sabes de comparar fracciones?",
          route: "https://www.surveys.online/jfe/form/SV_b8wHHerVDfK9dEW" + `#${name.Nombre}.`,
          target: '_blank'
        },
        {
          name: "break"
        },
        {
          name: "2. Exploración",
          route: "/exploracion" + `#${name.Nombre}.`,
        },
        {
          name: "3. Video 1",
          route: "/video?media=exploracion" + `#${name.Nombre}.`,
        },
        {
          name: "4. Infografia 1",
          route: "https://forms.gle/cCbNgCqT4yuzy2M26" + `#${name.Nombre}.`,
          target: '_blank'
        },
        {
          name: "5. Entrenamiento 1",
          route: "/actividades-interactivas" + `#${name.Nombre}.`,
        },
        {
          name: "6. ¿Qué tanto sabes de fracciones?",
          route: "https://www.surveys.online/jfe/form/SV_24ukwgHNV2NYltc" + `#${name.Nombre}.`,
          target: '_blank'
        }
      ]
    },
  */

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

  const combos = [
    {
      combo: "Día 1 / Miércoles",
      activities: [
        {
          name: "1. ¿Qué tanto sabes de comparar fracciones?",
          route: "https://www.surveys.online/jfe/form/SV_b8wHHerVDfK9dEW" + `#${name.Nombre}.`,
          target: '_blank'
        },
        {
          name: "break"
        },
        {
          name: "2. Exploración",
          route: "/exploracion" + `#${name.Nombre}.`,
        },
        {
          name: "3. Video 1",
          route: "/video?media=exploracion" + `#${name.Nombre}.`,
        },
        {
          name: "4. Infografia 1",
          route: "https://forms.gle/cCbNgCqT4yuzy2M26" + `#${name.Nombre}.`,
          target: '_blank'
        },
        {
          name: "5. Entrenamiento 1",
          route: "/actividades-interactivas" + `#${name.Nombre}.`,
        },
        {
          name: "6. ¿Qué tanto sabes de fracciones?",
          route: "https://www.surveys.online/jfe/form/SV_24ukwgHNV2NYltc" + `#${name.Nombre}.`,
          target: '_blank'
        }
      ]
    },
    {
      combo: "Día 2 / Jueves",
      activities: [
        {
          name: "1. ¿Qué tanto sabes de operaciones?",
          route: "https://www.surveys.online/jfe/form/SV_3QaQ55TA1wOnI7c" + `#${name.Nombre}.`,
          target: '_blank'
        },
        {
          name: "2. Video 2",
          route: "/video?media=comparar?video=2"
        },
        {
          name: "3. Infografia 2",
          route: "https://forms.gle/uaMPYvHwEohhKHCq7" + `#${name.Nombre}.`,
          target: '_blank'
        },
        {
          name: "4. Entrenamiento 2",
          route: "/actividades-interactivas-2" + `#${name.Nombre}.`,
        },
        {
          name: "break"
        },
        {
          name: "6. Video 3",
          route: "/video?media=equivalente" + `#${name.Nombre}.`,
        },
        {
          name: "7. Infografía 3",
          route: "https://forms.gle/XidpCMtQZ3j4nFFx7" + `#${name.Nombre}.`,
          target: '_blank'
        },
        {
          name: "8. Entrenamiento 3",
          route: "/actividades-interactivas-3" + `#${name.Nombre}.`,
        }
      ]
    }
  ]
  useEffect(() => {
    if (name.length <= 0) {
      history.push("/registro");
    }
  }, [history, name.length])

  const selectCombo = (name) => {
    let currentCombo = combos.find(el => el.combo === name)
    localStorage.setItem("combo", JSON.stringify(currentCombo));
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
            Haremos diferentes actividades en donde podrás aprender y jugar a través de <strong>videos, retos</strong> y <strong>lecturas</strong>.
            <br /><br />
            Una vez termines cada actividad podrás avanzar a la siguiente y al final <strong>podremos evaluar tus logros</strong>
            <br /><br />
            Recuerda <strong>guardar la sesión</strong> cada vez que termines y antes de salir a descanso.
            <br /><br />
            A aprender!
          </p>
        }

        {
          actualCombo.combo.length > 1 ?
            actualCombo.activities.map((combo) =>
              combo.name !== "break" ?
                <a key={combo.name} href={combo.route} target={combo.target} className="link-activity">
                  <button className="go-btn">{combo.name}</button>
                </a> :
                <div>
                  {actualCombo.combo.includes("Jueves") && <a href="https://www.surveys.online/jfe/form/SV_4OV4STDPz3Nj3Qq" target={combo.target} className="link-activity">
                    <button className="go-btn">¡Danos tu opinión!</button>
                  </a>}
                  <p className="break-text">¡Toma un descanso!</p>
                </div>
            ) :
            combos.map((combo) =>
              <a key={combo.combo} className="link-activity">
                <button
                  onClick={() => selectCombo(combo.combo)}
                  className="go-btn">{combo.combo}</button>
              </a>
            )
        }
        {
          actualCombo.combo.length > 1 &&
          <button
            className="btn-next"
            onClick={() => history.push("/gracias")}>
            Guardar sesión
            <BiRightArrowAlt />
          </button>

        }
      </div>
    </div>

  );
}

export default App;
