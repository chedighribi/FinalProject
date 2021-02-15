import { GET_CONTACT_US } from "../constantes/actionType";

const initState = {
  contactUs: [],
};

export const ContactUsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_US:
      return {
        ...state,
        contactUs: payload,
      };
    default:
      return state;
  }
};
