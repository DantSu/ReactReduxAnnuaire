import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionPersonEdit from '../action/PersonEdit';
import ComponentPersonList from '../component/PersonList';



const mapState = (state) => ({persons : state.annuaire.persons});


const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(ActionPersonEdit, dispatch)
    };
}


export default connect(mapState, mapDispatch)(ComponentPersonList);