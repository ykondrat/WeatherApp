// Core
import React from 'react';

// Components
import { Cloud } from '../StyledComponents/Cloud';
import { Icon } from '../StyledComponents/Icon';
import { Rain } from '../StyledComponents/Rain';

const Rainy = (props) => {
    const { color } = props;

    return (
        <Icon color = { color }>
            <Cloud />
            <Rain />
        </Icon>
    );
};

export default Rainy;
