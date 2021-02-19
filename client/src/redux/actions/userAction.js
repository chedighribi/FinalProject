import axios from "axios";
import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
  RESET_AUTH_ERRORS,
} from "../constantes/actionType";

//Set the user loading
const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};

// Register USer
export const registerUser = (formData) => async (dispatch) => {
  // dispatch(userLoading());
  try {
    const res = await axios.post("/api/register", formData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data, // { msg: 'User registred with success', user, token }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      dispatch({
        type: AUTH_ERRORS,
        payload: errors,
      });
    }
    console.log(errors);
  }
};

// Login User
export const loginUser = (formData) => async (dispatch) => {
  // dispatch(userLoading());

  try {
    const res = await axios.post("/api/login", formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data, // { msg: 'Logged in with success', user, token }
    });
    dispatch({
      type: RESET_AUTH_ERRORS,
    });
  } catch (error) {
    console.dir(error);

    const { errors } = error.response.data;

    if (Array.isArray(errors)) {
      dispatch({
        type: AUTH_ERRORS,
        payload: errors,
      });
    }
    console.log(errors);
  }
};

// Get auth user
export const getAuthUser = () => async (dispatch) => {
  dispatch(userLoading());
  if (localStorage.token) {
    axios.defaults.headers.common["auth-token"] = localStorage.token;
    // localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common["auth-token"];
    // localStorage.removeItem("token");0  }
  }
  try {
    //headers
    /*const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },

    };        
    console.log(config) */

    const res = await axios.get("/api/user");

    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};

export const resetAuthErrors = () => (dispatch) => {
  dispatch({
    type: RESET_AUTH_ERRORS,
  });
};


