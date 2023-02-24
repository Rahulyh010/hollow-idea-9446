import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as product} from "./ProductReducer/reducer"





const rootReducer=combineReducers({
    product,
   
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))