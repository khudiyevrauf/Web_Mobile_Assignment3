import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./reducers/messages";
import cardSlice from "./reducers/cards";

export const store = configureStore({
  reducer: {
    message: messageSlice,
    card: cardSlice,
  },
});
