import axios from "axios";

export const getContactUs = () => (dispatch) => {
  axios
    .get("/api/contactus")
    .then((res) => console.log(res.data)) //dispatch({ type: GET_CONTACT_US, payload: res.data }))
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
