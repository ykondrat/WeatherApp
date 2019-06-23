// Core
import styled from 'styled-components';

export const Rays = styled.div`
    position: absolute;
    top: -2em;
    left: 50%;
    display: block;
    width: 0.375em;
    height: 1.125em;
    margin-left: -0.1875em;
    background: #fff;
    border-radius: 0.25em;
    box-shadow: 0 5.375em #fff;
    
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 0.375em;
        height: 1.125em;
        transform: rotate(60deg);
        transform-origin: 50% 3.25em;
        background: #fff;
        border-radius: 0.25em;
        box-shadow: 0 5.375em #fff;
    }
    &:before {
        transform: rotate(120deg);
    }
`;
