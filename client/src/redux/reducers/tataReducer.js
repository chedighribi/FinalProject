import {GET_TATA} from '../constantes/actionType';

const initState = {
    tata:[],
};

export const tataReducer = (state = initState, {type,payload})=>{
    switch (type) {
        case GET_TATA : 
        return {
            ...state,
            tata : payload
        };
        default :
        return state;
    }
};