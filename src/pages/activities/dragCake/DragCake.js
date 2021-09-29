import { Header } from "../../../components/layout/header/Header"

import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

export const DragCake = ({ goView, saveUser, userData }) => {

  const [isFirstColumn, setIsFirstColumn] = useState(true);
  const isMobile = window.innerWidth < 700;
  const [textArea, setTextArea] = useState("");

  const validate = () => {
    // let a = answers.filter((ans) => ans.answer.length > 0)
    // return a.length === answers.length
  }

  const nextActivity = () => {
    //saveUser({ ...userData, scales: answers })
    console.log('lala')
    //goView(4)
  }

  const FractionA = () => {
    return <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path d="M69.4055 0.0634617C50.7275 0.847883 33.876 8.69921 21.4561 21.0129L52.7159 52.273C57.1246 47.9602 62.938 45.0768 69.4055 44.3733V0.0634617Z" fill="#EDEDFB" />
        <path d="M69.4055 100.624C62.938 99.9206 57.1246 97.0372 52.7159 92.7244L21.4561 123.984C33.876 136.298 50.727 144.15 69.4055 144.934V100.624Z" fill="#EDEDFB" />
        <path d="M72.9421 144.997V100.788C79.4221 100.689 85.3732 98.4111 90.0966 94.655L121.435 125.993C108.639 137.705 91.6287 144.886 72.9421 144.997Z" fill="#EDEDFB" />
        <path d="M72.9421 44.2095V0C91.6287 0.111598 108.639 7.29291 121.435 19.0042L90.0966 50.3424C85.3732 46.5863 79.4221 44.3088 72.9421 44.2095Z" fill="#EDEDFB" />
        <path d="M123.986 123.542C136.976 110.44 145 92.4067 145 72.4987H100.793C100.793 80.1992 97.7163 87.181 92.7257 92.2826L123.986 123.542Z" fill="#EDEDFB" />
        <path d="M0 72.4987C0 91.3591 7.20182 108.537 19.0053 121.434L50.3437 90.0953C46.5023 85.2649 44.2073 79.1499 44.2073 72.4987H0Z" fill="#EDEDFB" />
        <path d="M100.574 68.9621C99.7894 62.6719 96.9401 57.0229 92.7257 52.7149L123.986 21.4548C136.202 33.7765 144.027 50.46 144.915 68.9621H100.574Z" fill="#EDEDFB" />
        <path d="M19.0053 23.5637L50.3437 54.9021C47.1939 58.8626 45.0841 63.6868 44.4262 68.9621H0.0846156C0.923432 51.4953 7.9435 35.6493 19.0053 23.5637Z" fill="#EDEDFB" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M72.8575 0V44.2095C79.3375 44.3088 85.2886 46.5863 90.012 50.3424L121.35 19.0042C108.555 7.29291 91.5441 0.111598 72.8575 0ZM21.3715 21.0129C33.7914 8.69921 50.6428 0.847883 69.3209 0.0634617V44.3733C62.8534 45.0768 57.04 47.9602 52.6313 52.273L21.3715 21.0129ZM123.901 123.542C136.891 110.44 144.915 92.4067 144.915 72.4987H100.708C100.708 80.1992 97.6317 87.181 92.6411 92.2826L123.901 123.542ZM100.489 68.9621C99.7048 62.6719 96.8555 57.0229 92.6411 52.7149L123.901 21.4548C136.118 33.7765 143.942 50.46 144.831 68.9621H100.489ZM50.2591 54.9021L18.9206 23.5637C7.85889 35.6493 0.838817 51.4953 0 68.9621H44.3416C44.9995 63.6868 47.1093 58.8626 50.2591 54.9021Z" fill="#37BCDA" />
      </g>
    </svg>

  }

  const FractionB = () => {
    return <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path d="M105.992 8.18289C95.9739 2.9555 84.5819 0 72.5 0C59.4291 0 47.1658 3.45909 36.5759 9.51191L58.6839 47.8041C62.7701 45.5135 67.4822 44.2073 72.5 44.2073C76.5292 44.2073 80.3615 45.0496 83.8307 46.5675L105.992 8.18289Z" fill="#D9D9ED" />
        <path d="M109.087 9.89549L86.9788 48.1877C94.2933 52.553 99.4716 60.1252 100.574 68.9634H144.915C143.704 43.7532 129.617 21.9195 109.087 9.89549Z" fill="#D9D9ED" />
        <path d="M55.7099 95.2743C48.7325 90.1217 44.2073 81.8393 44.2073 72.5H0C0 98.2044 13.377 120.784 33.5488 133.658L55.7099 95.2743Z" fill="#D9D9ED" />
        <path d="M36.5759 135.488L58.6839 97.1958C62.7701 99.4865 67.4822 100.793 72.5 100.793C76.5292 100.793 80.3615 99.9505 83.8307 98.4326L105.992 136.817C95.9743 142.045 84.5823 145 72.5 145C59.4291 145 47.1658 141.541 36.5759 135.488Z" fill="#D9D9ED" />
        <path d="M145 72.5C145 99.1959 130.571 122.522 109.087 135.105L86.9788 96.8123C95.2517 91.8748 100.793 82.8344 100.793 72.5H145Z" fill="#D9D9ED" />
        <path d="M55.7094 49.7257L33.5483 11.3417C14.3069 23.622 1.24851 44.7334 0.0846156 68.9634H44.4262C45.4083 61.0879 49.627 54.2174 55.7094 49.7257Z" fill="#D9D9ED" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M72.5003 0C84.5822 0 95.9743 2.9555 105.993 8.18289L83.8311 46.5675C80.3618 45.0496 76.5295 44.2073 72.5003 44.2073C67.4826 44.2073 62.7704 45.5135 58.6843 47.8041L36.5763 9.51191C47.1662 3.45909 59.4294 0 72.5003 0ZM86.9791 48.1877L109.087 9.89549C129.617 21.9195 143.705 43.7532 144.916 68.9634H100.574C99.472 60.1252 94.2936 52.553 86.9791 48.1877ZM145 72.5C145 99.1959 130.571 122.522 109.087 135.105L86.9791 96.8123C95.252 91.8748 100.793 82.8344 100.793 72.5H145ZM33.5487 11.3417L55.7098 49.7257C49.6274 54.2174 45.4087 61.0879 44.4265 68.9634H0.0849609C1.24886 44.7334 14.3073 23.622 33.5487 11.3417Z" fill="#FFBC0F" />
      </g>
    </svg>
  }

  const MovableItem = ({ setIsFirstColumn }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'BOX',
      item: { name: 'Any custom name', type: 'Our first type' },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (dropResult && dropResult.name === 'Column 1') {
          setIsFirstColumn(true)
        } else {
          setIsFirstColumn(false);
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (
      <div ref={drag} className='movable-item' style={{ opacity }}>
        <FractionA />
      </div>
    )
  }

  const Column = ({ children, className, title }) => {
    const [, drop] = useDrop({
      accept: 'Our first type',
      drop: () => ({ name: title }),
    });

    return (
      <div ref={drop} className={className}>
        {children}
      </div>
    )
  }

  const Item = <MovableItem setIsFirstColumn={setIsFirstColumn} />;

  return (
    <div className="drag-cake">
      <Header goView={goView} actualView={1} />
      <div className="drag-cake-content">
        <div className="drag-cake-content-text">
          <h2>¿Qué observas?</h2>
          <p>Arrastra la fracción B sobre la A y observa las dos fracciones</p>
        </div>
        <div className="drag-cake-activity">
          <div className="column-header">
            <div>
              <span />
              Fracción A
            </div>
            <div>
              <span />
              Fracción B
            </div>
          </div>
          <div className="drag-cake-activity-task">
            <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
              <Column title="Fracción A" className='column first-column'>
                {isFirstColumn && Item}
              </Column>
              <Column title="Fracción B" className='column second-column'>
                <div>
                  <FractionB />
                  {!isFirstColumn && Item}
                </div>
              </Column>
            </DndProvider>
          </div>
          {!isFirstColumn && <div className="drag-cake-activity-conclusion">
            <p>¿Cómo podrías comparar estas dos fracciones representadas?</p>
            <div className="conclusion-answer">
              <textarea placeholder="Respuesta:" rows="3" value={textArea} onChange={(e) => setTextArea(e.target.value)} maxlength="500" />
              {textArea.length > 450 && <span>{textArea.length}/500</span>}
            </div>
            <button className={`${textArea.length > 5 ? "" : "disabled"}`} onClick={() => textArea.length > 5 ? goView(0) : console.log("no posible")}>Siguiente</button>
          </div>}
        </div>
      </div>
    </div>
  )
}