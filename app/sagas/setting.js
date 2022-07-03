import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import AppHttp from "../api/AppHttp";
import {
  updateSettingForumFail,
  updateSettingForumPending,
  updateSettingForumSuccess,
} from "../settingSlice";

const updateSettingForumRequest = async (data) => {
  let updateSettingForumHttp = await AppHttp();
  return await updateSettingForumHttp.put("/api/forum/settings", { ...data });
};

function* updateSettingForumDataToServer(action) {
  let { show_country, show_in_leaderboard } = action.payload;

  try {
    const res = yield call(updateSettingForumRequest, {
      show_country,
      show_in_leaderboard,
    });
    if (res.data) {
      yield put(updateSettingForumSuccess(res.data));
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
      updateSettingForumFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleListTickets() {
  yield takeEvery(
    updateSettingForumPending.type,
    updateSettingForumDataToServer
  );
}

export default function* rootSaga() {
  yield all([fork(handleListTickets)]);
}
