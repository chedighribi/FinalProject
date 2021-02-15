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

export const addBox = (newBox) => (dispatch) => {
  axios
    .post("/api/addbox", newBox)
    .then((res) => dispatch(getBox()))
    .catch((err) => {
      console.log(err);
    });
};

export const deleteBox = ({ id }) => (dispatch) => {
  axios
    .delete(`/api/deletebox/${id}`)
    .then((res) =>
      dispatch(
        getBox()
    )
    )
    .catch((err) => {
      console.log(err);
    });
};

//cors middleware
