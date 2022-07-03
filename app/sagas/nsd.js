import { all, call, fork, put, takeEvery } from "redux-saga/effects";
// import { NotificationManager } from "react-notifications";
import NSDHttp from "../api/NSDHttp";
import {
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
} from "../nsdSlice";

const loginNSDRequest = async (data) => {
  let loginNSDHttp = await NSDHttp();
  return await loginNSDHttp.post("/api/user/login", { ...data });
};

const getMacByOrderIdRequest = async (data) => {
  let getMacByOrderIdHttp = await NSDHttp();
  return await getMacByOrderIdHttp.post("/api/bike/getMacByOrderId", {
    ...data,
  });
};

const getStatusByMacIdRequest = async (data) => {
  let getStatusByMacIdHttp = await NSDHttp();
  return await getStatusByMacIdHttp.post("/api/bike/getStatusByMac", {
    ...data,
  });
};

const getBikeSettingsRequest = async (data) => {
  let getBikeSettingsHttp = await NSDHttp();
  return await getBikeSettingsHttp.post("/api/bike/getSettingsByMac", {
    ...data,
  });
};

const setBikeSettingsRequest = async (data) => {
  let setBikeSettingsHttp = await NSDHttp();
  return await setBikeSettingsHttp.post("/api/bike/setSettingsByMac", {
    ...data,
  });
};

const getUserBikesRequest = async (data) => {
  let getUserBikesHttp = await NSDHttp();
  return await getUserBikesHttp.post("/api/user/getUserBikes", {
    ...data,
  });
};

const getLocByMacRequest = async (data) => {
  let getLocByMacHttp = await NSDHttp();
  return await getLocByMacHttp.post("/api/bike/getLocByMac", {
    ...data,
  });
};

function* postLoginNSDDataToServer(action) {
  let { email, password } = action.payload;

  try {
    const res = yield call(loginNSDRequest, { email, password });

    if (res.data) {
      yield put(loginNSDSuccess(res.data));
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

    yield put(loginNSDFail({ error: errorMsg, data }));
  }
}

export function* handleNSDLogin() {
  yield takeEvery(loginNSDPending.type, postLoginNSDDataToServer);
}

function* getMacByOrderIdDataFromServer(action) {
  let { order_bike_id, token } = action.payload;

  try {
    const res = yield call(getMacByOrderIdRequest, { order_bike_id, token });

    if (res.data) {
      yield put(getMacByOrderIdSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusData = null;
    let errorData = null;
    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data && data.statusCode) {
        errorMsg = data.status;
        errorData = data.data;
        statusData = data.statusCode;
      }
    }

    yield put(
      getMacByOrderIdFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleMacByOrderId() {
  yield takeEvery(getMacByOrderIdPending.type, getMacByOrderIdDataFromServer);
}
function* getUserBikesDataFromServer(action) {
  let { token } = action.payload;

  try {
    const res = yield call(getUserBikesRequest, { token });

    if (res.data) {
      yield put(getUserBikesSuccess(res.data));
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
        errorData = data.data;
        statusData = data.status;
      }
    }

    yield put(
      getUserBikesFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleGetUserBikes() {
  yield takeEvery(getUserBikesPending.type, getUserBikesDataFromServer);
}

function* getStatusByMacIdDataFromServer(action) {
  let { mac_id, token } = action.payload;

  try {
    const res = yield call(getStatusByMacIdRequest, { mac_id, token });

    if (res.data) {
      yield put(getStatusByMacIdSuccess(res.data));
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
        errorData = data.data;
        statusData = data.status;
      }
    }

    yield put(
      getStatusByMacIdFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleStatusByMacId() {
  yield takeEvery(getStatusByMacIdPending.type, getStatusByMacIdDataFromServer);
}

function* getBikeSettingsDataFromServer(action) {
  let { mac_id, token } = action.payload;

  try {
    const res = yield call(getBikeSettingsRequest, { mac_id, token });

    if (res.data) {
      yield put(getBikeSettingsSuccess(res.data));
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
        errorData = data.data;
        statusData = data.status;
      }
    }

    yield put(
      getBikeSettingsFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleGetBikeSettings() {
  yield takeEvery(getBikeSettingsPending.type, getBikeSettingsDataFromServer);
}

function* setBikeSettingsDataFromServer(action) {
  let {
    gyro_zero,
    unit,
    brightness,
    auto_off,
    wheel,
    protocol,
    start_pas,
    speed_limit,
    ble,
    min_hr,
    max_hr,
    mode_hr,
    auto_break,
    gps,
    alarm,
    pin,
    zero_start,
    security_mode,
    lights,
    token,
    mac_id,
  } = action.payload;

  try {
    const res = yield call(setBikeSettingsRequest, {
      settings: {
        gyro_zero,
        unit,
        brightness,
        auto_off,
        wheel,
        protocol,
        start_pas,
        speed_limit,
        ble,
        min_hr,
        max_hr,
        mode_hr,
        auto_break,
        gps,
        alarm,
        pin,
        zero_start,
        security_mode,
        lights,
      },
      token,
      mac_id,
    });

    if (res.data) {
      yield put(setBikeSettingsSuccess(res.data));
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
        errorData = data.data;
        statusData = data.status;
      }
    }

    yield put(
      setBikeSettingsFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleSetBikeSettings() {
  yield takeEvery(setBikeSettingsPending.type, setBikeSettingsDataFromServer);
}

function* getLocByMacDataFromServer(action) {
  let { token, mac_id } = action.payload;

  try {
    const res = yield call(getLocByMacRequest, {
      token,
      mac_id,
    });

    if (res.data) {
      yield put(getLocByMacSuccess(res.data));
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
        errorData = data.data;
        statusData = data.status;
      }
    }

    yield put(
      getLocByMacFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleGetLocByMac() {
  yield takeEvery(getLocByMacPending.type, getLocByMacDataFromServer);
}

export default function* rootSaga() {
  yield all([
    fork(handleNSDLogin),
    fork(handleMacByOrderId),
    fork(handleStatusByMacId),
    fork(handleGetBikeSettings),
    fork(handleSetBikeSettings),
    fork(handleGetUserBikes),
    fork(handleGetLocByMac),
  ]);
}
