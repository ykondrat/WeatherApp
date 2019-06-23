// Core
import React from 'react';

// Components
import { Cloud } from '../StyledComponents/Cloud';
import { Icon } from '../StyledComponents/Icon';

const Cloudy = (props) => {
    const { color } = props;

    return (
        <Icon color = { color }>
            <Cloud />
            <Cloud />
        </Icon>
    );
};

export default Cloudy;
