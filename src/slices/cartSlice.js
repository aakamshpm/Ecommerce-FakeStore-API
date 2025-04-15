import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Empty the cart
    clearCartData: (state) => {
      state.cartItems = {};
    },

    // Add an item to cart
    addToCart: (state, action) => {
      const productId = action.payload;
      state.cartItems[productId] = (state.cartItems[productId] || 0) + 1;
    },
  },
});

export const { clearCartData, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
