// Core
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Instruments
import { convertToCelsius } from '../../../instruments';

// Components
import {
    Wrapper,
    WeatherIcon
} from '../../../components';

const Home = (props) => {
    const { timeOfDay, weather, color } = props;
    const data = weather.toJS();
    const desc = data.currentWeather.weather.map((item) => item.description).join(' ');
    const weatherDesc = data.currentWeather.weather[0].main;
    const forecast = data.currentWeather.weather[0].description;

    return (
        <Wrapper timeOfDay = { timeOfDay } weatherDesc = { weatherDesc }>
            <div>
                <WeatherIcon
                    color = { color }
                    forecast = { forecast }
                    timeOfDay = { timeOfDay }
                />
                <h3>{ `${data.currentWeather.name} ${data.currentWeather.sys.country}` }</h3>
                <h2>{ desc }</h2>
                <h1>{ convertToCelsius(data.currentWeather.main.temp) }&deg;C</h1>
                <section>
                    <h2>{ moment.unix(data.currentWeather.dt).format('MM-DD-YYYY') }</h2>
                    <p>Max: {convertToCelsius(data.currentWeather.main.temp_max) }&deg;C</p>
                    <p>Min: {convertToCelsius(data.currentWeather.main.temp_min) }&deg;C</p>
                    <p>Humidity: { data.currentWeather.main.humidity }%</p>
                    <Link to = { `/forecast/${data.currentWeather.name}` } >Forecast</Link>
                </section>
            </div>
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    weather:   state.weather.get(0),
    timeOfDay: state.ui.get('timeOfDay'),
});

export default connect(mapStateToProps)(Home);
