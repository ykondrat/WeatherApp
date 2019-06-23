// Core
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

import { Wrapper, ForecastTab } from '../../../components';

// Instruments
import { convertToCelsius } from '../../../instruments';

const Raw = styled.div`
    display: block;
    height: 100%;
    
    h1 {
        text-align: center;
        margin-top: 20px;
    }
    section {
        display: flex;
        align-items: center;
    }
`;

const Forecast = (props) => {
    const { timeOfDay, weather, color } = props;
    const data = weather.toJS().find((item) => item.currentWeather.name === props.match.params.name);
    const weatherDesc = data.currentWeather.weather[0].main;

    return (
        <Wrapper timeOfDay = { timeOfDay } weatherDesc = { weatherDesc }>
            <Raw>
                <h1>{data.currentWeather.name} Forecast</h1>
                {
                    data.dailyForecast.list.map((item) => (
                        <ForecastTab
                            color = { color }
                            date = { moment.unix(item.dt).format('MM-DD-YYYY HH:mm') }
                            forecast = { item.weather[0].description }
                            humidity = { item.main.humidity }
                            key = { item.dt_txt }
                            maxTemp = { convertToCelsius(item.main.temp_max) }
                            minTemp = { convertToCelsius(item.main.temp_min) }
                        />
                    ))
                }
            </Raw>
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    weather:   state.weather,
    timeOfDay: state.ui.get('timeOfDay'),
});

export default connect(mapStateToProps)(Forecast);
