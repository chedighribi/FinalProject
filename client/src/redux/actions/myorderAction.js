import axios from "axios";
import { GET_MY_ORDER } from "../constantes/actionType";


export const getMyOrder = () => (dispatch) => {
    axios
      .get("/api/myorders")
      .then((res) =>   dispatch({ type: GET_MY_ORDER, payload: res.data.lunchs }))     
      .catch((err) => console.log(err));
  };