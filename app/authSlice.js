import { createSlice, current } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import CookiesService from "../services/CookiesService";

const initialState = {
  isLoading: false,
  isAuth: CookiesService.get("access_token") ? true : false,
  error: null,
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  birth_date: null,
  gender: null,
  height: null,
  weight: null,
  inseam: null,
  verification_code: "",
  forgot: false,
  user: {},
  data: null,
  message: "",
  success: null,
  status: null,
  resetPassword: false,
  verificationCodeStatus: false,
  sendRequestPersonalInformation: false,
  requestPersonalInformationSuccess: null,
  changePasswordReq: null,
  changePasswordMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      return {
        ...current(state),
        email: action.payload,
      };
    },

    accessTokenPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        isLoading: true,
        error: null,
      };
    },
    accessTokenSuccess(state, action) {
      if (action.payload.data.access_token) {
        AuthService.handleLoginSuccess(action.payload.data.access_token);
      }

      // if (action.payload.data.refresh_token) {
      //   AuthService.refreshTokenSuccess(action.payload.data.refresh_token);
      // }
      // TODO add notification and
      // ToDo add name
      return {
        ...state,
        verification_code: "",
        isAuth: true,
        isLoading: false,
        error: null,
        user: action.payload.user,
        data: action.payload.data,
        message: action.payload.message,
        success: action.payload.success,
        password: "",
        status: action.payload.status,
      };
    },
    accessTokenFail(state, action) {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: action.payload.error,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        user: {},
      };
    },

    loginPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        isLoading: true,
        error: null,
        isAuth: false,
      };
    },
    loginSuccess(state, action) {
      if (action.payload.token) {
        AuthService.handleLoginToNSDSuccess(action.payload.token);
      }
      // if (action.payload.data.refresh_token) {
      //   AuthService.refreshTokenSuccess(action.payload.data.refresh_token);
      // }

      // TODO add notification and
      // ToDo add name
      return {
        ...state,
        verification_code: "",
        isAuth: true,
        isLoading: false,
        error: null,
        user: action.payload.user,
        data: action.payload.token,
        message: action.payload.message,
        success: action.payload.success,
        password: "",
        status: action.payload.status,
      };
    },
    loginFail(state, action) {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: action.payload.error,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        user: {},
      };
    },

    logoutPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        isLoading: true,
        isAuth: true,
      };
    },
    logoutSuccess(state, action) {
      // AuthService.handleLogoutSuccess();
      AuthService.handleLogoutFromNSDSuccess();
      CookiesService.remove("access_token");
      return {
        ...state,
        verification_code: "",
        isAuth: false,
        isLoading: false,
        error: action.payload.error,
        user: {},
        data: {},
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        password: "",
      };
    },
    logoutFail(state, action) {
      AuthService.handleLogoutFromNSDSuccess();
      // AuthService.handleLogoutSuccess();
      CookiesService.remove("access_token");
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: null,
        user: {},
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
      };
    },

    registerPending(state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    registerSuccess(state, action) {
      if (action.payload.data.token)
        AuthService.handleLoginToNSDSuccess(action.payload.data.token);
      return {
        ...state,
        verification_code: "",
        isAuth: true,
        isLoading: false,
        error: null,
        user: action.payload.user,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        password: "",
      };
    },
    registerFail(state, action) {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: action.payload.error,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        data: action.payload.data,
        user: {},
      };
    },

    registerSecondPending(state, action) {
      return {
        ...state,
        ...action.payload,
        isLoading: true,
        sendRequestPersonalInformation: true,
        requestPersonalInformationSuccess: null,
        error: null,
      };
    },
    registerSecondSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        sendRequestPersonalInformation: false,
        requestPersonalInformationSuccess: true,
        user: action.payload.user,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        password: "",
      };
    },
    registerSecondFail(state, action) {
      return {
        ...state,
        isLoading: false,
        sendRequestPersonalInformation: false,
        requestPersonalInformationSuccess: false,
        error: action.payload.error,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        data: action.payload.data,
        user: {},
      };
    },

    changePasswordPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        changePasswordReq: null,
      };
    },
    changePasswordSuccess(state, action) {
      // TODO add notification and
      // ToDo add name
      return {
        ...state,
        verification_code: "",
        error: null,
        user: action.payload.user,
        data: action.payload.data,
        message: action.payload.message,
        success: action.payload.success,
        password: "",
        status: action.payload.status,
        changePasswordReq: true,
      };
    },
    changePasswordFail(state, action) {
      return {
        ...state,
        error: action.payload.error,
        changePasswordMessage: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        changePasswordReq: false,
      };
    },

    forgetPasswordPending(state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    forgetPasswordSuccess(state, action) {
      // if (action.payload.access_token)
      //   AuthService.handleResetPasswordSuccess(action.payload.access_token);
      return {
        ...state,
        verification_code: "",
        isLoading: false,
        error: false,
        user: action.payload.user,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        password: "",
      };
    },
    forgetPasswordFail(state, action) {
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload.data,
        success: action.payload.success,
        status: action.payload.status,
        user: {},
      };
    },

    getResetPasswordPending(state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    getResetPasswordSuccess(state, action) {
      if (action.payload.access_token)
        AuthService.handleResetPasswordSuccess(action.payload.access_token);
      return {
        ...state,
        verification_code: "",
        isLoading: false,
        error: null,
        user: action.payload.user,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        password: "",
      };
    },
    getResetPasswordFail(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        user: {},
      };
    },

    postResetPasswordPending(state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    postResetPasswordSuccess(state, action) {
      if (action.payload.access_token)
        AuthService.handleResetPasswordSuccess(action.payload.access_token);
      return {
        ...state,
        verification_code: "",
        isLoading: false,
        error: null,
        user: action.payload.user,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        password: "",
      };
    },
    postResetPasswordFail(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        message: action.payload.message,
        success: action.payload.success,
        status: action.payload.status,
        user: {},
      };
    },
  },
});

export const {
  setEmail,
  accessTokenPending,
  accessTokenSuccess,
  accessTokenFail,
  loginPending,
  loginSuccess,
  loginFail,
  logoutPending,
  logoutSuccess,
  logoutFail,
  registerPending,
  registerSuccess,
  registerFail,
  registerSecondPending,
  registerSecondSuccess,
  registerSecondFail,
  changePasswordPending,
  changePasswordSuccess,
  changePasswordFail,
  forgetPasswordPending,
  forgetPasswordSuccess,
  forgetPasswordFail,
  getResetPasswordPending,
  getResetPasswordSuccess,
  getResetPasswordFail,
  postResetPasswordPending,
  postResetPasswordSuccess,
  postResetPasswordFail,
} = authSlice.actions;

export default authSlice.reducer;
