// Core
import styled from 'styled-components';

export const Icon = styled.div`
    position: relative;
    display: inline-block;
    width: 12em;
    height: 10em;
    font-size: 1em;
    color: ${(props) => props.color};
    background-color: currentColor;
`;
