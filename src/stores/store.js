import { configureStore } from "@reduxjs/toolkit"; // configureStore ini adalah fungsi yang digunakan untuk membuat store
import videoReducer from "./reducers/videoSlice";

export const store = configureStore({
  reducer: {
    // definisikan reducer yang akan digunakan disini
    video: videoReducer,
  },
});
