import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Row, Col, Typography, Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Card from '../card';
import './Wrapper.css';

const { Title } = Typography;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#efcbd1' : 'inherit',
});

const { TextArea } = Input;

const Wrapper = props => {
    const { title, items, onAddNewCard } = props;
    const [isAdding, onSetAdd] = useState(false);
    const [input, setInput] = useState('');
    const onAddItem = () => {
        onSetAdd(true);
    };

    const onSave = () => {
        onSetAdd(false);
        onAddNewCard(input, title);
        setInput('');
    };

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
                {isAdding === true && (
                    <Row>
                        <TextArea
                            placeholder="Add new card"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onPressEnter={onSave}
                        />
                    </Row>
                )}
                <Row className="wrapper__bottom">
                    {!isAdding ? (
                        <Button
                            icon={<PlusOutlined />}
                            onClick={() => onAddItem()}
                        >
                            Add new card
                        </Button>
                    ) : (
                        <React.Fragment>
                            <Button onClick={() => onSave()}>Save</Button>
                            <Button>Cancel</Button>
                        </React.Fragment>
                    )}
                </Row>
            </div>
        </Col>
    );
};

export default Wrapper;
