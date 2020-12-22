import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Card.css';

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // change background colour if dragging

    // styles we need to apply on draggables
    ...draggableStyle,
});

const Card = props => {
    const { item, index } = props;
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
                <div
                    className="card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style,
                    )}
                >
                    <div>{item.content}</div>
                </div>
            )}
        </Draggable>
    );
};

Card.propTypes = {};

export default Card;
