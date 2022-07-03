import { all, call, fork, put, takeEvery } from "redux-saga/effects";
// import { NotificationManager } from "react-notifications";
import AppHttp from "../../pages/api/app-http";
import {
  getPatientInformationPending,
  getPatientInformationSuccess,
  getPatientInformationFail,
} from "../slices/patientInformationSlice";

const getPatientInformationRequest = async (data) => {
  let http = await AppHttp();
  return await http.get("/api/patient/show");
};

function* getPatientInformationData() {
  try {
    const res = yield call(getPatientInformationRequest);
    if (res.data) {
      yield put(getPatientInformationSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = "The server is currently unavailable.";

    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data && (data.message || data.email || data.password)) {
        errorMsg = data.message || data.email || data.password;
      }
    }

    yield put(getPatientInformationFail({ error: errorMsg }));
  }
}

export function* handleLogin() {
  yield takeEvery(getPatientInformationPending.type, getPatientInformationData);
}

export default function* rootSaga() {
  yield all([fork(handleLogin)]);
}
