import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ModuleComponent from '../../module/component';
import DevTools from './DevTools';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <ModuleComponent />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}