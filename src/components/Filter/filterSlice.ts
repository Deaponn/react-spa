import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = "";

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        handleInput: (state, action: PayloadAction<string>) => {
            const value = action.payload;
            if (isNaN(parseInt(value[value.length - 1]))) return value.substring(0, value.length - 1);
            return value;
        },
    },
});

export const selectFilter = (state: RootState) => state.filter;

export const { handleInput } = filterSlice.actions;

export default filterSlice.reducer;
