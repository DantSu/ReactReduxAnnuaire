import React from 'react';



class ComponentPersonAddForm extends React.Component {
    componentDidUpdate() {
        this.inputNom.value = this.props.nom;
        this.inputTel.value = this.props.tel;
        this.inputPort.value = this.props.port;
        this.inputEmail.value = this.props.email;
        this.inputCategorie.value = this.props.categorie;
    }
    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                this.props.addPersonToAnnuaire(
                    this.inputNom.value,
                    this.inputTel.value,
                    this.inputPort.value,
                    this.inputEmail.value,
                    this.inputCategorie.value
                );
                this.inputNom.value = '';
                this.inputTel.value = '';
                this.inputPort.value = '';
                this.inputEmail.value = '';
                this.inputCategorie.value = '';
            }}>
                <label>Nom et Prénom : <input type="text"  name="nom" required ref={node => {this.inputNom = node;}}/></label>
                <label>Téléphone :     <input type="tel"   name="tel"          ref={node => {this.inputTel = node;}}/></label>
                <label>Portable :      <input type="tel"   name="portable"     ref={node => {this.inputPort = node;}}/></label>
                <label>Email :         <input type="email" name="email"        ref={node => {this.inputEmail = node;}}/></label>
                <label>Catégorie :
                    <select name="categorie" ref={node => {this.inputCategorie = node;}} required>
                        <option>Amis</option>
                        <option>Professionnel</option>
                        <option>Famille</option>
                    </select>
                </label>
                <input type="submit" value="Enregistrer"/>
            </form>
        );
    }
};


export default ComponentPersonAddForm;