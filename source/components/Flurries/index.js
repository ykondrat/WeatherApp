// Core
import React from 'react';

// Components
import { Cloud } from '../StyledComponents/Cloud';
import { Icon } from '../StyledComponents/Icon';
import { Snow } from '../StyledComponents/Snow';
import { Flake } from '../StyledComponents/Flake';

const Flurries = (props) => {
    const { color } = props;

    return (
        <Icon color = { color }>
            <Cloud />
            <Snow>
                <Flake />
                <Flake />
            </Snow>
        </Icon>
    );
};

export default Flurries;
