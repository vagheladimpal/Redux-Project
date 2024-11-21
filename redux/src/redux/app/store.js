import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"; // Import the default reducer

export const store = configureStore({
  reducer: {
    allCart: cartReducer, // Assign the reducer to `allCart`
  },
});
