import React from 'react';



const ComponentPersonAddForm = ({addPersonToAnnuaire}) => {
    let inputNom, inputTel, inputPort, inputEmail, inputCategorie;
    return (
        <form onSubmit={
            e => {
                e.preventDefault();
                addPersonToAnnuaire(inputNom.value, inputTel.value, inputPort.value, inputEmail.value, inputCategorie.value);
            }}>
            <label>Nom et Prénom : <input type="text"  name="nom" required ref={node => {inputNom = node;}} /></label>
            <label>Téléphone :     <input type="tel"   name="tel"          ref={node => {inputTel = node;}}/></label>
            <label>Portable :      <input type="tel"   name="portable"     ref={node => {inputPort = node;}}/></label>
            <label>Email :         <input type="email" name="email"        ref={node => {inputEmail = node;}}/></label>
            <label>Catégorie :
                <select name="categorie" ref={node => {inputCategorie = node;}} required>
                    <option>Amis</option>
                    <option>Professionnel</option>
                    <option>Famille</option>
                </select>
            </label>
            <input type="submit" value="Enregistrer"/>
        </form>
    );
};


export default ComponentPersonAddForm;