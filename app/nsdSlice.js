import { createSlice, current } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import AuthService from "../services/AuthService";
import CookiesService from "../services/CookiesService";

const initialState = {
  nsdIsLoading: false,
  nsdIsAuth: CookiesService.get("nsd_token") ? true : false,
  nsdError: null,
  nsdName: "",
  nsdLastName: "",
  nsdEmail: "",
  nsdPassword: "",
  nsdConfirmPassword: "",
  nsdVerification_code: "",
  nsdForgot: false,
  nsdData: null,
  nsdMessage: "",
  nsdSuccess: null,
  nsdStatus: null,
  nsdResetPassword: false,
  nsdVerificationCodeStatus: false,
  getMacByOrderIdError: null,
  getMacByOrderIdMessage: "",
  getMacByOrderIdData: null,
  getMacByOrderIdReqSuccess: null,
  getStatusByMacIdError: null,
  getStatusByMacIdMessage: "",
  getStatusByMacIdData: {},
  getStatusByMacIdReqSuccess: null,
  getBikeSettingsError: null,
  getBikeSettingsMessage: "",
  getBikeSettingsData: {},
  getBikeSettingsReqSuccess: null,
  setBikeSettingsError: null,
  setBikeSettingsMessage: "",
  setBikeSettingsData: {},
  setBikeSettingsReqSuccess: true,
  setBikeSettingsUser: {},
  getUserBikesError: null,
  getUserBikesMessage: "",
  getUserBikesData: null,
  getUserBikesReqSuccess: true,
  getLocByMacStatus: null,
  getLocByMacMessage: "",
  getLocByMacData: null,
  getLocByMacReqSuccess: true,
};

const nsdSlice = createSlice({
  name: "nsd",
  initialState,
  reducers: {
    loginNSDPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        nsdIsLoading: true,
        nsdError: null,
      };
    },
    loginNSDSuccess(state, action) {
      if (action.payload.token) {
        AuthService.handleLoginToNSDSuccess(action.payload.token);
      }
      return {
        ...state,
        nsdVerification_code: "",
        nsdIsAuth: true,
        nsdIsLoading: false,
        nsdError: null,
        nsdUser: action.payload.user,
        nsdData: action.payload.data,
        nsdMessage: action.payload.message,
        nsdSuccess: action.payload.success,
        nsdPassword: "",
        nsdStatus: action.payload.status,
      };
    },
    loginNSDFail(state, action) {
      return {
        ...state,
        nsdIsAuth: false,
        nsdIsLoading: false,
        nsdError: action.payload.error,
        nsdMessage: action.payload.message,
        nsdSuccess: action.payload.success,
        nsdStatus: action.payload.status,
      };
    },
    getMacByOrderIdPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        getMacByOrderIdReqSuccess: null,
      };
    },
    getMacByOrderIdSuccess(state, action) {
      return {
        ...state,
        getMacByOrderIdError: action.payload.error,
        getMacByOrderIdMessage: action.payload.message,
        getMacByOrderIdData: action.payload.data.mac_id,
        getMacByOrderIdReqSuccess: action.payload.statusCode,
      };
    },
    getMacByOrderIdFail(state, action) {
      return {
        ...state,
        getMacByOrderIdError: action.payload.error,
        getMacByOrderIdMessage: action.payload.message,
        getMacByOrderIdData: action.payload.data,
        getMacByOrderIdReqSuccess: action.payload.status,
      };
    },
    getStatusByMacIdPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        getStatusByMacIdReqSuccess: false,
      };
    },
    getStatusByMacIdSuccess(state, action) {
      return {
        ...state,
        getStatusByMacIdError: action.payload.error,
        getStatusByMacIdMessage: action.payload.message,
        getStatusByMacIdData: action.payload.data.status,
        getStatusByMacIdReqSuccess: action.payload.success,
      };
    },
    getStatusByMacIdFail(state, action) {
      return {
        ...state,
        getStatusByMacIdError: action.payload.error,
        getStatusByMacIdMessage: action.payload.message,
        getStatusByMacIdData: action.payload.data,
        getStatusByMacIdReqSuccess: action.payload.success,
      };
    },
    getBikeSettingsPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        getBikeSettingsReqSuccess: false,
      };
    },
    getBikeSettingsSuccess(state, action) {
      return {
        ...state,
        getBikeSettingsError: action.payload.error,
        getBikeSettingsMessage: action.payload.message,
        getBikeSettingsData: action.payload.data.settings,
        getBikeSettingsReqSuccess: action.payload.success,
      };
    },
    getBikeSettingsFail(state, action) {
      return {
        ...state,
        getBikeSettingsError: action.payload.error,
        getBikeSettingsMessage: action.payload.message,
        getBikeSettingsData: action.payload.data,
        getBikeSettingsReqSuccess: action.payload.success,
      };
    },
    setBikeSettingsPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        setBikeSettingsReqSuccess: false,
        setBikeSettingsMessage: "",
      };
    },
    setBikeSettingsSuccess(state, action) {
      return {
        ...state,
        setBikeSettingsError: action.payload.error,
        setBikeSettingsMessage: action.payload.message,
        setBikeSettingsData: action.payload.settings,
        setBikeSettingsReqSuccess: true,
      };
    },
    setBikeSettingsFail(state, action) {
      return {
        ...state,
        setBikeSettingsError: action.payload.error,
        setBikeSettingsMessage: action.payload.message,
        setBikeSettingsData: action.payload.data,
        setBikeSettingsReqSuccess: false,
      };
    },
    getUserBikesPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        getUserBikesReqSuccess: false,
        getUserBikesMessage: "",
      };
    },
    getUserBikesSuccess(state, action) {
      return {
        ...state,
        getUserBikesError: action.payload.error,
        getUserBikesMessage: action.payload.message,
        getUserBikesData: action.payload.data,
        getUserBikesReqSuccess: true,
      };
    },
    getUserBikesFail(state, action) {
      return {
        ...state,
        getUserBikesError: action.payload.error,
        getUserBikesMessage: action.payload.message,
        getUserBikesData: action.payload.data,
        getUserBikesReqSuccess: false,
      };
    },
    getLocByMacPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        getLocByMacReqSuccess: false,
        getLocByMacMessage: "",
      };
    },
    getLocByMacSuccess(state, action) {
      return {
        ...state,
        getLocByMacStatus: action.payload.statusCode,
        getLocByMacMessage: action.payload.message,
        getLocByMacData: action.payload.data.location,
        getLocByMacReqSuccess: true,
      };
    },
    getLocByMacFail(state, action) {
      return {
        ...state,
        getLocByMacStatus: action.payload.statusCode,
        getLocByMacMessage: action.payload.message,
        getLocByMacData: action.payload.data,
        getLocByMacReqSuccess: false,
      };
    },
  },
});

export const {
  loginNSDPending,
  loginNSDSuccess,
  loginNSDFail,
  getMacByOrderIdPending,
  getMacByOrderIdSuccess,
  getMacByOrderIdFail,
  getStatusByMacIdPending,
  getStatusByMacIdSuccess,
  getStatusByMacIdFail,
  getBikeSettingsPending,
  getBikeSettingsSuccess,
  getBikeSettingsFail,
  setBikeSettingsPending,
  setBikeSettingsSuccess,
  setBikeSettingsFail,
  getUserBikesPending,
  getUserBikesSuccess,
  getUserBikesFail,
  getLocByMacPending,
  getLocByMacSuccess,
  getLocByMacFail,
} = nsdSlice.actions;

const reducer = {
  nsd: nsdSlice.reducer,
};

export default reducer;
