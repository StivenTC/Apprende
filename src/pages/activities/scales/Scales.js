import { Header } from "../../../components/layout/header/Header"

import Slider, { Handle, SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from "react";

export const Scales = ({ goView, saveUser }) => {
  const [currentScale, setCurrentScale] = useState(0);
  const quests = [
    {
      quest: "1/2",
      answer: "",
    },
    {
      quest: "2/4",
      answer: "",
    },
    {
      quest: "3/6",
      answer: "",
    },
    {
      quest: "4/8",
      answer: "2/2",
    }
  ]

  const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value} %`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };
  const marks = {
    0: <strong>0</strong>,
    0.5: "1/2",
    1: {
      style: {
        color: 'red',
      },
      label: <strong>1</strong>,
    },
  };

  return (
    <div className="scales">
      <Header goView={goView} actualView={1} />
      <div className="scales-content">
        <div className="scales-content-text">
          <p>Ubica el punto azul que representa cada fracción en cada una de las rectas numéricas</p>
        </div>
        <div className="scales-activity">
          <div className="scales-activity-fraction">
            {quests.map((item, i) =>
              <div role="button"
                className={`scales-fractions ${item.answer.length > 0 ? "complete" : ""} ${currentScale === i ? "selected" : ""}`}>
                <span>{item.quest.charAt()}</span>
                <span>{item.quest.charAt(2)}</span>
              </div>
            )}
          </div>
          <div className="scales-activity-items">
            <Slider min={0} max={1} marks={marks} step={0.5} defaultValue={0} handle={handle} />
          </div>
        </div>
      </div >
    </div >
  )
}