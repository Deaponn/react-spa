import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, ItemAPI } from "./listAPI";

type Data = {
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
    "view/fetchNewItems",
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

export const viewSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchNewItems.pending, (state) => {
            state.items = [];
        });
        builder.addCase(fetchNewItems.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export default viewSlice.reducer;
