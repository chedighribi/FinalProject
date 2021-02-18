import axios from "axios";
import { GET_MY_ORDER, RESET_MY_ORDERS } from "../constantes/actionType";


export const getMyOrder = () => (dispatch) => {
    axios
      .get("/api/myorders")
      .then((res) =>   dispatch({ type: GET_MY_ORDER, payload: res.data.lunchs }))     
      .catch((err) => console.log(err));
  };

  export const resetorder =()=>(dispatch)=>{
      dispatch({
          type : RESET_MY_ORDERS 
      })
  }