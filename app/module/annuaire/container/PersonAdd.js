import React from 'react';
import { connect } from 'react-redux'
import * as types from '../constant/PersonEdit';
import {getListPersons} from './PersonList';
import ComponentPersonAddForm from '../component/PersonAddForm';

const getUpdatedPerson = (state) => ({
    nom : '',
    tel : '',
    port : '',
    email : '',
    categorie : ''
});

const addPersonToAnnuaire = (nom, tel, port, email, categorie) => (dispatch, getState) => (
    dispatch({
        type : types.ADD_PERSON,
        nom,
        tel,
        port,
        email,
        categorie
    })
);


export default connect(getUpdatedPerson,{addPersonToAnnuaire})(ComponentPersonAddForm)