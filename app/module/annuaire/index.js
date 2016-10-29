import React from 'react';
import { combineReducers } from 'redux';

import ReducerPersonEdit from './reducer/PersonEdit';

import ContainerPersonList from './container/PersonList';
import ContainerPersonAdd from './container/PersonAdd';


export const component = () => {
    return (
        <div>
            <h1>Mon Annuaire</h1>
            <ContainerPersonList />
            <ContainerPersonAdd />
        </div>
    );
};

export const reducer = ReducerPersonEdit;