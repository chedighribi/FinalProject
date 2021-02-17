import axios from "axios";
import { GET_MY_ORDER } from "../constantes/actionType";


export const getMyOrder = () => (dispatch) => {
    const Sphone ={phone :{'phone': localStorage.getItem('phone')}}
    console.log(Sphone)
    axios
      .get("/api/myorder",Sphone.phone.phone)
      .then((res) => dispatch({ type: GET_MY_ORDER, payload: res.data }))     
      .catch((err) => console.log(err));
  };