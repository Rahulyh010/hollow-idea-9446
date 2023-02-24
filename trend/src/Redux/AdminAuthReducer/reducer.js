import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./actionTypes";

const intialState = {
    isLoading:false,
    isError:false,
    isAuth:false,
    token:""
}

export const reducer = (state=intialState,{type,payload}) => {
    switch (type) {
        case POST_LOGIN_REQUEST:
            return {...state,isLoading:true}
        case POST_LOGIN_SUCCESS:
            return {...state,isLoading:false,isAuth:true,token:payload}    
        case POST_LOGIN_FAILURE:
            return {...state,isError:true,isAuth:false,token:""}
        default:
            return state;
    }
}