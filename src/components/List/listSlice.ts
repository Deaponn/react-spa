import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, ItemAPI } from "./listAPI";

export type Data = {
    items: ItemAPI[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
};

const initialState: Data = {
    items: [],
    status: "idle",
    error: null,
};

export const fetchNewItems = createAsyncThunk(
    "list/fetchNewItems",
    async (page: number) => {
        const response = await fetchItems(page);
        return response.data;
    },
    {
        condition: (page) => {
            if (page === 0 || page === 4) return false;
            return true;
        },
    }
);

export const listSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchNewItems.pending, (state) => {
            state.items = [];
            state.status = "loading"
        });
        builder.addCase(fetchNewItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "succeeded"
        });
    },
});

export default listSlice.reducer;
