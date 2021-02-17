import axios from "axios";
import { GET_TATA } from "../constantes/actionType";

export const getTata = () => (dispatch) => {
  axios
    .get("/api/tata")
    .then((res) => dispatch({ type: GET_TATA, payload: res.data }))
    .catch((err) => console.log(err));
};

export const editTata = (id, editedTata) => (dispatch) => {
  axios
    .put(`/api/edittata/${id}`, editedTata)
    .then((res) => dispatch(getTata()))
    .catch((err) => console.log(err));
};

export const deleteTata = (id) => (dispatch) => {
  axios
    .delete(`/api/deletetata/${id}`)
    .then((res) => dispatch(getTata()))
    .catch((err) => console.log(err));
};

export const addTata = (newTata) => (dispatch) => {
  axios
    .post("/api/tataplus", newTata)
    .then((res) => dispatch(getTata()))
    .catch((err) => console.log(err));
};
