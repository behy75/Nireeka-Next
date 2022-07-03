import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import NSDHttp from "../api/NSDHttp";
import {
  getServerTimePending,
  getServerTimeSuccess,
  getServerTimeFail,
  getRidesPending,
  getRidesSuccess,
  getRidesFail,
} from "../nsdUserPanelSlice";

const getServerTimeRequest = async (data) => {
  let getServerTimeHttp = await NSDHttp();
  return await getServerTimeHttp.post("/api/bike/getServerTime", { ...data });
};

const getRidesRequest = async (data) => {
  let getRidesHttp = await NSDHttp();
  return await getRidesHttp.post("/api/bike/getRides", { ...data });
};

function* getServerTimeDataToServer(action) {
  let token = action.payload.token;

  try {
    const res = yield call(getServerTimeRequest, {
      token,
    });
    if (res.data) {
      yield put(getServerTimeSuccess(res.data));
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
      getServerTimeFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleServerTime() {
  yield takeEvery(getServerTimePending.type, getServerTimeDataToServer);
}

function* getRidesDataToServer(action) {
  let { token, mac_id, from_date, to_date } = action.payload;

  try {
    const res = yield call(getRidesRequest, {
      token,
      mac_id,
      from_date,
      to_date,
    });
    if (res.data) {
      yield put(getRidesSuccess(res.data));
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
      getRidesFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleGetRides() {
  yield takeEvery(getRidesPending.type, getRidesDataToServer);
}

export default function* rootSaga() {
  yield all([fork(handleServerTime), fork(handleGetRides)]);
}
