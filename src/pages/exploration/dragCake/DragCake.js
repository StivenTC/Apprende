import { Header } from "../../../components/layout/Header/Header"

import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { BiRightArrowAlt } from "react-icons/bi";

export const DragCake = ({ goView, saveUser, userData }) => {

  const [isFirstColumn, setIsFirstColumn] = useState(true);
  const [questionSolved, setQuestionSolved] = useState(false);
  const isMobile = window.innerWidth < 700;
  const [textArea, setTextArea] = useState("");

  const FractionB = () => {
    return <svg width="199" height="200" viewBox="0 0 199 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M169.71 99.9998C169.71 87.5875 166.443 75.3939 160.237 64.6445C154.031 53.8951 145.104 44.9688 134.355 38.7626L98.9998 99.9998L169.71 99.9998Z" fill="#FFBC0F" stroke="#F7FAFF" stroke-width="4" />
      <path d="M63.6447 38.7627C52.8954 44.9688 43.969 53.8952 37.7629 64.6445C31.5567 75.3939 28.2895 87.5875 28.2895 99.9998L99 99.9998L63.6447 38.7627Z" fill="#FFBC0F" stroke="#F7FAFF" stroke-width="4" />
      <path d="M134.355 38.7627C123.606 32.5566 111.412 29.2893 99 29.2893C86.5877 29.2893 74.3941 32.5566 63.6448 38.7627L99 99.9998L134.355 38.7627Z" fill="#FFBC0F" stroke="#F7FAFF" stroke-width="4" />
      <path d="M28.2897 99.9997C28.2897 112.412 31.5569 124.606 37.7631 135.355C43.9692 146.104 52.8956 155.031 63.6449 161.237L99.0002 99.9997L28.2897 99.9997Z" fill="#D9D9ED" stroke="#F7FAFF" stroke-width="4" />
      <path d="M134.355 161.237C145.105 155.031 154.031 146.104 160.237 135.355C166.443 124.606 169.711 112.412 169.711 99.9998L99 99.9998L134.355 161.237Z" fill="#FFBC0F" stroke="#F7FAFF" stroke-width="4" />
      <path d="M63.6447 161.237C74.3941 167.443 86.5877 170.71 99 170.71C111.412 170.71 123.606 167.443 134.355 161.237L99 99.9998L63.6447 161.237Z" fill="#D9D9ED" stroke="#F7FAFF" stroke-width="4" />
    </svg>
  }

  const FractionA = () => {
    return <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.9996 50.0001C43.4335 56.5661 38.225 64.3611 34.6715 72.9401C31.118 81.519 29.289 90.7139 29.289 99.9997L99.9992 99.9997L49.9996 50.0001Z" fill="#37BCDA" stroke="#F7FAFF" stroke-width="4" />
      <path d="M99.9993 29.2892C90.7135 29.2892 81.5186 31.1182 72.9397 34.6717C64.3607 38.2252 56.5657 43.4337 49.9997 49.9997L99.9993 99.9993L99.9993 29.2892Z" fill="#37BCDA" stroke="#F7FAFF" stroke-width="4" />
      <path d="M149.999 49.9998C143.433 43.4337 135.638 38.2253 127.059 34.6718C118.48 31.1182 109.285 29.2893 99.9995 29.2893L99.9995 99.9994L149.999 49.9998Z" fill="#37BCDA" stroke="#F7FAFF" stroke-width="4" />
      <path d="M170.711 99.9991C170.711 90.7133 168.882 81.5184 165.328 72.9395C161.775 64.3605 156.566 56.5655 150 49.9995L100.001 99.9991L170.711 99.9991Z" fill="#37BCDA" stroke="#F7FAFF" stroke-width="4" />
      <path d="M150 149.999C156.566 143.433 161.775 135.638 165.328 127.059C168.882 118.48 170.711 109.285 170.711 99.9992L100.001 99.9992L150 149.999Z" fill="#37BCDA" stroke="#F7FAFF" stroke-width="4" />
      <path d="M100.001 170.709C109.287 170.709 118.481 168.88 127.06 165.327C135.639 161.773 143.434 156.565 150 149.999L100.001 99.9991L100.001 170.709Z" fill="#D9D9ED" stroke="#F7FAFF" stroke-width="4" />
      <path d="M50.0008 150C56.5669 156.566 64.3619 161.774 72.9408 165.328C81.5198 168.881 90.7146 170.71 100 170.71L100 100L50.0008 150Z" fill="#D9D9ED" stroke="#F7FAFF" stroke-width="4" />
      <path d="M29.2891 99.9996C29.2891 109.285 31.118 118.48 34.6716 127.059C38.2251 135.638 43.4335 143.433 49.9996 149.999L99.9992 99.9996L29.2891 99.9996Z" fill="#D9D9ED" stroke="#F7FAFF" stroke-width="4" />
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

  const validate = () => {
    let res = false
    if (textArea.length > 5 && !questionSolved) {
      res = true
    } else if (questionSolved && !isFirstColumn) {
      res = true
    }
    return res
  }

  const nextView = () => {
    if (questionSolved) {
      goView(5)
    } else if (textArea.length > 5) {
      setQuestionSolved(true)
    }
  }
  return (
    <div className="drag-cake">
      <Header goView={goView} actualView={4} />
      <div className="drag-cake-content">
        <div className="drag-cake-content-text">
          {!questionSolved && <h2>¿Qué observas?</h2>}
          {questionSolved ?
            <p>Arrastra la fracción A sobre la B y observa las dos fracciones</p>
            :
            <p>¿Cómo podrías comparar estas dos fracciones representadas?</p>
          }
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
          <div className={`${questionSolved ? '' : 'no-action'} drag-cake-activity-task`}>
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
          {!questionSolved && <div className="drag-cake-activity-conclusion">
            <div className="conclusion-answer">
              <textarea placeholder="Respuesta:" rows="3" value={textArea} onChange={(e) => setTextArea(e.target.value)} maxLength="300" />
              {textArea.length > 250 && <span>{textArea.length}/300</span>}
            </div>
          </div>}
          <button className={`btn-next ${validate() ? "" : "disabled"}`} onClick={() => nextView()}>
            Siguiente
            <BiRightArrowAlt />
          </button>
        </div>
      </div>
    </div>
  )
}