import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 }

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        incriment: (state) => {
            ++state.count;
        },
        decriment: (state) => {
            --state.count;
        }
    }
})

export const { name } = authSlice