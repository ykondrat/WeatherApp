// Core
import styled from 'styled-components';

export const Bolt = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.25em 0 0 -0.125em;
    color: #fff;
    opacity: 0.3;
    animation: lightning 2s linear infinite;
    
    &:nth-child(2) {
        width: 0.5em;
        height: 0.25em;
        margin: -1.75em 0 0 -1.875em;
        transform: translate(2.5em, 2.25em);
        opacity: 0.2;
        animation: lightning 1.5s linear infinite;
    }
    &:before,
    &:after {
        content: '';
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        margin: -1.625em 0 0 -1.0125em;
        border-top: 1.25em solid transparent;
        border-right: 0.75em solid;
        border-bottom: 0.75em solid;
        border-left: 0.5em solid transparent;
        transform: skewX(-10deg);
    }
    &:after {
        margin: -0.25em 0 0 -0.25em;
        border-top: 0.75em solid;
        border-right: 0.5em solid transparent;
        border-bottom: 1.25em solid transparent;
        border-left: 0.75em solid;
        transform: skewX(-10deg);
    }
    &:nth-child(2):before {
        margin: -0.75em 0 0 -0.5em;
        border-top: 0.625em solid transparent;
        border-right: 0.375em solid;
        border-bottom: 0.375em solid;
        border-left: 0.25em solid transparent;
    }
    &:nth-child(2):after {
        margin: -0.125em 0 0 -0.125em;
        border-top: 0.375em solid;
        border-right: 0.25em solid transparent;
        border-bottom: 0.625em solid transparent;
        border-left: 0.375em solid;
    }
    @keyframes lightning {
        45% {
            color: #fff;
            background: #fff;
            opacity: 0.2;
        }
        50% {
            color: #0cf;
            background: #0cf;
            opacity: 1;
        }
        55% {
            color: #fff;
            background: #fff;
            opacity: 0.2;
        }
    }
`;
