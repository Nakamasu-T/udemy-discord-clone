import { configureStore } from "@reduxjs/toolkit";
import userReduser from "../features/useSlice";
import channelReduser from "../features/channelSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    channel: channelReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
