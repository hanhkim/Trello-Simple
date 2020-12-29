import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Menu, Popover } from 'antd';
import { ColorPicker } from '../index';

const MenuConfig = props => {
    const { onChooseColor } = props;

    return (
        <Menu>
            <Menu.Item>Delete</Menu.Item>
            <Menu.Item>
                <Popover
                    placement="rightBottom"
                    title={'Choose Label'}
                    content={<ColorPicker chooseColor={onChooseColor} />}
                    trigger="click"
                >
                    <Button>Label</Button>
                </Popover>
            </Menu.Item>
        </Menu>
    );
};

MenuConfig.propTypes = {};

export default MenuConfig;
