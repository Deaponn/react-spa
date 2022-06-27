import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import viewSlice from "../components/List/listSlice";
import filterSlice from "../components/Filter/filterSlice";

export const store = configureStore({
    reducer: {
        items: viewSlice,
        filter: filterSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
