import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import { SketchPicker } from 'react-color';

const ColorPicker = props => {
    const { chooseColor } = props;
    const [color, setColor] = useState('#fff');

    const onChangeComplete = color => {
        setColor(color.rgb);
        chooseColor(onConvertString(color.rgb));
    };

    const onChange = color => {
        setColor(color.rgb);
    };

    const onConvertString = color => {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    };

    return (
        <Row>
            <SketchPicker
                color={color}
                onChangeComplete={onChangeComplete}
                onChange={onChange}
            />
        </Row>
    );
};

ColorPicker.propTypes = {};

export default ColorPicker;
