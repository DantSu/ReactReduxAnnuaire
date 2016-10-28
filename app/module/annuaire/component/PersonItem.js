import React from 'react';



const ComponentPersonItem = ({onUpdateClick, onRemoveClick, nom, tel, port, email, categorie, isCurrentEdited}) => {
    let trClass = '';
    
    if(isCurrentEdited)
        trClass = 'blue';

    return (
        <tr className={trClass}>
            <td>{nom}</td>
            <td>{tel}</td>
            <td>{port}</td>
            <td>{email}</td>
            <td>{categorie}</td>
            <td className="edit"><a href="#" onClick={onUpdateClick}>E</a></td>
            <td className="suppr"><a href="#" onClick={onRemoveClick}>X</a></td>
        </tr>
    );
}


export default ComponentPersonItem;