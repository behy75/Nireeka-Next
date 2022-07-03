import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  getServerTimeError: "",
  getServerTimeMessage: "",
  getServerTimeData: null,
  getServerTimeReqSuccess: null,
  getRidesError: "",
  getRidesMessage: "",
  getRidesData: null,
  getRidesReqSuccess: null,
};

const nsdUserPanelSlice = createSlice({
  name: "nsdUserPanel",
  initialState,
  reducers: {
    getServerTimePending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        getServerTimeReqSuccess: null,
      };
    },
    getServerTimeSuccess(state, action) {
      return {
        ...state,
        getServerTimeError: action.payload.error,
        getServerTimeMessage: action.payload.message,
        getServerTimeData: action.payload.data.server_time_ms,
        getServerTimeReqSuccess: action.payload.status,
      };
    },
    getServerTimeFail(state, action) {
      return {
        ...state,
        getServerTimeError: action.payload.error,
        getServerTimeMessage: action.payload.message,
        getServerTimeData: action.payload.data,
        getServerTimeReqSuccess: action.payload.status,
      };
    },
    getRidesPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        getRidesReqSuccess: null,
      };
    },
    getRidesSuccess(state, action) {
      return {
        ...state,
        getRidesError: action.payload.error,
        getRidesMessage: action.payload.message,
        getRidesData: action.payload.data,
        getRidesReqSuccess: action.payload.status,
      };
    },
    getRidesFail(state, action) {
      return {
        ...state,
        getRidesError: action.payload.error,
        getRidesMessage: action.payload.message,
        getRidesData: action.payload.data,
        getRidesReqSuccess: action.payload.status,
      };
    },
  },
});

export const {
  getServerTimePending,
  getServerTimeSuccess,
  getServerTimeFail,
  getRidesPending,
  getRidesSuccess,
  getRidesFail,
} = nsdUserPanelSlice.actions;

const reducer = {
  nsdUserPanel: nsdUserPanelSlice.reducer,
};

export default reducer;
