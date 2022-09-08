import { GET_HOME_PAGE_DATAS } from "../types";

export const getHomeDatas = (data) => {
    return{
        type: GET_HOME_PAGE_DATAS,
        payload:data
    };
}