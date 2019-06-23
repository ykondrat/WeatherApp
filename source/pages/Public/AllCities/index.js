// Core
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Instruments
import { convertToCelsius } from '../../../instruments';

// Components
import {
    WeatherIcon,
    Cross
} from '../../../components';

import { removeCityWeather } from '../../../store/reducers/weather/actions';

const Container = styled.div`
    margin: 40px 20px;
    color: #fff;
    
    section {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #fff;
        justify-content: space-between;
        
        a {
            display: flex;
            align-items: center;
            color: #fff;
            text-decoration: none;
        }
        main {
            display: flex;
            align-items: center;
        }
        h1 {
            font-weight: bold;
            font-size: 24px;
        }
        h2 {
            font-size: 18px;
            margin-right: 10px;
        }
    }
`;

const AllCities = (props) => {
    const { weather, color, actions } = props;
    const data = weather.toJS();

    return (
        <Container>
            {
                data.map((item) => (
                    <section
                        key = { item.currentWeather.id }>
                        <Link to = { `/forecast/${item.currentWeather.name}` }>
                            <h2>{ item.currentWeather.name }</h2>
                            <h1>{ convertToCelsius(item.currentWeather.main.temp) }&deg;C</h1>
                            <WeatherIcon
                                color = { color }
                                forecast = { item.currentWeather.weather[0].description }
                            />
                        </Link>
                        <div>
                            <Cross
                                onClick = { () => actions.removeCityWeather({ id: item.currentWeather.id, city: item.currentWeather.name }) }
                            />
                        </div>
                    </section>
                ))
            }
        </Container>
    );
};

const mapStateToProps = (state) => ({
    weather:   state.weather,
    timeOfDay: state.ui.get('timeOfDay'),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            removeCityWeather,
        },
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCities);
