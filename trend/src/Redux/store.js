import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// import {reducer as adminAuth} from "../Redux/AdminAuthReducer/reducer"



const rootReducer=combineReducers({
    
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))