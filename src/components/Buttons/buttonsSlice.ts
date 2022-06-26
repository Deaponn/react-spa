import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = 1;

export const buttonsSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        increment: (state) => {
            return state < 3 ? state + 1 : state;
        },
        decrement: (state) => {
            return state > 1 ? state - 1 : state;
        },
    },
});

export const selectPage = (state: RootState) => state.page;

export const { increment, decrement } = buttonsSlice.actions;

export default buttonsSlice.reducer;
