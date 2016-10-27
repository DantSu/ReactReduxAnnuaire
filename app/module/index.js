import React from 'react';
import { combineReducers } from 'redux';

import * as Annuaire from './annuaire';

export const GlobalComponent = () => {
    return (<Annuaire.component />);
};

export const GlobalReducer = combineReducers({
    annuaire : Annuaire.reducer
});