import axios from "axios"
import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./actionTypes"


export const postLoginRequestAction = () => {
    return {type:POST_LOGIN_REQUEST}
}

export const postLoginFailureAction = () => {
    return {type:POST_LOGIN_FAILURE}
}

export const postLoginSuccessAction = (payload) => {
    return {type:POST_LOGIN_SUCCESS,payload}
}


export const LoginProcess = (userData) => (dispatch) => {
    console.log(userData)
    dispatch(postLoginRequestAction());
    axios.post("https://reqres.in/api/login",userData).then((res)=>{
        dispatch(postLoginSuccessAction(res.data.token))
    }).catch((err)=>{
        dispatch(postLoginFailureAction())
    })
}

