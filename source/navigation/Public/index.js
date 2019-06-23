// Core
import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Route config
import { routes } from './routes';

// Components
import { Navigation } from '../../components';

// Pages
import { PublicHome, Forecast, AllCities, AddCity } from '../../pages';

const Public = ({ color }) => {
    return (
        <Fragment>
            <Navigation />
            <Switch location = { location } >
                <Route
                    exact
                    path = { routes.home }
                    render = { (props) => (<PublicHome { ...props } color = { color } />) }
                />
                <Route
                    exact
                    path = { routes.forecast }
                    render = { (props) => (<Forecast { ...props } color = { color } />) }
                />
                <Route
                    exact
                    path = { routes.cities }
                    render = { (props) => (<AllCities { ...props } color = { color } />) }
                />
                <Route
                    exact
                    path = { routes.addCity }
                    render = { (props) => (<AddCity { ...props } color = { color } />) }
                />
                <Redirect to = { '/' } />
            </Switch>
        </Fragment>
    );
};

export default Public;
