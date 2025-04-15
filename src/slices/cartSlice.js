import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
  showCart: false,
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

    // Remove an items from cart
    reduceItemFromCart: (state, action) => {
      const productId = action.payload;

      if (state.cartItems[productId] > 1) {
        state.cartItems[productId] -= 1;
      } else {
        delete state.cartItems[productId];
      }
    },

    //Remove item
    removeItemFromCart: (state, action) => {
      const productId = action.payload;
      delete state.cartItems[productId];
    },

    // Toggle cart state
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const {
  clearCartData,
  addToCart,
  reduceItemFromCart,
  removeItemFromCart,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;
