  import {ADDTO_CARD,ADD_NUM, RESET_SHOP} from '../constantes/actionType';
export const ADD=(x)=>{
    return{
        type :ADDTO_CARD,
        payload:x
    }
}
export const ADD2=(x)=>{
  return{
      type :ADD_NUM,
      payload:x
  }
}

export const RESET=(x)=>{
  return{
      type :RESET_SHOP,
      
  }
}