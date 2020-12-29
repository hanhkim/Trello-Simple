import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { ColorPicker, MenuConfig } from '../index';
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
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [cardColor, setCardColor] = useState('');
    const style = () => {
        return {
            background: cardColor,
        };
    };

    const onChooseColor = color => {
        setCardColor(color);
    };

    return (
        <div className="card-item" style={style()}>
            <div>{item.content}</div>
            <Dropdown
                overlay={<MenuConfig onChooseColor={onChooseColor} />}
                trigger={['click']}
                placement="topRight"
            >
                <Button
                    className="card-item__btn-edit"
                    icon={<EditOutlined />}
                ></Button>
            </Dropdown>
        </div>
    );
};

CardItem.propTypes = {
    item: PropTypes.object,
};

export default CardItem;
