import React, { useState } from "react";
import { Header } from "../../../components/layout/Header/Header";
import { BiRightArrowAlt } from "react-icons/bi";
import templateBackground from "../../../assets/background_pregunta8.png";
import { PresentationTemplate } from "../template/PresentationTemplate";
import saveActivity from "../../../helpers/saveActivity";

export const Question8 = ({ goView }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showView, setView] = useState(true);

  const questionTemplate = {
    id: "EFDA-8",
    title: "Pregunta 8",
    description: 'Solo las tablas de las posiciones <span class="color-blue">6/7</span>, <span class="color-blue">5/7</span> y <span class="color-blue">2/7</span> resistirán tu peso. <span class="text-bold">Debes seleccionar estas tablas</span> para ir saltando y lograr cruzar.',
    initialPos: {
      top: 0
    },
    prefix: "escalon",
    numberImages: 7,
    submit: {
      label: "Enviar",
    },
    delta: 13,
    styles: [
      {
        left: 0
      },
      {
        left: -35
      },
      {
        left: -55
      },
      {
        left: -65
      },
      {
        left: -90
      },
      {
        left: -120
      },
      {
        left: -145
      }
    ]
  };
  const presentation = {
    backgroundImage: templateBackground,
    title: 'Pregunta 8',
    description: { value: 'Tienes que cruzar este puente y para eso Shaia te da las siguientes instrucciones: solo las tablas de las posiciones <strong>6/7, 5/7 y 2/7</strong> resistirán tu peso. <strong>Debes seleccionar estas tablas</strong> para ir saltando y lograr cruzar.' },
    submit: {
      label: '¡Vamos!'
    }
  };
  let countTemp = 1;
  const arrayPositions = Array.from({ length: questionTemplate.numberImages }, (_, index) => index + 1);

  const validate = () => {
    return selectedOptions.length >= 3;
  };

  const getStylePosition = (pos) => {
    let top = 0;
    const posForDecrese = Math.ceil(questionTemplate.numberImages / 2);
    if (pos < posForDecrese) {
      top = questionTemplate.initialPos.top + (pos * questionTemplate.delta);
    } else {
      top = questionTemplate.initialPos.top + ((pos - (2 * countTemp)) * questionTemplate.delta);
      countTemp++;
    }

    return {
      top,
      ...questionTemplate.styles[pos],
    }
  };

  const selectTable = (pos) => {
    if (selectedOptions.includes(pos)) {
      setSelectedOptions((prevState) => prevState.filter((prevPos, i) => prevPos !== pos));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions((prevState) => [...prevState, pos]);
    }
  };

  const getUrlImage = (pos) => {
    const imageTemplateUrl = (sufix) => `/images/${questionTemplate.prefix}${pos}_${sufix}.png`;

    return selectedOptions.includes(pos) ?
      imageTemplateUrl('on') :
      imageTemplateUrl('off');
  };

  const nextActivity = () => {
    let data = {
      [questionTemplate.id]: selectedOptions.sort(),
    }

    if (validate()) {
      console.log(data)
      saveActivity(data)
      goView(9)
    }
  }

  return (
    <section className="efda">
      <Header goView={goView} actualView={7} />
      {showView ?
        <PresentationTemplate goView={setView} presentation={presentation} />
        :
        <div className="efda-bridge-container">
          <div className="efda-bridge-header">
            <strong>{questionTemplate.title}</strong>
            <p dangerouslySetInnerHTML={{ __html: questionTemplate.description }} />
          </div>
          <div className="efda-bridge-wrapper">
            <div className="efda-bridge-options" style={{ display: "flex" }}>
              <img className="efda-bridge-person" src="/images/persona.png" alt="" />
              {
                arrayPositions.map((pos, index) =>
                  <img
                    key={`image${pos}`}
                    className="efda-bridge-table"
                    src={getUrlImage(pos)}
                    style={getStylePosition(index)}
                    onClick={() => selectTable(pos)}
                    alt="" />
                )
              }
              <div className="efda-bridge-line1">
                <img src="/images/line.png" style={{ height: 50 }} alt="" />
                <div className="efda-bridge-label">
                  <span>1</span>
                  <span className="efda-bridge-hr"></span>
                  <span>7</span>
                </div>
              </div>
              <div className="efda-bridge-line2">
                <img src="/images/line.png" style={{ height: 50 }} alt="" />
                <div className="efda-bridge-label">
                  <span>7</span>
                  <span className="efda-bridge-hr"></span>
                  <span>7</span>
                </div>
              </div>
            </div>
            <div className="efda-bridge-numberline">
              <img src="/images/recta.png" alt="" />
            </div>

            <button
              className={`btn-next btn-secondary`}
              disabled={!validate()}
              onClick={() => validate() ? nextActivity() : console.log("no posible")}>
              {questionTemplate.submit.label}
              <BiRightArrowAlt />
            </button>
          </div>
        </div>}
    </section>
  );
};
