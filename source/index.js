// Core
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';

// Intro
import App from './app';

// Styles
import 'reset-css';

// Store
import { store, history } from './store';

const GlobalStyle = createGlobalStyle`
    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0) rotate(45deg);
        }
        100% {
            transform: scale(1) rotate(45deg);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1) rotate(45deg);
        }
        100% {
            transform: scale(0) rotate(45deg);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0) rotate(45deg);
        }
        100% {
            transform: translate(19px, 0) rotate(45deg);
        }
    }
    html, body, #app {
        width: 100%;
        height: 100%;
        font-family: 'San Francisco', sans-serif;
    } 
`;

render(
    <Provider store = { store }>
        <ConnectedRouter history = { history }>
            <Fragment>
                <GlobalStyle />
                <App />
            </Fragment>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
