// Core
import styled from 'styled-components';

export const Sun = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2.5em;
    height: 2.5em;
    margin: -1.25em;
    background: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 0 0.375em #fff;
    animation: spin 12s infinite linear;
    
    ${({ margin }) => margin && `
        margin: ${margin};
    `}
    @keyframes spin {
        100% { transform: rotate(360deg); }
    }
`;
