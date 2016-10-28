import * as types from '../constant/PersonEdit';

export const addPersonToAnnuaire = ({nom, tel, port, email, categorie}) =>  {
    console.log('addPersonToAnnuaire');
    return {
        type: types.ADD_PERSON,
        person: {
            nom,
            tel,
            port,
            email,
            categorie,
            isCurrentEdited: false
        }
    };
};

export const updatePersonFromAnnuaire = (index) => {
    console.log('updatePersonFromAnnuaire');
    return {
        type: types.UPDATE_PERSON,
        index
    };
};

export const removePersonFromAnnuaire = (index) => {
    console.log('removePersonFromAnnuaire');
    return {
        type: types.REMOVE_PERSON,
        index
    };
};