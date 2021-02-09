import axios from "axios";
import {GET_BOX} from "../constantes/actionType"

export const getBox=()=> (dispatch) => {
    axios
    .get("/api/lunch")
    .then((res)=> dispatch({tpe: GET_BOX, payload:res.data}))
    .catch((err)=>{console.log(err)});
};