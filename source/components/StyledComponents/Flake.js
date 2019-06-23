// Core
import styled from 'styled-components';

export const Flake = styled.div`
    &:before,
    &:after {
        content: '\\2744';
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -1.025em 0 0 -1.0125em;
        color: #fff;
        list-height: 1em;
        opacity: 0.2;
        animation: spin 8s linear infinite reverse;
    }
    &:after {
        margin: 0.125em 0 0 -1em;
        font-size: 1.5em;
        opacity: 0.4;
        animation: spin 14s linear infinite;
    }
    &:nth-child(2):before {
        margin: -0.5em 0 0 0.25em;
        font-size: 1.25em;
        opacity: 0.2;
        animation: spin 10s linear infinite;
    }
    &:nth-child(2):after {
        margin: 0.375em 0 0 0.125em;
        font-size: 2em;
        opacity: 0.4;
        animation: spin 16s linear infinite reverse;
    }
    @keyframes spin {
        100% { transform: rotate(360deg); }
    }
`;
