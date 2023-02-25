import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as product} from "./ProductReducer/reducer"
import {reducer as adminauth} from "../Redux/AdminAuthReducer/reducer"
import {reducer as adminProduct} from "./AdminProductReducer/reducer"




const rootReducer=combineReducers({
    product,
    adminauth,
    adminProduct
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))