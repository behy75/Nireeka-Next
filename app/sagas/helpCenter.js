import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
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
} from "../helpCenterSlice";
import AppHttp from "../api/AppHttp";
const helpFullRequest = async (data) => {
  let helpFullHttp = await AppHttp();

  return await helpFullHttp.put("/api/help-center/helpful", { ...data });
};

function* gethelpFullDataFromServer(action) {
  let { topic_id, comment, help_full } = action.payload;

  try {
    const res = yield call(helpFullRequest, { topic_id, comment, help_full });

    if (res.data) {
      yield put(helpFullSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusData = null;
    let errorData = null;
    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data && data.status) {
        errorMsg = response.data.status;
        errorData = response.data.data;
        statusData = response.data.status;
      }
    }

    yield put(
      helpFullFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handlehelpFull() {
  yield takeEvery(helpFullPending.type, gethelpFullDataFromServer);
}
//
const helpFullGuestRequest = async (data) => {
  let helpFullGuestHttp = await AppHttp();
  return await helpFullGuestHttp.put("/api/help-center/helpful-guest", {
    ...data,
  });
};

function* gethelpFullGuestDataFromServer(action) {
  let { topic_id, comment, help_full } = action.payload;

  try {
    const res = yield call(helpFullGuestRequest, {
      topic_id,
      comment,
      help_full,
    });

    if (res.data) {
      yield put(helpFullGuestSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusData = null;
    let errorData = null;
    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data && data.status) {
        errorMsg = response.data.status;
        errorData = response.data.data;
        statusData = response.data.status;
      }
    }

    yield put(
      helpFullGuestFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handlehelpFullGuest() {
  yield takeEvery(helpFullGuestPending.type, gethelpFullGuestDataFromServer);
}
const searchRequest = async (data) => {
  let searchHttp = await AppHttp();
  return await searchHttp.get(
    `/api/help-center/searching?keyword=${data.search}`,
    {
      ...data,
    }
  );
};

function* getsearchDataFromServer(action) {
  let search = action.payload.inputValue.search;

  try {
    const res = yield call(searchRequest, { search });

    if (res.data) {
      yield put(searchSuccess(res.data));
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
      searchFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handlesearch() {
  yield takeEvery(searchPending.type, getsearchDataFromServer);
}
//

const resaultRequest = async (data) => {
  let resaultHttp = await AppHttp();
  return await resaultHttp.get(
    `/api/help-center/search?q=${data.resault}&page=${data.id}`,
    {
      ...data,
    }
  );
};

function* getresaultDataFromServer(action) {
  let { resault, id } = action.payload;

  try {
    const res = yield call(resaultRequest, { resault, id });

    if (res.data) {
      yield put(resaultSuccess(res.data));
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
      resaultFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleresault() {
  yield takeEvery(resaultPending.type, getresaultDataFromServer);
}
//

export default function* rootSaga() {
  yield all([
    fork(handlehelpFull),
    fork(handlehelpFullGuest),
    fork(handlesearch),
    fork(handleresault),
  ]);
}
