// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import { Input, Button, Form, Error } from '../../../components';

// Action
import { getWeather } from '../../../store/reducers/weather/actions';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            getWeather,
        },
        dispatch
    ),
});

@connect(null, mapDispatchToProps)
class AddCity extends Component {
    state = {
        city:    '',
        country: '',
        error:   '',
    };

    _handleForm = (event) => {
        const { city, country } = this.state;
        const { actions } = this.props;

        event.preventDefault();

        if (!city || !country) {
            this.setState({
                error: 'City and Country cant be blank',
            });

            return null;
        }

        actions.getWeather({
            city,
            country,
        });
    };

    _handleCity = (event) => {
        const { value } = event.target;

        if (/^[a-zA-Z- ]+$/.test(value) || !value) {
            this.setState({
                city: value,
            });
        }
    };

    _handleCountry = (event) => {
        const { value } = event.target;

        if (/^[a-zA-Z- ]+$/.test(value) || !value) {
            this.setState({
                country: value,
            });
        }
    };

    render () {
        const { city, country, error } = this.state;

        return (
            <Form onSubmit = { this._handleForm }>
                { error ? <Error>{ error }</Error> : null }
                <Input
                    name = 'city'
                    placeholder = 'City'
                    type = 'text'
                    value = { city }
                    onChange = { this._handleCity }
                />
                <Input
                    name = 'country'
                    placeholder = 'Country'
                    type = 'text'
                    value = { country }
                    onChange = { this._handleCountry }
                />
                <Button type = 'submit'>Get Weather</Button>
            </Form>
        );
    }
}

export default AddCity;
