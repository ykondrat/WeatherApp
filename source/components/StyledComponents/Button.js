// Core
import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    margin: 15px auto;
    padding: 15px;
    line-height:1;
    border-radius: 5px;
    background-color: #172c41;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    transition: .3s;
    text-transform: uppercase;
    cursor: pointer;
    
    &:hover {
        background-color: #18334f;
    }
    &:focus {
        outline: none;
    }
`;
