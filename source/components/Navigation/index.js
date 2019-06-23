// Core
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    top: 10px;
    right: 10px;
    
    a {
        position: relative;
        color: #fff;
        margin: 0 15px;
        font-weight: bold;
        text-decoration: none;
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

const Navigation = () => {
    return (
        <Nav>
            <Link to = { '/' }>Home</Link>
            <Link to = { '/cities' }>All cities</Link>
            <Link to = { '/add-city' }>Add cities</Link>
        </Nav>
    );
};

export default Navigation;
