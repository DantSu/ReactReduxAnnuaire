import React from 'react';
import * as sort from '../constant/PersonSort';
import ComponentPersonItem from './PersonItem';
import ComponentPersonSort from './PersonSort';

const ComponentPersonList = ({state, actions}) => {
    console.log(state);
    return (
        <table>
            <thead>
            <tr>
                <ComponentPersonSort {...{
                    actions,
                    sort: state.sort,
                    nameField: sort.SORT_NOM,
                    nameColomn: 'Nom'
                }} />
                <ComponentPersonSort {...{
                    actions,
                    sort: state.sort,
                    nameField: sort.SORT_TEL,
                    nameColomn: 'Téléphone'
                }} />
                <ComponentPersonSort {...{
                    actions,
                    sort: state.sort,
                    nameField: sort.SORT_PORT,
                    nameColomn: 'Portable'
                }} />
                <ComponentPersonSort {...{
                    actions,
                    sort: state.sort,
                    nameField: sort.SORT_EMAIL,
                    nameColomn: 'Email'
                }} />
                <ComponentPersonSort {...{
                    actions,
                    sort: state.sort,
                    nameField: sort.SORT_CATEGORIE,
                    nameColomn: 'Catégorie'
                }} />
                <td className="edit">Edit</td>
                <td className="suppr">Suppr</td>
            </tr>
            </thead>
            <tbody>
            {
                state.persons.map(
                    (person, index) => (
                        <ComponentPersonItem key={index} {...person}
                                             onUpdateClick={e => {e.preventDefault(); actions.updatePersonFromAnnuaire(index);}}
                                             onRemoveClick={e => {e.preventDefault(); actions.removePersonFromAnnuaire(index);}}
                        />
                    )
                )
            }
            </tbody>
        </table>
    );
}


export default ComponentPersonList;