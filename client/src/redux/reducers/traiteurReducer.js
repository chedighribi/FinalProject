import {GET_TRAITEUR} from '../constantes/actionType';

const initState = {
    request:[],
};

export const traiteurReducer = (state = initState, {type,payload})=>{
    
  switch (type) {
        case GET_TRAITEUR : 
        return {
            ...state,
            request : payload,
        };
        default :
        return state;
    }
};