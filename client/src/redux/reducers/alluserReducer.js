import { GET_ALL_USERS } from "../constantes/actionType";

const initState = {
  allusers: [],
};

export const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allusers: payload,
      };
    default:
      return state;
  }
};