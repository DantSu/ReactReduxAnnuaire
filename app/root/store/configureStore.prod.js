import { createStore } from 'redux';
import moduleReducer from '../../module/reducer';

export default function configureStore(initialState) {

    if(initialState == undefined && localStorage.getItem('dataState'))
        initialState = JSON.parse(localStorage.getItem('dataState'));

    const store = createStore(moduleReducer, initialState);

    store.subscribe(()=>{
        localStorage.setItem('dataState', JSON.stringify(store.getState()))
    })

    return store;
}