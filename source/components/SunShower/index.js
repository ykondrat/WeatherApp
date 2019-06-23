// Core
import React from 'react';

// Components
import { Cloud } from '../StyledComponents/Cloud';
import { Icon } from '../StyledComponents/Icon';
import { Sun } from '../StyledComponents/Sun';
import { Rays } from '../StyledComponents/Rays';
import { Rain } from '../StyledComponents/Rain';

const SunShower = (props) => {
    const { color } = props;

    return (
        <Icon color = { color }>
            <Cloud />
            <Sun margin = { '-2em 1em' }>
                <Rays />
            </Sun>
            <Rain />
        </Icon>
    );
};

export default SunShower;
