import { ADD_BOX, GET_BOX } from "../constantes/actionType";

const initState = {
  boxs: [],
};

export const boxReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_BOX:
      return {
        ...state,
        boxs: payload,
      };
    default:
      return state;
  }
};
