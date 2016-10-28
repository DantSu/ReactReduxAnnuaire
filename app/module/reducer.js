import React from 'react';
import { combineReducers } from 'redux';
import * as Annuaire from './annuaire';

const moduleReducer = combineReducers({
    annuaire : Annuaire.reducer
});

export default moduleReducer;