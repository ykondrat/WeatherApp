// Core
import React from 'react';

// Components
import {
    Cloudy,
    Flurries,
    Rainy,
    Sunny,
    SunShower,
    ThunderStorm
} from '../index';

const WeatherIcon = (props) => {
    const { forecast, timeOfDay, color } = props;

    if (forecast === 'clear sky' && timeOfDay !== 'night') {
        return <Sunny color = { color } />;
    } else if (forecast.split(' ').includes('clouds')) {
        return <Cloudy color = { color } />;
    } else if (forecast === 'light rain' && timeOfDay !== 'night') {
        return <SunShower color = { color } />;
    } else if (forecast.split(' ').includes('rain')) {
        return <Rainy color = { color } />;
    } else if (forecast.split(' ').includes('snow')) {
        return <Flurries color = { color } />;
    } else if (forecast.split(' ').includes('thunderstorm')) {
        return <ThunderStorm color = { color } />;
    }

    return null;
};

export default WeatherIcon;
