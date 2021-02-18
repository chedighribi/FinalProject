import axios from "axios";
import {
  GET_TATA,
  RESET_TATA_ERRORS,
  TATA_ERRORS,
} from "../constantes/actionType";

export const getTata = () => (dispatch) => {
  axios
    .get("/api/tata")
    .then((res) => dispatch({ type: GET_TATA, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addTata = (newTata) => (dispatch) => {
  axios
    .post("/api/tataplus", newTata)
    .then((res) => {
      dispatch(getTata());
      console.log(res);
    })
    .catch((error) => {
      console.dir(error);
      const { errors} = error.response.data;
      if (Array.isArray(errors)) {
        dispatch({
          type: TATA_ERRORS,
          payload: errors,
        });
      }
      console.log(errors);
    });
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

export const resetTataErrors = () => (dispatch) => {
  dispatch({
    type: RESET_TATA_ERRORS,
  });
};
