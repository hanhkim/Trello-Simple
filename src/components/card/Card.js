import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // change background colour if dragging

    // styles we need to apply on draggables
    ...draggableStyle,
});

const CardItem = props => {
    const { item } = props;
    return (
        <div className="card-item">
            <div>{item.content}</div>
        </div>
    );
};

CardItem.propTypes = {
    item: PropTypes.object,
};

export default CardItem;
