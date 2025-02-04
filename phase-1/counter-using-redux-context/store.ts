import { configureStore } from "@reduxjs/toolkit";
import Counter from "./src/slices/counterSlice";

export const store = configureStore({
  reducer: { counter: Counter },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;