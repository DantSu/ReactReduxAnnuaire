import * as types from '../constant/PersonEdit';


const edit = (action) => {
    return {
        ...action,
        type: undefined
    };
}


const ReducerPersonEdit = (state = [], action) => {
    switch (action.type) {
        case types.ADD_PERSON :
            return [
                ...state,
                edit(action)
            ]
            break;
        case types.UPDATE_PERSON :

            break;
        case types.REMOVE_PERSON :

            break;
        default :
            return state;
    }
}


export default ReducerPersonEdit;