import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  c_password: "",
  birth_date: null,
  gender: null,
  height: null,
  weight: null,
  inseam: null,
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    setName: (state, action) => {
      return {
        ...current(state),
        name: action.payload,
      };
    },
    setLastName: (state, action) => {
      return {
        ...current(state),
        lastName: action.payload,
      };
    },
    setEmail: (state, action) => {
      return {
        ...current(state),
        email: action.payload,
      };
    },
    setPassword: (state, action) => {
      return {
        ...current(state),
        password: action.payload,
      };
    },
    setConfirmPassword: (state, action) => {
      return {
        ...current(state),
        c_password: action.payload,
      };
    },
    setGender: (state, action) => {
      return {
        ...current(state),
        gender: action.payload,
      };
    },
    setHeight: (state, action) => {
      return {
        ...current(state),
        height: action.payload,
      };
    },
    setWeight: (state, action) => {
      return {
        ...current(state),
        weight: action.payload,
      };
    },
    setInseam: (state, action) => {
      return {
        ...current(state),
        inseam: action.payload,
      };
    },
    setBirthDate: (state, action) => {
      return {
        ...current(state),
        birth_date: action.payload,
      };
    },
  },
});
export const {
  setName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setGender,
  setHeight,
  setWeight,
  setInseam,
  setBirthDate,
} = informationSlice.actions;
export const selGender = (state) => state.information.gender;
export const selHeight = (state) => state.information.height;
export const selWeight = (state) => state.information.weight;
export const selInseam = (state) => state.information.inseam;

const reducer = {
  information: informationSlice.reducer,
};
export default reducer;
