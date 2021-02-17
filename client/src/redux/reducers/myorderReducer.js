import { GET_MY_ORDER } from "../constantes/actionType";

const initState = {
  myorder: [],
};

export const myorderReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MY_ORDER:
      return {
        ...state,
        myorder: payload,
      };
    default:
      return state;
  }
};