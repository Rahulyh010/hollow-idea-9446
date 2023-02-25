import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as product} from "./ProductReducer/reducer"
import {reducer as adminauth} from "../Redux/AdminAuthReducer/reducer"




const rootReducer=combineReducers({
    product,
    adminauth
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))