import React from 'react';
import { connect } from 'react-redux'
import * as types from '../constant/PersonEdit';

import ComponentPersonList from '../component/PersonList';

const getListPersons = (state) => ({persons : state.annuaire.persons});

const updatePersonFromAnnuaire = (index) => (dispatch, getState) => (
    dispatch({
        type : types.UPDATE_PERSON,
        index
    })
);
const removePersonFromAnnuaire = (index) => (dispatch, getState) => (
    dispatch({
        type : types.REMOVE_PERSON,
        index
    })
);

export default connect(getListPersons, {updatePersonFromAnnuaire, removePersonFromAnnuaire})(ComponentPersonList);