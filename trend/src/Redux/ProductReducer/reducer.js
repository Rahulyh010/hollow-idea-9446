//import React from 'react'
import { CART, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from './actionType';
const initialState={
    isLoading:false,
    isError:false,
    products:[],
    cart:[]
}
export const reducer = (state=initialState,{type,payload}) => {
  switch (type) {
    case GET_DATA_REQUEST:
       return {...state,isLoading:true}
    case GET_DATA_SUCCESS:
        return {...state,isLoading:false,products:payload}
    case GET_DATA_FAILURE:
        return {...state,isLoading:false,isError:true} 
        case CART:
            return {...state,cart:[...state.cart,payload]}      
    default:
        return state;
  }
}

