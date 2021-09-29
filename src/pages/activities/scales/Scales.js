import { Header } from "../../../components/layout/header/Header"

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from "react";

export const Scales = ({ goView, saveUser, userData }) => {
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
      answer: "",
    }
  ]
  const [answers, setAnswers] = useState(quests);

  const scales = [
    {
      steps: 0.5,
      marks: {
        0: <strong className="rc-strong-mark">0</strong>,
        0.5: <strong className="rc-strong-mark"><span>1</span><span>2</span></strong>,
        1: <strong className="rc-strong-mark">1</strong>,
      }
    },
    {
      steps: 0.25,
      marks: {
        0: <strong className="rc-strong-mark">0</strong>,
        0.25: <strong><span>1</span><span>4</span></strong>,
        0.5: <strong className="rc-strong-mark"><span>2</span><span>4</span></strong>,
        0.75: <strong><span>3</span><span>4</span></strong>,
        1: <strong className="rc-strong-mark">1</strong>
      }
    },
    {
      steps: 0.16,
      marks: {
        0: <strong className="rc-strong-mark">0</strong>,
        0.16: <strong><span>1</span><span>6</span></strong>,
        0.33: <strong><span>2</span><span>6</span></strong>,
        0.5: <strong className="rc-strong-mark"><span>3</span><span>6</span></strong>,
        0.66: <strong><span>4</span><span>6</span></strong>,
        0.83: <strong><span>5</span><span>6</span></strong>,
        1: <strong className="rc-strong-mark">1</strong>
      }
    },
    {
      steps: 0.125,
      marks: {
        0: <strong className="rc-strong-mark">0</strong>,
        0.125: <strong><span>1</span><span>8</span></strong>,
        0.25: <strong><span>2</span><span>8</span></strong>,
        0.375: <strong><span>3</span><span>8</span></strong>,
        0.5: <strong className="rc-strong-mark"><span>4</span><span>8</span></strong>,
        0.625: <strong><span>5</span><span>8</span></strong>,
        0.75: <strong><span>6</span><span>8</span></strong>,
        0.875: <strong><span>7</span><span>8</span></strong>,
        1: <strong className="rc-strong-mark">1</strong>
      }
    },
  ]


  function handle(value) {
    let currentAnswer = answers;
    let nextScale = 0;

    currentAnswer[currentScale].answer = String(value);

    console.log(value)
    setAnswers(currentAnswer)

    nextScale = currentScale + 1

    setCurrentScale(nextScale)

  }
  console.log(answers)

  const validate = () => {
    let a = answers.filter((ans) => ans.answer.length > 0)
    return a.length === answers.length
  }

  const nextActivity = () => {
    saveUser({ ...userData, scales: answers })
    goView(4)
  }

  return (
    <div className="scales">
      <Header goView={goView} actualView={1} />
      <div className="scales-content">
        <div className="scales-content-text">
          <p>Ubica el punto azul que representa cada fracción en cada una de las rectas numéricas</p>
        </div>
        <div className="scales-activity">
          <div className="scales-activity-fraction">
            {answers.map((item, i) =>
              <div role="button"
                onClick={() => setCurrentScale(i)}
                className={`scales-fractions ${item.answer.length > 0 ? "complete" : ""} ${currentScale === i ? "selected" : ""}`}>
                <span>{item.quest.charAt()}</span>
                <span>{item.quest.charAt(2)}</span>
              </div>
            )}
          </div>
          <div className="scales-activity-items">
            {scales.map((scale, i) =>
              <div
                role="button"
                className="content-slider"
                onClick={() => setCurrentScale(i)}>
                <Slider min={0} max={1}
                  marks={scale.marks}
                  step={scale.steps}
                  defaultValue={0}
                  onAfterChange={handle}
                  className={`${currentScale === i ? "selected" : ""}`}
                  disabled={currentScale !== i} />
              </div>
            )
            }
          </div>
        </div>
        <button className={`${validate() ? "" : "disabled"}`} onClick={() => validate() ? nextActivity() : console.log("no posible")}>Siguiente</button>
      </div>
    </div >
  )
}