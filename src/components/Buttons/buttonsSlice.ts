import { Action, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = 1;

export const buttonsSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        },
    },
});

export const selectPage = (state: RootState) => state.page;

export const { increment, decrement } = buttonsSlice.actions;

export default buttonsSlice.reducer;
