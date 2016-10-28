import React, { Component } from 'react';
import { Provider } from 'react-redux';
import moduleComponent from '../../module/component';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <moduleComponent />
            </Provider>
        );
    }
}