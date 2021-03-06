import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Row } from 'antd';
import { Wrapper } from '../index';

import './Body.css';

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        content: `item ${k + offset}`,
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
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

const blockList = ['todos', 'doing', 'done', 'note'];

const Body = props => {
    const [todoList, setTodoList] = useState(getItems(5));
    const [doingList, setDoingList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [noteList, setNoteList] = useState([]);

    const getList = id => {
        switch (id) {
            case 'todos':
                return todoList;
            case 'doing':
                return doingList;
            case 'done':
                return doneList;
            case 'note':
                return noteList;
            default:
                return;
        }
    };

    const onSetItems = key => {
        switch (key) {
            case 'todos':
                return setTodoList;
            case 'doing':
                return setDoingList;
            case 'done':
                return setDoneList;
            case 'note':
                return setNoteList;
            default:
                return;
        }
    };

    const onDragEnd = result => {
        const { source, destination } = result;
        console.log('result: ', result);
        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            // the same tree
            if (source.droppableId === 'todos') {
                let itemsAfterDrag = reorder(
                    todoList,
                    source.index,
                    destination.index,
                );

                setTodoList(itemsAfterDrag);
            } else if (source.droppableId === 'doing') {
                let itemsAfterDrag = reorder(
                    doingList,
                    source.index,
                    destination.index,
                );

                setDoingList(itemsAfterDrag);
            } else if (source.droppableId === 'done') {
                let itemsAfterDrag = reorder(
                    doneList,
                    source.index,
                    destination.index,
                );

                setDoneList(itemsAfterDrag);
            } else if (source.droppableId === 'note') {
                let itemsAfterDrag = reorder(
                    noteList,
                    source.index,
                    destination.index,
                );

                setNoteList(itemsAfterDrag);
            }
        } else {
            // difference tree
            const keySource = source.droppableId;
            const keyDestination = destination.droppableId;

            const itemsAfterDrag = move(
                getList(keySource),
                getList(keyDestination),
                source,
                destination,
            );

            const setItemFuncSource = onSetItems(keySource);
            const setItemsFuncDes = onSetItems(keyDestination);
            setItemFuncSource(itemsAfterDrag[keySource]);
            setItemsFuncDes(itemsAfterDrag[keyDestination]);
        }
    };

    const onAddNewCard = (value, title) => {
        let items = getList(title);
        let newCard = { content: value };
        items = [...items, newCard];

        switch (title) {
            case blockList[0]:
                return setTodoList(items);
            case blockList[1]:
                return setDoingList(items);
            case blockList[2]:
                return setDoneList(items);
            case blockList[3]:
                return setNoteList(items);
            default:
                return;
        }
    };

    return (
        <Row className="main-content">
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper
                    title={blockList[0]}
                    items={todoList}
                    onAddNewCard={onAddNewCard}
                />
                <Wrapper
                    title={blockList[1]}
                    items={doingList}
                    onAddNewCard={onAddNewCard}
                />
                <Wrapper
                    title={blockList[2]}
                    items={doneList}
                    onAddNewCard={onAddNewCard}
                />
                <Wrapper
                    title={blockList[3]}
                    items={noteList}
                    onAddNewCard={onAddNewCard}
                />
            </DragDropContext>
        </Row>
    );
};

export default Body;
