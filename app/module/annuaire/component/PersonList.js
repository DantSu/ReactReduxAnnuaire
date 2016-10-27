import React from 'react';
import ComponentPersonItem from './PersonItem';

const ComponentPersonList = ({persons}) => {
    console.log(persons);
    return (
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
                        <ComponentPersonItem key={index} {...person} />
                    )
                )
            }
            </tbody>
        </table>
    );
}


export default ComponentPersonList;