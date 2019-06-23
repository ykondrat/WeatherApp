// Core
import React from 'react';

// Components
import { Cloud } from '../StyledComponents/Cloud';
import { Icon } from '../StyledComponents/Icon';
import { Lightning } from '../StyledComponents/Lightning';
import { Bolt } from '../StyledComponents/Bolt';

const ThunderStorm = (props) => {
    const { color } = props;

    return (
        <Icon color = { color }>
            <Cloud />
            <Lightning>
                <Bolt />
                <Bolt />
            </Lightning>
        </Icon>
    );
};

export default ThunderStorm;
