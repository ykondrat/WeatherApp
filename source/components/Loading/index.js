// Core
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #27aae2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 36px;
        color: #fff;
    }
`;
const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    
    & div {
        position: absolute;
        top: 27px;
        width: 11px;
        height: 11px;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    & div:nth-child(1) {
        left: 6px;
        animation: lds-ellipsis1 0.6s infinite;
    }
    & div:nth-child(2) {
        left: 6px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    & div:nth-child(3) {
        left: 26px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    & div:nth-child(4) {
        left: 45px;
        animation: lds-ellipsis3 0.6s infinite;
    }
`;

const Loading = () => {
    return (
        <Container>
            <h1>Loading</h1>
            <Spinner>
                <div /><div /><div /><div />
            </Spinner>
        </Container>
    );
};

export default Loading;
