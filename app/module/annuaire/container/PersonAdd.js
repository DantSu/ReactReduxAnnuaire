import React from 'react';
import { connect } from 'react-redux'
import * as types from '../constant/PersonEdit';
import ComponentPersonAddForm from '../component/PersonAddForm';

const getUpdatedPerson = (state) => {
    var persons = state.annuaire.persons;
    for(var i in persons) {
        if(!persons[i].isCurrentEdited)
            continue;
        
        return {...persons[i]};
    }

    return {
        nom : '',
        tel : '',
        port : '',
        email : '',
        categorie : '',
        isCurrentEdited : ''
    };
};

const addPersonToAnnuaire = (nom, tel, port, email, categorie) => (dispatch, getState) => (
    dispatch({
        type : types.ADD_PERSON,
        person : {
            nom,
            tel,
            port,
            email,
            categorie,
            isCurrentEdited: false
        }
    })
);


export default connect(getUpdatedPerson,{addPersonToAnnuaire})(ComponentPersonAddForm)