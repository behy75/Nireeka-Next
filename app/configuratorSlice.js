import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepRegister: 1,
};

const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
  reducers: {
    setStepRegister: (state, action) => {
      state.stepRegister = action.payload;
    },
  },
});
export const { setStepRegister } = configuratorSlice.actions;

const reducer = {
  configurator: configuratorSlice.reducer,
};
export default reducer;
