import React from 'react';
import { connect } from 'react-redux'

import ComponentPersonList from '../component/PersonList';

export const getListPersons = (state) => ({persons : state.annuaire.persons});

export default connect(getListPersons)(ComponentPersonList);