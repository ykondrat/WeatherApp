// Core
import styled from 'styled-components';

export const Rain = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 3.75em;
    height: 3.75em;
    margin: 0.375em 0 0 -2em;
    background: currentColor;
    
    &:after {
        content: '';
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        width: 1.125em;
        height: 1.125em;
        margin: -1em 0 0 -0.25em;
        background: #0cf;
        border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
        box-shadow:
            0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
            -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
            -1.375em -0.125em 0 rgba(255,255,255,0.2);
        transform: rotate(-28deg);
        animation: rain 3s linear infinite;
    }
    @keyframes rain {
        0% {
            background: #0cf;
            box-shadow:
                0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
                -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
                -1.375em -0.125em 0 #0cf;
        }
        25% {
            box-shadow:
                0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
                -0.875em 1.125em 0 -0.125em #0cf,
                -1.375em -0.125em 0 rgba(255,255,255,0.2);
        }
        50% {
            background: rgba(255,255,255,0.3);
            box-shadow:
                0.625em 0.875em 0 -0.125em #0cf,
                -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
                -1.375em -0.125em 0 rgba(255,255,255,0.2);
        }
        100% {
            box-shadow:
                0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
                -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
                -1.375em -0.125em 0 #0cf;
        }
    }
`;
