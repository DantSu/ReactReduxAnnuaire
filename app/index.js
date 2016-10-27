import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import { GlobalComponent, GlobalReducer } from './module';


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}


const store = createStore(
    GlobalReducer,
    applyMiddleware(...middleware)
);

render(
    <Provider store={store}>
        <GlobalComponent />
    </Provider>,
    document.getElementById('app')
);