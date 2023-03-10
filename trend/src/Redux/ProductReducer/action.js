import { CART, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"
import axios from "axios"

 const getDataRequest = ()=>{
    return {type:GET_DATA_REQUEST}
}
 const getDataSuccess = (payload)=>{
    return {type:GET_DATA_SUCCESS,payload}
}
 const getDataFailure = ()=>{
    return {type:GET_DATA_FAILURE}
}

export const getProductData=(dispatch)=>{
   // console.log("running")
  dispatch(getDataRequest)

  axios.get("https://product-api-q2uk.onrender.com/mens-jeans")
  .then((res)=>{
    //console.log(res)
    dispatch(getDataSuccess(res.data))
  }).catch((err)=>{
    dispatch(getDataFailure())
  })
} 

// ${parm.mens-jeans&&parm.mens-tshirt }

export function handleCart(payload){
  console.log(payload)
  return {type:CART,payload}
}