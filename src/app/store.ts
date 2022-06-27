import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import listSlice from "../components/List/listSlice";
import filterSlice from "../components/Filter/filterSlice";

export const store = configureStore({
    reducer: {
        items: listSlice,
        filter: filterSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
