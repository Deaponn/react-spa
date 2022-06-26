import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchItems, Item } from "./viewAPI";

type Data = {
    // Multiple possible status enum values
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
    // The value we return becomes the `fulfilled` action payload
    return response.data;
});

export const viewSlice = createSlice({
    name: "counter",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
    },
    extraReducers(builder) {
        // omit posts loading reducers
        builder.addCase(fetchNewItems.fulfilled, (state, action) => {
            // We can directly add the new post object to our posts array
            state.items = action.payload;
        });
    },
});

export default viewSlice.reducer