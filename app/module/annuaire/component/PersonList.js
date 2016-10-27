import React from 'react';
import ComponentPersonItem from './PersonItem';

const ComponentPersonList = ({persons, updatePersonFromAnnuaire, removePersonFromAnnuaire}) => (
    <table>
        <thead>
        <tr>
            <td>Nom</td>
            <td>Tel</td>
            <td>Port</td>
            <td>Email</td>
            <td>Catégorie</td>
            <td>Edit</td>
            <td>Suppr</td>
        </tr>
        </thead>
        <tbody>
        {
            persons.map(
                (person, index) => (
                    <ComponentPersonItem key={index} {...person}
                                         onUpdateClick={
                                            e => {
                                                e.preventDefault();
                                                updatePersonFromAnnuaire(index);
                                            }}
                                         onRemoveClick={
                                            e => {
                                                e.preventDefault();
                                                removePersonFromAnnuaire(index);
                                            }}
                    />
                )
            )
        }
        </tbody>
    </table>
);


export default ComponentPersonList;