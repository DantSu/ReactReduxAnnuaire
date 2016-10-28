import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import moduleReducer from '../../module/reducer';
import DevTools from '../container/DevTools';

const enhancer = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    
    if(initialState == undefined && localStorage.getItem('dataState'))
        initialState = JSON.parse(localStorage.getItem('dataState'));
    
    const store = createStore(moduleReducer, initialState, enhancer);
    
    store.subscribe(()=>{
        localStorage.setItem('dataState', JSON.stringify(store.getState()))
    })
    
    if (module.hot) {
        module.hot.accept(
            '../../module/reducer', () =>
            store.replaceReducer(require('../../module/reducer').default)
        );
    }

    return store;
}