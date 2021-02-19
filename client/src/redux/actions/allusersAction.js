import axios from "axios";
import { GET_ALL_USERS } from "../constantes/actionType";

export const getAllUsers = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) => dispatch({ type: GET_ALL_USERS, payload: res.data }))
    .catch((err) => {
      console.log(err);
    });
};