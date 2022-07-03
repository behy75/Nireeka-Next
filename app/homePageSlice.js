import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  bikeChoose: 1,
  homePageData: null,
  countryError: "",
  countryMessage: "",
  countryReqSuccess: null,
  countryData: null,
  id_product: null,
  id_country: "222",
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setBikeChoose: (state, action) => {
      return {
        ...current(state),
        bikeChoose: action.payload,
      };
    },
    setHomePageData: (state, action) => {
      return {
        ...current(state),
        homePageData: action.payload,
      };
    },
    countryPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        countryReqSuccess: false,
      };
    },
    countrySuccess(state, action) {
      return {
        ...state,
        countryError: action.payload.error,
        countryMessage: action.payload.message,
        countryReqSuccess: action.payload.success,
        countryData: action.payload.data,
        countryUser: {},
      };
    },
    countryFail(state, action) {
      return {
        ...state,
        countryError: action.payload.error,
        countryMessage: action.payload.message,
        countryData: action.payload.error,
        countryReqSuccess: action.payload.success,
        countryUser: {},
      };
    },
  },
});
export const {
  setBikeChoose,
  setHomePageData,
  countryPending,
  countrySuccess,
  countryFail,
} = homePageSlice.actions;

const reducer = {
  homePage: homePageSlice.reducer,
};
export default reducer;
