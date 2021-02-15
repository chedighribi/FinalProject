import axios from "axios";
import {GET_TRAITEUR} from "../constantes/actionType";


export const getTraiteur=()=>(dispatch)=>{
    axios
    .get('/api/traiteur' )
    .then((res)=> console.log(res.data) )
    .catch((err)=> console.log(err))
  };

export const addTraiteur =(request)=>(dispatch)=>{
    axios
    .post('/api/traiteur', request)
    .then(()=>dispatch(getTraiteur()))
    .catch((err)=> console.log(err))
}