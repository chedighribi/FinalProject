import {ADDTO_CARD} from '../constantes/actionType';

const initState = {
    Shopp:[],
};

export const cardReducer = (state = initState, {type,payload})=>{
    switch (type) {
        case ADDTO_CARD : 
        return {
            ...state,
            Shopp : [...state.Shopp,payload]
        };
        default :
        return state;
    }
};