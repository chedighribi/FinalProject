import {ADDTO_CARD, ADD_NUM} from '../constantes/actionType';

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
        case ADD_NUM : 
        return {
            ...state,
            Shopp : state.Shopp.map((x)=>(x._id=== payload._id)?{...x,num:x.num+1} : x )
        };
        default :
        return state;
    }
};