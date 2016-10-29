import React from 'react';



const ComponentPersonItem = ({onUpdateClick, onRemoveClick, nom, tel, port, email, categorie, isCurrentEdited}) => (
    <tr className={isCurrentEdited && 'blue'}>
        <td>{nom}</td>
        <td>{tel}</td>
        <td>{port}</td>
        <td>{email}</td>
        <td>{categorie}</td>
        <td className="edit"><a href="#" onClick={onUpdateClick} title="Editer">Editer</a></td>
        <td className="suppr"><a href="#" onClick={onRemoveClick} title="Supprimer">Supprimer</a></td>
    </tr>
);


export default ComponentPersonItem;