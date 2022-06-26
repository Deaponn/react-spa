import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, Item } from "./viewAPI";

type Data = {
    items: Item[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
};

const initialState: Data = {
    items: [],
    status: "idle",
    error: null,
};

export const fetchNewItems = createAsyncThunk("view/fetchNewItems", async (page: number) => {
    const response = await fetchItems(page);
    return response.data;
});

export const viewSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchNewItems.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export default viewSlice.reducer