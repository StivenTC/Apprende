import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AISortSquares from "../../../assets/aisort-squares.svg";
import AISortCardsBkg from "../../../assets/aiSortPies2.png";

export function AISortDnD({ cards, answer }) {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle, colorBkg) => ({
    userSelect: 'none',
    background: colorBkg,
    ...draggableStyle,
  });

  const getListStyle = isDraggingOver => ({
    transitionDuration: `0.001s`,
  });

  const initalState = {
    items: cards,
    selected: []
  };

  const [listItems, setListItems] = useState(initalState);

  useEffect(() => {
    answer(listItems.selected)
  }, [listItems]);

  const id2List = {
    droppable: 'items',
    droppable2: 'selected'
  };

  const getList = id => listItems[id2List[id]];

  const onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      let items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = {};

      if (source.droppableId === 'droppable2') {
        state = {
          items: listItems.items,
          selected: items
        };
      } else {
        state = {
          items: items,
          selected: listItems.selected
        };
      }
      setListItems(state);
    } else {
      let result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      setListItems({
        items: result.droppable,
        selected: result.droppable2
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable"
        direction="horizontal"
        isDropDisabled={false}>
        {(provided, snapshot) => (
          <div
            className="ai-sort-activity-list">
            <img src={AISortCardsBkg} className="ai-sort-activity-list-bkg" alt="Cards " />
            <div
              className="ai-sort-activity-cards"
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
              {listItems.items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  renderClone
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={`ai-sort-activity-card ${item.id}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style,
                        item.color
                      )}
                    >
                      {item.chart}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <div className="ai-sort-activity-scale">
        <img src={AISortSquares} alt="llama" />
        <Droppable droppableId="droppable2"
          direction='horizontal'>
          {(provided, snapshot) => (
            <div
              className="ai-sort-activity-scale-droppable"
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
              {listItems.selected.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={`ai-sort-activity-card`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style,
                        item.color
                      )}>
                      {item.chart}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
