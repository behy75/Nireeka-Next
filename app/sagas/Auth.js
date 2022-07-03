import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
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
  registerFail,
  registerSuccess,
  registerSecondPending,
  registerSecondFail,
  registerSecondSuccess,
  changePasswordPending,
  changePasswordFail,
  changePasswordSuccess,
  forgetPasswordPending,
  forgetPasswordSuccess,
  forgetPasswordFail,
  getResetPasswordPending,
  getResetPasswordFail,
  getResetPasswordSuccess,
  postResetPasswordPending,
  postResetPasswordFail,
  postResetPasswordSuccess,
} from "../authSlice";
import AppHttp from "../api/AppHttp";
import NSDHttp from "../api/NSDHttp";

const accessTokenRequest = async (data) => {
  let accessTokenhttp = await AppHttp();
  return await accessTokenhttp.post("/api/get-access-token", { ...data });
};
const loginRequest = async (data) => {
  let http = await NSDHttp();
  return await http.post("/api/user/login", { ...data });
};

const registerRequest = async (data) => {
  let registerHttp = await AppHttp();
  return await registerHttp.post("/api/register", { ...data });
};

const registerSecondRequest = async (data) => {
  let registerSecondHttp = await AppHttp();
  return await registerSecondHttp.post("/api/register-second", { ...data });
};

const changePasswordRequest = async (data) => {
  let changePasswordHttp = await AppHttp();
  return await changePasswordHttp.post("/api/change-password", { ...data });
};

const forgetPasswordRequest = async (data) => {
  let forgetPasswordHttp = await AppHttp();
  return await forgetPasswordHttp.post("/api/forget-password", { ...data });
};

const getResetPasswordRequest = async (data) => {
  let getResetPasswordHttp = await AppHttp();
  return await getResetPasswordHttp.get("/api/reset-password", { ...data });
};

const postResetPasswordRequest = async (data) => {
  let postResetPasswordHttp = await AppHttp();
  return await postResetPasswordHttp.post("/api/reset-password", { ...data });
};

const logoutRequest = async () => {
  let logoutHttp = await AppHttp();
  return await logoutHttp.get("/api/logout");
};

function* postAccessTokenDataToServer(action) {
  let refresh_token = action.payload;

  try {
    const res = yield call(accessTokenRequest, { refresh_token });

    if (res.data) {
      yield put(accessTokenSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;

    let response = error.response;
    let data = response.data.data;
    if (response && response.data) {
      data = response.data;
      if (data && data.status) {
        errorMsg = data.status;
      }
    }

    yield put(accessTokenFail({ error: errorMsg, data }));
  }
}

export function* handleAccessToken() {
  yield takeEvery(accessTokenPending.type, postAccessTokenDataToServer);
}

function* postLoginDataToServer(action) {
  let { email, password } = action.payload;

  try {
    const res = yield call(loginRequest, { email, password });

    if (res.data) {
      yield put(loginSuccess(res.data.data));
    }
  } catch (error) {
    let errorMsg = null;
    let response = error.response;
    let data = response.data.data;
    if (response && response.data) {
      data = response.data;
      if (data && data.status) {
        errorMsg = data.status;
      }
    }

    yield put(loginFail({ error: errorMsg, data }));
  }
}

export function* handleLogin() {
  yield takeEvery(loginPending.type, postLoginDataToServer);
}

function* postRegisterDataToServer(action) {
  let { name, lastname, email, password, password_confirmation } =
    action.payload;
  try {
    const res = yield call(registerRequest, {
      name,
      lastname,
      email,
      password,
      password_confirmation,
    });

    if (res.data) {
      yield put(registerSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let errorData = null;
    let response = error.response;
    if (response && response.data) {
      let data = response.data;
      if (data && data.status) {
        errorMsg = data.status;
        errorData = data.data;
      }
    }
    yield put(registerFail({ error: errorMsg, data: errorData }));
  }
}

export function* handleRegister() {
  yield takeEvery(registerPending.type, postRegisterDataToServer);
}

function* postRegisterSecondDataToServer(action) {
  let { birth_date, gender, height, weight, inseam } = action.payload;

  try {
    const res = yield call(registerSecondRequest, {
      birth_date,
      gender,
      height,
      weight,
      inseam,
    });

    if (res.data) {
      yield put(registerSecondSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let errorData = null;
    let response = error.response;
    if (response && response.data) {
      let data = response.data;
      if (data && data.status) {
        errorMsg = data.status;
        errorData = data.data;
      }
    }
    yield put(registerSecondFail({ error: errorMsg, data: errorData }));
  }
}

export function* handleSecondRegister() {
  yield takeEvery(registerSecondPending.type, postRegisterSecondDataToServer);
}

function* postLogoutDataToServer(action) {
  try {
    const res = yield call(logoutRequest, {});
    if (res.data) {
      yield put(logoutSuccess(res.data));
    }
  } catch (error) {
    // let errorMsg = "The server is currently unavailable.";

    // let response = error.response;

    // if (response && response.data) {
    //   let data = response.data.data;
    //   if (data) {
    //     errorMsg = "";
    //   }
    // }

    yield put(logoutFail());
  }
}

export function* handleLogout() {
  yield takeEvery(logoutPending.type, postLogoutDataToServer);
}

function* postChangePasswordDataToServer(action) {
  let { old_password, password, password_confirmation } = action.payload;

  try {
    const res = yield call(changePasswordRequest, {
      old_password,
      password,
      password_confirmation,
    });
    if (res.data) {
      yield put(changePasswordSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusMsg = null;
    let errorMessage = null;
    let response = error.response;
    let data = response.data;
    if (response && response.data) {
      data = response.data;
      if (data && data.status) {
        statusMsg = data.status;
        errorMsg = data.status;
        errorMessage = data.data;
      }
    }

    yield put(
      changePasswordFail({
        status: errorMsg,
        error: errorMsg,
        message: errorMessage,
        data,
      })
    );
  }
}

export function* handleChangePassword() {
  yield takeEvery(changePasswordPending.type, postChangePasswordDataToServer);
}

function* postForgetPasswordDataToServer(action) {
  let email = action.payload;
  try {
    const res = yield call(forgetPasswordRequest, { email });

    if (res.data) {
      yield put(forgetPasswordSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusData = null;
    let errorData = null;
    let response = error.response;
    if (response && response.data) {
      let data = response.data;
      if (data && data.status) {
        errorMsg = data.status;
        errorData = data.data[0];
        statusData = data.status;
      }
    }
    yield put(
      forgetPasswordFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleForgetPassword() {
  yield takeEvery(forgetPasswordPending.type, postForgetPasswordDataToServer);
}

function* getResetPasswordDataToServer(action) {
  let email = action.payload;
  try {
    const res = yield call(getResetPasswordRequest, { email });

    if (res.data) {
      yield put(getResetPasswordSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusData = null;
    let errorData = null;
    let response = error.response;
    if (response && response.data) {
      let data = response.data;
      if (data && data.status) {
        errorMsg = data.status;
        errorData = data.data[0];
        statusData = data.status;
      }
    }
    yield put(
      getResetPasswordFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleGetResetPassword() {
  yield takeEvery(getResetPasswordPending.type, getResetPasswordDataToServer);
}

function* postResetPasswordDatafromServer(action) {
  let { email, c_password, password, token } = action.payload;

  try {
    const res = yield call(postResetPasswordRequest, {
      email,
      password_confirmation: c_password,
      password,
      token,
    });

    if (res.data) {
      yield put(postResetPasswordSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusData = null;
    let errorData = null;
    let response = error.response;
    if (response && response.data) {
      let data = response.data;
      if (data && data.status) {
        errorMsg = data.status;
        errorData = data.data[0];
        statusData = data.status;
      }
    }
    yield put(
      postResetPasswordFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handlePostResetPassword() {
  yield takeEvery(
    postResetPasswordPending.type,
    postResetPasswordDatafromServer
  );
}

export default function* rootSaga() {
  yield all([
    fork(handleAccessToken),
    fork(handleLogin),
    fork(handleRegister),
    fork(handleSecondRegister),
    fork(handleLogout),
    fork(handleChangePassword),
    fork(handleForgetPassword),
    fork(handleGetResetPassword),
    fork(handlePostResetPassword),
  ]);
}
