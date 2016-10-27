import React from 'react';



const ComponentPersonItem = ({nom, tel, port, email, categorie}) => (
    <tr>
        <td>{nom}</td>
        <td>{tel}</td>
        <td>{port}</td>
        <td>{email}</td>
        <td>{categorie}</td>
        <td><a href="#">E</a></td>
        <td><a href="#">X</a></td>
    </tr>
);


export default ComponentPersonItem;