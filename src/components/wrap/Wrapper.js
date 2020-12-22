import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Row, Col, Typography } from 'antd';
import Card from '../card/Card';
import './Wrapper.css';

const { Title } = Typography;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'inherit',
});

const Wrapper = props => {
    const { title, items } = props;

    return (
        <Col className="wrapper" span={6}>
            <div className="wrapper__area">
                <Title level={5} className="wrapper__area-title">
                    {title}
                </Title>

                <Droppable droppableId={title}>
                    {(provided, snapshot) => (
                        <Row
                            className="wrapper__items"
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {items &&
                                items.map((item, index) => (
                                    <Card
                                        item={item}
                                        index={index}
                                        key={index}
                                    />
                                ))}
                            {provided.placeholder}
                        </Row>
                    )}
                </Droppable>
            </div>
        </Col>
    );
};

export default Wrapper;
