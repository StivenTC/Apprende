import React, { useState } from "react";
import { Header } from "../../../components/layout/Header/Header";
import './Question8.scss';
import { BiRightArrowAlt } from "react-icons/bi";

export const Question8 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const questionTemplate = {
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
  let countTemp = 1;
  const arrayPositions = Array.from({length: questionTemplate.numberImages}, (_, index) => index + 1);

  const validate = () => {
    return true;
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
    if (selectedOptions.length < 3) {
      setSelectedOptions((prevState) => {
        return [...prevState, pos];
      });
    }
  };

  const getUrlImage = (pos) => {
    const imageTemplateUrl = (sufix) => `/images/${questionTemplate.prefix}${pos}_${sufix}.png`;
    
    return selectedOptions.includes(pos) ?
      imageTemplateUrl('on') :
      imageTemplateUrl('off'); 
  };

  return (
    <div className="efda-bridge-container">
      <Header />
      <div className="efda-bridge-header">
        <strong>{ questionTemplate.title }</strong>
        <p dangerouslySetInnerHTML={{ __html: questionTemplate.description }} />
      </div>
      <div className="efda-bridge-wrapper">
        <div className="efda-bridge-options" style={{display: "flex"}}>
          <img className="efda-bridge-person" src="/images/persona.png" alt=""/>
          {
            arrayPositions.map((pos, index) => 
              <img
                className="efda-bridge-table"
                src={getUrlImage(pos)}
                style={getStylePosition(index)}
                onClick={() => selectTable(pos)}
                alt=""/>
            )
          }
          <div className="efda-bridge-line1">
            <img src="/images/line.png" style={{ height: 50 }} alt=""/>
            <div className="efda-bridge-label">
              <span>1</span>
              <span className="efda-bridge-hr"></span>
              <span>7</span>
            </div>
          </div>
          <div className="efda-bridge-line2">
            <img src="/images/line.png" style={{ height: 50 }} alt=""/>
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

        <button className={`btn-secondary btn-next ${validate() ? "" : "disabled"}`}>
          { questionTemplate.submit.label }
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};
