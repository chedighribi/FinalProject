import { GET_MY_ORDER ,RESET_MY_ORDERS} from "../constantes/actionType";

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
      case RESET_MY_ORDERS:
        return {
          ...state,
          myorder: [],
        };
    default:
      return state;
  }
};