import axios from "axios";
import { GET_BOX } from "../constantes/actionType";

export const getBox = () => (dispatch) => {
  axios
    .get("/api/lunch")
    .then((res) => dispatch({ type: GET_BOX, payload: res.data }))
    .catch((err) => {
      console.log(err);
    });
};

export const addBox = (newBox) => async (dispatch) => {
  try {
    const res = await axios.post("/api/addbox", newBox);
    dispatch(getBox());
  } catch (error) {
    console.log(error);
  }
};


export const deleteBox = ( _id ) => (dispatch) => {
  axios
    .delete(`/api/deletebox/${_id}`)
    .then((res) => dispatch(getBox()))
    .catch((err) => {
      console.log(err);
    });
};

export const editBox = ( _id,boxedited ) => (dispatch) => {
  axios
    .put(`/api/editbox/${_id}`,boxedited)
    .then((res) => dispatch(getBox()))
    .catch((err) => {
      console.log(err);
    });
};

//cors middleware
