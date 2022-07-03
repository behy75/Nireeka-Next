import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  listTicketsPending,
  listTicketsSuccess,
  listTicketsFail,
  closeTicketPending,
  closeTicketSuccess,
  closeTicketFail,
  ticketCategoriesPending,
  ticketCategoriesSuccess,
  ticketCategoriesFail,
  ticketPriorityPending,
  ticketPrioritySuccess,
  ticketPriorityFail,
  showTicketPending,
  showTicketSuccess,
  showTicketFail,
  reOpenTicketPending,
  reOpenTicketSuccess,
  reOpenTicketFail,
  commentPending,
  commentSuccess,
  commentFail,
  storeTicketPending,
  storeTicketSuccess,
  storeTicketFail,
} from "../ticketSlice";
import AppHttp from "../api/AppHttp";
import AppFileUploadHttp from "../api/AppFileUploadHttp";

const listTicketsRequest = async (data) => {
  let listTicketsHttp = await AppHttp();
  return await listTicketsHttp.get("/api/tickets", { ...data });
};

const storeTicketRequest = async (data) => {
  let storeTicketHttp = await AppFileUploadHttp();
  return await storeTicketHttp.post("/api/tickets", data.data);
};

const closeTicketRequest = async (data) => {
  let closeTicketHttp = await AppHttp();
  return await closeTicketHttp.get(`/api/tickets/${data.ticketId}/close`, {
    ...data,
  });
};

const reOpenTicketRequest = async (data) => {
  let reOpenTicketHttp = await AppHttp();
  return await reOpenTicketHttp.get(`/api/tickets/${data.ticketId}/open`, {
    ...data,
  });
};

const ticketCategoriesRequest = async (data) => {
  let ticketCategoriesHttp = await AppHttp();
  return await ticketCategoriesHttp.get(`/api/tickets/categories`, {
    ...data,
  });
};

const ticketPriorityRequest = async (data) => {
  let ticketPriorityHttp = await AppHttp();
  return await ticketPriorityHttp.get(`/api/tickets/priority`, {
    ...data,
  });
};

const showTicketRequest = async (data) => {
  let showTicketHttp = await AppHttp();
  return await showTicketHttp.get(`/api/tickets/${data.ticketId}`, {
    ...data,
  });
};

const commentRequest = async (data) => {
  let commentHttp = await AppFileUploadHttp();
  return await commentHttp.post(`/api/tickets/comment`, data);
};

function* getListTicketsDataFromServer(action) {
  try {
    const res = yield call(listTicketsRequest, {});
    if (res.data) {
      yield put(listTicketsSuccess(res.data));
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
      listTicketsFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleListTickets() {
  yield takeEvery(listTicketsPending.type, getListTicketsDataFromServer);
}

function* getCloseTicketDataFromServer(action) {
  let ticketId = action.payload;

  try {
    const res = yield call(closeTicketRequest, { ticketId });

    if (res.data) {
      yield put(closeTicketSuccess(res.data));
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
      closeTicketFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleCloseTicket() {
  yield takeEvery(closeTicketPending.type, getCloseTicketDataFromServer);
}

function* getReOpenTicketDataFromServer(action) {
  let ticketId = action.payload;

  try {
    const res = yield call(reOpenTicketRequest, { ticketId });

    if (res.data) {
      yield put(reOpenTicketSuccess(res.data));
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
      reOpenTicketFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleReOpenTicket() {
  yield takeEvery(reOpenTicketPending.type, getReOpenTicketDataFromServer);
}

function* getTicketCategoriesDataFromServer(action) {
  try {
    const res = yield call(ticketCategoriesRequest, {});
    if (res.data) {
      yield put(ticketCategoriesSuccess(res.data));
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
      ticketCategoriesFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleTicketCategories() {
  yield takeEvery(
    ticketCategoriesPending.type,
    getTicketCategoriesDataFromServer
  );
}

function* getTicketPriorityDataFromServer(action) {
  try {
    const res = yield call(ticketPriorityRequest, {});
    if (res.data) {
      yield put(ticketPrioritySuccess(res.data));
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
      ticketPriorityFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleTicketPriorityies() {
  yield takeEvery(ticketPriorityPending.type, getTicketPriorityDataFromServer);
}

function* getShowTicketDataFromServer(action) {
  let ticketId = action.payload;

  try {
    const res = yield call(showTicketRequest, { ticketId });
    if (res.data) {
      yield put(showTicketSuccess(res.data));
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
      showTicketFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleShowTicket() {
  yield takeEvery(showTicketPending.type, getShowTicketDataFromServer);
}

function* postCommentDataToServer(action) {
  let data = action.payload;

  try {
    const res = yield call(commentRequest, data);
    if (res.data) {
      yield put(commentSuccess(res.data));
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
      commentFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleComment() {
  yield takeEvery(commentPending.type, postCommentDataToServer);
}

function* postStoreTicketToServer(action) {
  // let { category, title, priority, message } = action.payload.newTicket;
  // let formData = action.payload.formData;
  let data = action.payload;

  try {
    const res = yield call(storeTicketRequest, {
      // category,
      // title,
      // priority,
      // message,
      // formData,
      data,
    });
    if (res.data) {
      yield put(storeTicketSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusData = null;
    let errorData = null;
    let response = error.response;
    if (response && response.data) {
      let data = response.data;
      if (data && data.status) {
        errorMsg = data.success;
        errorData = data.data;
        statusData = data.status;
      }
    }

    yield put(
      storeTicketFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleStoreStore() {
  yield takeEvery(storeTicketPending.type, postStoreTicketToServer);
}

export default function* rootSaga() {
  yield all([
    fork(handleListTickets),
    fork(handleCloseTicket),
    fork(handleReOpenTicket),
    fork(handleTicketCategories),
    fork(handleTicketPriorityies),
    fork(handleShowTicket),
    fork(handleComment),
    fork(handleStoreStore),
  ]);
}
