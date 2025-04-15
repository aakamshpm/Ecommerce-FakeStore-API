import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateMyOrders: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateMyOrders } = orderSlice.actions;
export default orderSlice.reducer;
