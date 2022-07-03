import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  helpFullError: "",
  helpFullMessage: "",
  helpFullReqSuccess: "",
  helpFullData: null,
  helpFullUser: {},
  helpFullGuestError: "",
  helpFullGuestMessage: "",
  helpFullGuestReqSuccess: "",
  helpFullGuestData: null,
  helpFullGuestUser: {},
  searchError: "",
  searchMessage: "",
  searchReqSuccess: null,
  searchData: null,
  resaultError: "",
  resaultMessage: "",
  resaultReqSuccess: null,
  resaultData: null,
};
const helpCenterSlice = createSlice({
  name: "helpCenter",
  initialState,
  reducers: {
    // setSearchData: (state, action) => {
    //   return {
    //     ...current(state),
    //     searchData: action.payload,
    //   };
    // },
    helpFullPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        helpFullReqSuccess: false,
      };
    },
    helpFullSuccess(state, action) {
      return {
        ...state,
        helpFullError: action.payload.error,
        helpFullMessage: action.payload.message,
        helpFullReqSuccess: action.payload.success,
        helpFullData: action.payload.data,
        helpFullStatus: action.payload.status,
        helpFullUser: {},
      };
    },
    helpFullFail(state, action) {
      return {
        ...state,
        helpFullError: action.payload.error,
        helpFullMessage: action.payload.message,
        helpFullData: action.payload.error,
        helpFullReqSuccess: action.payload.success,
        helpFullStatus: action.payload.status,
        helpFullUser: {},
      };
    },
    helpFullGuestPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        helpFullGuestReqSuccess: false,
      };
    },
    helpFullGuestSuccess(state, action) {
      return {
        ...state,
        helpFullGuestError: action.payload.error,
        helpFullGuestMessage: action.payload.message,
        helpFullGuestReqSuccess: action.payload.success,
        helpFullGuestData: action.payload.data,
        helpFullGuestStatus: action.payload.status,
        helpFullGuestUser: {},
      };
    },
    helpFullGuestFail(state, action) {
      return {
        ...state,
        helpFullGuestError: action.payload.error,
        helpFullGuestMessage: action.payload.message,
        helpFullGuestData: action.payload.data,
        helpFullGuestReqSuccess: action.payload.success,
        helpFullGuestStatus: action.payload.status,
        helpFullGuestUser: {},
      };
    },
    searchPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        searchReqSuccess: false,
      };
    },
    searchSuccess(state, action) {
      return {
        ...state,
        searchError: action.payload.error,
        searchMessage: action.payload.message,
        searchReqSuccess: action.payload.success,
        searchData: action.payload.data,
        searchUser: {},
      };
    },
    searchFail(state, action) {
      return {
        ...state,
        searchError: action.payload.error,
        searchMessage: action.payload.message,
        searchData: action.payload.error,
        searchReqSuccess: action.payload.success,
        searchUser: {},
      };
    },
    //
    resaultPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        resaultReqSuccess: false,
      };
    },
    resaultSuccess(state, action) {
      return {
        ...state,
        resaultError: action.payload.error,
        resaultMessage: action.payload.message,
        resaultReqSuccess: action.payload.success,
        resaultData: action.payload.data,
        resaultUser: {},
      };
    },
    resaultFail(state, action) {
      return {
        ...state,
        resaultError: action.payload.error,
        resaultMessage: action.payload.message,
        resaultData: action.payload.error,
        resaultReqSuccess: action.payload.success,
        resaultUser: {},
      };
    },
  },
});
export const {
  helpFullPending,
  helpFullSuccess,
  helpFullFail,
  helpFullGuestPending,
  helpFullGuestSuccess,
  helpFullGuestFail,
  searchPending,
  searchSuccess,
  searchFail,
  resaultPending,
  resaultSuccess,
  resaultFail,
} = helpCenterSlice.actions;

const reducer = {
  helpCenter: helpCenterSlice.reducer,
};
export default reducer;
