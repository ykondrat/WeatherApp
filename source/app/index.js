// Core
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// Route
import { Public } from '../navigation';

// Actions
import { initializeAsync } from '../store/reducers/ui/actions';

// Components
import { Loading } from '../components';

// Styles
const GlobalStylePublic = createGlobalStyle`
    html {
        background-color: ${(props) => props.color};
    }
`;

const mapStateToProps = (state) => ({
    isInitialized: state.ui.get('isInitialized'),
    timeOfDay:     state.ui.get('timeOfDay'),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            initializeAsync,
        },
        dispatch
    ),
});

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

    componentDidMount () {
        this.props.actions.initializeAsync();
    }

    _setBackgroundColor = (currentTime) => {
        switch (currentTime) {
            case 'night':
                return '#172c41';
            case 'morning':
                return '#5bd0ff';
            case 'day':
                return '#27aae2';
            case 'evening':
                return '#1299ce';
            default:
                return '#27aae2';
        }
    };

    render () {
        const { isInitialized, timeOfDay } = this.props;
        const color = this._setBackgroundColor(timeOfDay);

        if (!isInitialized) {
            return (<Loading />);
        }

        return (
            <Fragment>
                <GlobalStylePublic color = { color } />
                <Public color = { color } />
            </Fragment>
        );
    }
}

export default App;
