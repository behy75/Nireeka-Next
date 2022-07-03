import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: 0,
};

const checkOutSlice = createSlice({
  name: "checkOut",
  initialState,
  reducers: {
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export const { setOrderNumber } = checkOutSlice.actions;

const reducer = {
  base: checkOutSlice.reducer,
};

export default reducer;
