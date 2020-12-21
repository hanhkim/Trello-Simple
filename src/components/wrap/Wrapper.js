import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Row, Col, Typography } from 'antd';
import './Wrapper.css';

const { Title } = Typography;
const Wrapper = props => {
    const { title } = props;
    return (
        <Col className="wrapper" span={6}>
            <div className="wrapper__area">
                <Title level={5} className="wrapper__area-title">
                    {title}
                </Title>
                <Row>This for cards</Row>
            </div>

            {/* <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <Col
                        span={4}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style,
                                        )}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </Col>
                )}
            </Droppable> */}
        </Col>
    );
};

export default Wrapper;
