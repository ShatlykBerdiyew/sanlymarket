import { getHomeDatas } from "../actions/homeActions";
import { BASE_URL } from "../urls"

export const asyncGetHomeDatas = () => {
    return function(dispatch){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        fetch(BASE_URL+"/api/home?include=brands,categories,collections,discount_products,new_products,slides,popular_searches,customer_searches", requestOptions)
            .then(res => res.json())
            .then(json => dispatch(getHomeDatas(json.data)))
            .catch(err => console.log(err))
    }
}