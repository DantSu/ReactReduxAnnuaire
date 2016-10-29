import React from 'react';

const ComponentPersonSort = ({actions, sort, nameField, nameColomn}) => (
    <td className={(sort.field == nameField) && 'actif ' + sort.order}>
        <a href="#" onClick={e => {e.preventDefault(); actions.sortPersonFromAnnuaire(nameField);}}>
            {nameColomn}
        </a>
    </td>
);


export default ComponentPersonSort;