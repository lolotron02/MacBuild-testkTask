import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice";

const reducers = combineReducers({
    [authSlice.name]: authSlice.reducer,
})

export const store = configureStore({
    reducer: reducers
})