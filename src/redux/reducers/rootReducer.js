import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { projectReducer } from "./project-reducer";
import { innvoiceClientReducer } from "./innvoiceClient-reducer";
import { innvoiceFreeReducer } from "./innvoiceFree-reducer";
import {usersReducer}  from './Users-reducer'

export const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer,
    innvoice:innvoiceClientReducer,
   /*  innvoice2:innvoiceFreeReducer, */
    users:usersReducer,
})