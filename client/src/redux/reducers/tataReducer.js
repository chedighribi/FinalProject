import {
  GET_TATA,
  RESET_TATA_ERRORS,
  TATA_ERRORS,
} from "../constantes/actionType";

const initState = {
  tata: [],
  errors: [],
};

export const tataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TATA:
      return {
        ...state,
        tata: payload,
      };
    case TATA_ERRORS:
      return {
        ...state,
        errors: payload,
      };
    case RESET_TATA_ERRORS:
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
};
