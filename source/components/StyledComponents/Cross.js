// Core
import styled from 'styled-components';

export const Cross = styled.span`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    overflow: hidden;
    cursor: pointer;
    
    &:before, &:after {
        content: '';
        position: absolute;
        height: 10px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: #fff;
    }
    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
`;
