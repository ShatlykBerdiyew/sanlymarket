import { GET_HOME_PAGE_DATAS } from "../types";

const init = {};

export const homeReducer = (state = init, action) => {
  switch (action.type) {
    case GET_HOME_PAGE_DATAS:
      return action.payload;
    default:
      return state;
  }
};
