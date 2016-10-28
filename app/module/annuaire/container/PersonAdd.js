import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionPersonEdit from '../action/PersonEdit';
import ComponentPersonAddForm from '../component/PersonAddForm';

const mapState = (state) => {
    console.log('getUpdatedPerson');
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

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(ActionPersonEdit, dispatch)
    };
}


export default connect(mapState,mapDispatch)(ComponentPersonAddForm)