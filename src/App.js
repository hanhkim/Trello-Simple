import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import Header from './components/Header';
import { Body } from './components';
import 'antd/dist/antd.css';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <Body />
                </Fragment>
            </Provider>
        );
    }
}

export default App;

// https://pacific-sands-18345.herokuapp.com a
