import * as types from '../constant/PersonEdit';
import * as sort from '../constant/PersonSort';

const addOrUpdatePerson = (state, person) => {
    console.log('addOrUpdatePerson');
    let find = false;

    for(var i in state.persons) {
        if(!state.persons[i].isCurrentEdited)
            continue;

        state.persons[i] = person;
        find = true;
    }

    if(!find)
        state.persons.push(person);

    return state;
};

const setEditedPerson = (state, index) => {
    console.log('setEditedPerson');
    for(var i in state.persons) {
        state.persons[i].isCurrentEdited = false;
    }
    state.persons[index].isCurrentEdited = true;
    return state;
};

const removePerson = (state, index) => {
    console.log('removePerson');
    state.persons.splice(index, 1);
    return state;
};

const setSortPerson = (state, action) => {
    console.log('setSortPerson');
    let order = (state.sort.field == action.field && state.sort.order == sort.SORT_ASC)? sort.SORT_DESC : sort.SORT_ASC;

    return {
        persons: state.persons,
        sort: {
            field: action.field,
            order
        }
    };
};

const sortPerson = (state) => {
    console.log('sortPerson');
    let field = state.sort.field, order = state.sort.order, persons = [...state.persons];

    if(order == sort.SORT_ASC) {
        persons.sort((a,b) => ( a[field].toLowerCase().localeCompare(b[field].toLowerCase()) ));
    } else {
        persons.sort((a,b) => ( b[field].toLowerCase().localeCompare(a[field].toLowerCase()) ));
    }

    return {
        persons: persons,
        sort: state.sort
    };
};



const ReducerPersonEdit = (state = {persons:[],sort:{field:sort.SORT_NOM,order:sort.SORT_ASC}}, action) => {
    console.log('ReducerPersonEdit');
    switch (action.type) {
        case types.ACTION_ADD_PERSON :
            return sortPerson(addOrUpdatePerson({...state}, {...action.person}));

        case types.ACTION_UPDATE_PERSON :
            return sortPerson(setEditedPerson({...state}, action.index));

        case types.ACTION_REMOVE_PERSON :
            return removePerson({...state}, action.index);
        
        case types.ACTION_SORT :
            return sortPerson(setSortPerson({...state}, action));
        
        default :
            return state;
    }
};


export default ReducerPersonEdit;