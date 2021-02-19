import { GET_ALL_ORDERS, GET_MY_ORDER ,RESET_MY_ORDERS} from "../constantes/actionType";

const initState = {
  myorder: [],
  allorder : [],
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
        case GET_ALL_ORDERS:
          return {
            ...state,
            allorder: payload,
          };
    default:
      return state;
  }
};