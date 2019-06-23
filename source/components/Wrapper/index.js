// Core
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    background-image: url(${(props) => props.back});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    
    h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 46px;
        color: #fff;
        margin-bottom: 25px;
        text-align: center;
    }
    h3 {
        font-size: 34px;
        text-align: center;
    }
    h2 {
        margin-bottom: 15px;
        text-align: center;
    }
    p {
        font-size: 16px;
        margin-bottom: 5px;
    }
    section {
        text-align: center;
    }
    a {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        margin: 0 auto;
        position: relative;
        
    }
    a::before, a::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: #fff;
        transform: scaleY(0);
        transition: transform 0.5s ease;
    }
    
    a::before {
        left: -8px;
        transform-origin: center top;
    }
    
    a:hover::before {
        transform-origin: center bottom;
        transform: scaleY(1);
    }
    
    a::after {
        right: -8px;
        transform-origin: center bottom;
    }
    
    a:hover::after {
        transform-origin: center top;
        transform: scaleY(1);
    }
`;

const Wrapper = (props) => {
    const { timeOfDay, weatherDesc, children } = props;

    let back = '';

    if (timeOfDay === 'night' && weatherDesc === 'Clear') {
        back = '/static/starry_sky.png';
    }

    return (
        <Container back = { back }>
            { children }
        </Container>
    );
};

export default Wrapper;
