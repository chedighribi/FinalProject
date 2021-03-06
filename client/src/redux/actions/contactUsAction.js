import axios from "axios";
import { GET_CONTACT_US } from "../constantes/actionType";

export const getContactUs = () => (dispatch) => {
  axios
    .get("/api/contactus")
    .then((res) => dispatch({ type: GET_CONTACT_US, payload: res.data }))
    .catch((err) => console.log(err));
};

export const cntctUs = (xdata) => async (dispatch) => {
  try {
    const res = await axios.post("/api/contactus", xdata);
    dispatch(getContactUs());
  } catch (error) {
    
    console.log(error);
  }
};
