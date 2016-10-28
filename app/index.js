import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './root/store/configureStore';
import Root from './root/container/Root';

const store = configureStore();

render(
    <AppContainer>
        <Root
            store={ store }
        />
    </AppContainer>,
    document.getElementById('app')
);


if (module.hot) {
    module.hot.accept('./root/container/Root', () => {
        const RootContainer = require('./root/container/Root').default;
        render(
            <AppContainer>
                <RootContainer
                    store={ store }
                />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}