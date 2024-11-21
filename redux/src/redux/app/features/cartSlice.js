import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart:[],
};

export const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {

    addToCart:(state,actions)=>{

    }
  },
});

export  const { addToCart} = cartSlice.actions;

export default cartSlice.reducer;
