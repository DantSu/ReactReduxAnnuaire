import * as types from '../constant/PersonEdit';

const addOrUpdatePerson = (state, person) => {
    let find = false;

    for(var i in state) {
        if(!state[i].isCurrentEdited)
            continue;

        state[i] = person;
        find = true;
    }

    if(!find)
        state.push(person);

    return state;
};

const setEditedPerson = (state, index) => {
    for(var i in state) {
        state[i].isCurrentEdited = false;
    }
    state[index].isCurrentEdited = true;
    return state;
};

const removePerson = (state, index) => {
    state.splice(index, 1);
    return state;
}

const ReducerPersonEdit = (state = [], action) => {
    switch (action.type) {
        case types.ADD_PERSON :
            return addOrUpdatePerson([...state], {...action.person});

        case types.UPDATE_PERSON :
            return setEditedPerson([...state], action.index);

        case types.REMOVE_PERSON :
            return removePerson([...state], action.index);

        default :
            return state;
    }
};


export default ReducerPersonEdit;