import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  recentURL: "",
};

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setRecentURL: (state, action) => {
      state.recentURL = action.payload;
    },
  },
});

export const { setRecentURL } = baseSlice.actions;

const reducer = {
  base: baseSlice.reducer,
};

export default reducer;
