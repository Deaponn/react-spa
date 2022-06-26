import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import buttonsSlice from "../components/Buttons/buttonsSlice";
import viewSlice from "../components/View/viewSlice";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        page: buttonsSlice,
        counter: counterSlice,
        items: viewSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
