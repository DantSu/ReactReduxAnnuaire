import React from 'react';



const ComponentPersonItem = ({onUpdateClick, onRemoveClick, nom, tel, port, email, categorie}) => (
    <tr>
        <td>{nom}</td>
        <td>{tel}</td>
        <td>{port}</td>
        <td>{email}</td>
        <td>{categorie}</td>
        <td><a href="#" onClick={onUpdateClick}>E</a></td>
        <td><a href="#" onClick={onRemoveClick}>X</a></td>
    </tr>
);


export default ComponentPersonItem;