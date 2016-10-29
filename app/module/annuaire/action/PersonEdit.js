import * as types from '../constant/PersonEdit';

export const addPersonToAnnuaire = ({nom, tel, port, email, categorie}) =>  {
    console.log('addPersonToAnnuaire');
    return {
        type: types.ACTION_ADD_PERSON,
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
        type: types.ACTION_UPDATE_PERSON,
        index
    };
};

export const removePersonFromAnnuaire = (index) => {
    console.log('removePersonFromAnnuaire');
    return {
        type: types.ACTION_REMOVE_PERSON,
        index
    };
};

export const sortPersonFromAnnuaire = (field) =>  {
    console.log('sortPersonFromAnnuaire');
    return {
        type: types.ACTION_SORT,
        field
    };
};