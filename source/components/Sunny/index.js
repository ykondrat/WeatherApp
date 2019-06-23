// Core
import React from 'react';

// Components
import { Icon } from '../StyledComponents/Icon';
import { Sun } from '../StyledComponents/Sun';
import { Rays } from '../StyledComponents/Rays';

const Sunny = (props) => {
    const { color } = props;

    return (
        <Icon color = { color }>
            <Sun>
                <Rays />
            </Sun>
        </Icon>
    );
};

export default Sunny;
