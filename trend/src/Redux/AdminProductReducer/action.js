import axios from "axios";
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";


export const getProductSuccess = (payload) => {
    return {type:GET_PRODUCT_SUCCESS,payload};
};

export const postProductSuccess = () => {
    return {type:POST_PRODUCT_SUCCESS};
};

export const productrequest = () => {
    return {type:PRODUCT_REQUEST};
};

export const productFailure = () => {
    return {type:PRODUCT_FAILURE};
};

export const addProduct = (payLoad) => (dispatch) => {
    
    dispatch(productrequest());
    axios.post("https://product-api-q2uk.onrender.com/new_Arrival",payLoad).then(()=>{
        
        dispatch(postProductSuccess())
        
    }).catch((err)=>{
        
        dispatch(productFailure())
        
    })

}

export const getProduct = (dispatch) => {
    dispatch(productrequest());
    axios.get("https://product-api-q2uk.onrender.com/new_Arrival").then((res)=>{
        console.log(res)
        dispatch(getProductSuccess(res.data))
    }).catch((err)=>{
        dispatch(productFailure())
    })
}