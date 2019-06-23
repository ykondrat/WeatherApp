// Core
import React from 'react';
import styled from 'styled-components';

// Components Icon
import { WeatherIcon } from '../index';

const Container = styled.section`
    display: flex;
    align-items: center;
    margin: 20px auto;
`;

const Temp = styled.div`
    text-align: left;
    margin-left: 10px;
`;

const ForecastTab = (props) => {
    const {
        minTemp,
        maxTemp,
        forecast,
        date,
        humidity,
        color,
    } = props;

    return (
        <Container>
            <div>
                <p>{ date }</p>
                <WeatherIcon
                    color = { color }
                    forecast = { forecast }
                />
            </div>
            <Temp>
                <p>{ minTemp }&deg;C / { maxTemp}&deg;C</p>
                <p>Forecast: { forecast }</p>
                <p>Humidity: { humidity }%</p>
            </Temp>
        </Container>
    );
};

export default ForecastTab;
