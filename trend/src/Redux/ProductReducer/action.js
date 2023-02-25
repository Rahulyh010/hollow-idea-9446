import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"
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
    console.log("running")
  dispatch(getDataRequest)

  axios.get("http://localhost:8080/mens-t-shirt")
  .then((res)=>{
    console.log(res)
    dispatch(getDataSuccess(res.data))
  }).catch((err)=>{
    dispatch(getDataFailure())
  })
} 