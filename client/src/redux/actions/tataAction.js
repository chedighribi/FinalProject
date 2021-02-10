import axios from "axios";
import {GET_TATA} from "../constantes/actionType";

export const getTata=()=>(dispatch)=>{
  axios
  .get('/api/tata' )
  .then((res)=>dispatch({type : GET_TATA, payload:res.data}))
  .catch((err)=> console.log(err))
}