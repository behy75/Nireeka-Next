import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  userPanelPending,
  userPanelSuccess,
  userPanelFail,
  leaderBoardPending,
  leaderBoardSuccess,
  leaderBoardFail,
  ordersPending,
  ordersSuccess,
  ordersFail,
  paymentsPending,
  paymentsSuccess,
  paymentsFail,
  invoiceDetailsPending,
  invoiceDetailsSuccess,
  invoiceDetailsFail,
  deleteOrderPending,
  deleteOrderSuccess,
  deleteOrderFail,
  listAddressPending,
  listAddressSuccess,
  listAddressFail,
  updateAddressPending,
  updateAddressSuccess,
  updateAddressFail,
  challengesListPending,
  challengesListSuccess,
  challengesListFail,
  claimChallengesPending,
  claimChallengesSuccess,
  claimChallengesFail,
  removeChallengesPending,
  removeChallengesSuccess,
  removeChallengesFail,
  countriesPending,
  countriesSuccess,
  countriesFail,
  orderDetailsPending,
  orderDetailsSuccess,
  orderDetailsFail,
  updateAvatarPending,
  updateAvatarSuccess,
  updateAvatarFail,
  updateFamilyPending,
  updateFamilySuccess,
  updateFamilyFail,
  setDefaultOrderPending,
  setDefaultOrderSuccess,
  setDefaultOrderFail,
  updateShippingAndBillingAddressPending,
  updateShippingAndBillingAddressSuccess,
  updateShippingAndBillingAddressFail,
  getEditAddressPending,
  getEditAddressSuccess,
  getEditAddressFail,
  putEditAddressPending,
  putEditAddressSuccess,
  putEditAddressFail,
  delAddressPending,
  delAddressSuccess,
  delAddressFail,
} from "../userPanelSlice";
import AppHttp from "../api/AppHttp";
import CookiesService from "../../services/CookiesService";
import axios from "axios";
import AppFileUploadHttp from "../api/AppFileUploadHttp";

const userPanelRequest = async (data) => {
  let personalHttp = await AppHttp();
  return await personalHttp.get("/api/me", { ...data });
};

const leaderBoardRequest = async (data) => {
  let leaderBoardHttp = await AppHttp();
  return await leaderBoardHttp.get("/api/leader-board", { ...data });
};

const ordersRequest = async (data) => {
  let ordersHttp = await AppHttp();
  return await ordersHttp.get("/api/orders", { ...data });
};

const paymentsRequest = async (data) => {
  let paymentsHttp = await AppHttp();
  return await paymentsHttp.get("/api/payments", { ...data });
};

const invoiceDetailsRequest = async (data) => {
  let invoiceDetailsHttp = await AppHttp();
  return await invoiceDetailsHttp.get(`/api/invoice-details/${data.orderId}`);
};

const deleteOrderRequest = async (data) => {
  let deleteOrderHttp = await AppHttp();
  return await deleteOrderHttp.delete(`/api/delete-order/${data.orderId}`);
};

const listAddressRequest = async (data) => {
  let listAddressHttp = await AppHttp();
  return await listAddressHttp.get("/api/addresses", { ...data });
};

const updateAddressRequest = async (data) => {
  let updateAddressHttp = await AppHttp();
  return await updateAddressHttp.put(`/api/addresses/${data.address_id}`, {
    ...data,
  });
};

const challengesListRequest = async (data) => {
  let challengesListHttp = await AppHttp();
  return await challengesListHttp.get("/api/challenges", { ...data });
};

const claimChallengesRequest = async (data) => {
  let claimChallengesHttp = await AppHttp();
  return await claimChallengesHttp.get(
    `/api/challenges/${data.challenge_id}/claim`,
    { ...data }
  );
};

const removeChallengesRequest = async (data) => {
  let removeChallengesHttp = await AppHttp();
  return await removeChallengesHttp.get(
    `/api/challenges/${data.challenge_id}/remove`,
    { ...data }
  );
};

const updateAvatarRequest = async (data) => {
  debugger;
  let updateAvatarHttp = await AppFileUploadHttp();
  return await updateAvatarHttp.post(`/api/update-avatar`, data);
};

const updateFamilyRequest = async (data) => {
  let updateFamilyHttp = await AppHttp();
  return await updateFamilyHttp.post(`/api/update-family`, { ...data });
};

const countiresRequest = async (data) => {
  let countiresHttp = await AppHttp();
  return await countiresHttp.get("/api/countries", { ...data });
};

const orderDetailsRequest = async (data) => {
  let orserDetailsHttp = await AppHttp();
  return await orserDetailsHttp.get(`/api/order-details/${data.orderId}`);
};

const setDefaultOrderRequest = async (data) => {
  let setDefaultOrderHttp = await AppHttp();
  return await setDefaultOrderHttp.get(
    `/api/set-default-order/${data.orderId}`
  );
};

const updateShippingAndBillingAddressRequest = async (data) => {
  let updateShippingAndBillingAddressHttp = await AppHttp();
  return await updateShippingAndBillingAddressHttp.post(
    `/api/addresses/update-shipping-billing`,
    { ...data }
  );
};

const getEditAddressRequest = async (data) => {
  let getEditAddressHttp = await AppHttp();
  return await getEditAddressHttp.get(`/api/addresses/${data.addressId}/edit`, {
    ...data,
  });
};

const putEditAddressRequest = async (data) => {
  let putEditAddressHttp = await AppHttp();
  return await putEditAddressHttp.put(`/api/addresses/${data.addressId}`, {
    ...data,
  });
};

const delAddressRequest = async (data) => {
  let delAddressHttp = await AppHttp();
  return await delAddressHttp.delete(`/api/addresses/${data.addressId}`, {
    ...data,
  });
};

function* getUserPanelDataFromServer(action) {
  try {
    const res = yield call(userPanelRequest, {});
    if (res.data) {
      yield put(userPanelSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = "The server is currently unavailable.";

    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data) {
        errorMsg = "";
      }
    }

    yield put(userPanelFail({ error: errorMsg }));
  }
}

export function* handleUserPanel() {
  yield takeEvery(userPanelPending.type, getUserPanelDataFromServer);
}

function* getLeaderBoardDataFromServer(action) {
  try {
    const res = yield call(leaderBoardRequest, {});
    if (res.data) {
      yield put(leaderBoardSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = "The server is currently unavailable.";

    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data) {
        errorMsg = "";
      }
    }

    yield put(leaderBoardFail({ error: errorMsg }));
  }
}

export function* handleLeaderBoard() {
  yield takeEvery(leaderBoardPending.type, getLeaderBoardDataFromServer);
}

function* getOrdersDataFromServer(action) {
  try {
    const res = yield call(ordersRequest, {});
    if (res.data) {
      yield put(ordersSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = "The server is currently unavailable.";

    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data) {
        errorMsg = "";
      }
    }

    yield put(ordersFail({ error: errorMsg }));
  }
}

export function* handleOrders() {
  yield takeEvery(ordersPending.type, getOrdersDataFromServer);
}

function* getPaymentsDataFromServer(action) {
  try {
    const res = yield call(paymentsRequest, {});
    if (res.data) {
      yield put(paymentsSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = "The server is currently unavailable.";

    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data) {
        errorMsg = "";
      }
    }

    yield put(paymentsFail({ error: errorMsg }));
  }
}

export function* handlePayments() {
  yield takeEvery(paymentsPending.type, getPaymentsDataFromServer);
}

function* getInvoiceDetailsDataFromServer(action) {
  let orderId = action.payload;
  try {
    const res = yield call(invoiceDetailsRequest, { orderId });
    if (res.data) {
      yield put(invoiceDetailsSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = "The server is currently unavailable.";

    let response = error.response;
    if (response && response.data) {
      let data = response.data;
      if (data) {
        errorMsg = "";
      }
    }

    yield put(invoiceDetailsFail({ error: errorMsg }));
  }
}

export function* handleInvoiceDetails() {
  yield takeEvery(invoiceDetailsPending.type, getInvoiceDetailsDataFromServer);
}

function* getDeleteOrderDataFromServer(action) {
  let orderId = action.payload;
  try {
    const res = yield call(deleteOrderRequest, { orderId });
    if (res.data) {
      yield put(deleteOrderSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = "The server is currently unavailable.";

    let response = error.response;
    if (response && response.data) {
      let data = response.data;
      if (data) {
        errorMsg = "";
      }
    }

    yield put(deleteOrderFail({ error: errorMsg }));
  }
}

export function* handleDeleteOrder() {
  yield takeEvery(deleteOrderPending.type, getDeleteOrderDataFromServer);
}

function* getListAddressDataFromServer(action) {
  try {
    const res = yield call(listAddressRequest, {});
    if (res.data) {
      yield put(listAddressSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = "The server is currently unavailable.";

    let response = error.response;

    if (response && response.data) {
      let data = response.data;
      if (data) {
        errorMsg = "";
      }
    }

    yield put(listAddressFail({ error: errorMsg }));
  }
}

export function* handleListAddress() {
  yield takeEvery(listAddressPending.type, getListAddressDataFromServer);
}

function* putUpdateAddressDataToServer(action) {
  let address_id = action.payload;

  try {
    const res = yield call(updateAddressRequest, { address_id });

    if (res.data) {
      yield put(updateAddressSuccess(res.data));
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
      updateAddressFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleUpdateAddress() {
  yield takeEvery(updateAddressPending.type, putUpdateAddressDataToServer);
}

function* getChallengesListDataFromServer(action) {
  try {
    const res = yield call(challengesListRequest, {});
    if (res.data) {
      yield put(challengesListSuccess(res.data));
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
      challengesListFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleChallengesList() {
  yield takeEvery(challengesListPending.type, getChallengesListDataFromServer);
}

function* getClaimChallengesDataFromServer(action) {
  let challenge_id = action.payload;

  try {
    const res = yield call(claimChallengesRequest, { challenge_id });

    if (res.data) {
      yield put(claimChallengesSuccess(res.data));
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
      claimChallengesFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleClaimChallengesList() {
  yield takeEvery(
    claimChallengesPending.type,
    getClaimChallengesDataFromServer
  );
}

function* getRemoveChallengesDataFromServer(action) {
  let challenge_id = action.payload;

  try {
    const res = yield call(removeChallengesRequest, { challenge_id });

    if (res.data) {
      yield put(removeChallengesSuccess(res.data));
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
      removeChallengesFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleRemoveChallengesList() {
  yield takeEvery(
    removeChallengesPending.type,
    getRemoveChallengesDataFromServer
  );
}

function* getCountriesDataFromServer(action) {
  try {
    const res = yield call(countiresRequest, {});
    if (res.data) {
      yield put(countriesSuccess(res.data));
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
      countriesFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleCountries() {
  yield takeEvery(countriesPending.type, getCountriesDataFromServer);
}

function* getOrderDetailsDataFromServer(action) {
  let orderId = action.payload;

  try {
    const res = yield call(orderDetailsRequest, { orderId });
    if (res.data) {
      yield put(orderDetailsSuccess(res.data));
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
      orderDetailsFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleOrderDetails() {
  yield takeEvery(orderDetailsPending.type, getOrderDetailsDataFromServer);
}

function* postUpdateAvatarDatatoServer(action) {
  let data = action.payload;
  debugger;
  try {
    const res = yield call(updateAvatarRequest, data);
    if (res.data) {
      debugger;
      yield put(updateAvatarSuccess(res.data));
    }
  } catch (error) {
    let errorMsg = null;
    let statusData = null;
    let errorData = null;
    let response = error.response;

    if (response && response.data) {
      debugger;
      let data = response.data;
      if (data && data.status) {
        errorMsg = data.status;
        errorData = data.data;
        statusData = data.status;
      }
    }

    yield put(
      updateAvatarFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleUpdateAvatar() {
  yield takeEvery(updateAvatarPending.type, postUpdateAvatarDatatoServer);
}

function* postUpdateFamilyDatatoServer(action) {
  let { lastname, name } = action.payload;

  try {
    const res = yield call(updateFamilyRequest, { lastname, name });
    if (res.data) {
      yield put(updateFamilySuccess(res.data));
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
      updateFamilyFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleUpdateFamily() {
  yield takeEvery(updateFamilyPending.type, postUpdateFamilyDatatoServer);
}

function* postSetDefaultOrderDatafromServer(action) {
  let { orderId } = action.payload;
  try {
    const res = yield call(setDefaultOrderRequest, { orderId });
    if (res.data) {
      yield put(setDefaultOrderSuccess(res.data));
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
      setDefaultOrderFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleSetDefaultOrder() {
  yield takeEvery(
    setDefaultOrderPending.type,
    postSetDefaultOrderDatafromServer
  );
}

function* postUpdateShippingAndBillingAddressDatafromServer(action) {
  let { shipping_address, billing_address } = action.payload;

  try {
    const res = yield call(updateShippingAndBillingAddressRequest, {
      shipping_address,
      billing_address,
    });
    if (res.data) {
      yield put(updateShippingAndBillingAddressSuccess(res.data));
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
      updateShippingAndBillingAddressFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleUpdateShippingAndBillingAddress() {
  yield takeEvery(
    updateShippingAndBillingAddressPending.type,
    postUpdateShippingAndBillingAddressDatafromServer
  );
}

function* getEditAddressDatafromServer(action) {
  let addressId = action.payload;
  try {
    const res = yield call(getEditAddressRequest, { addressId });
    if (res.data) {
      yield put(getEditAddressSuccess(res.data));
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
      getEditAddressFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleGetEditAddress() {
  yield takeEvery(getEditAddressPending.type, getEditAddressDatafromServer);
}

function* putEditAddressDatafromServer(action) {
  let { name, phone, zipcode, state, city, address, address2 } =
    action.payload.data;
  let addressId = action.payload.data.id;
  let lastname = action.payload.data.last_name;
  let country = action.payload.data.country_id;

  try {
    const res = yield call(putEditAddressRequest, {
      addressId,
      name,
      lastname,
      phone,
      zipcode,
      state,
      city,
      address,
      country,
      address2,
    });
    if (res.data) {
      yield put(putEditAddressSuccess(res.data));
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
      putEditAddressFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handlePutEditAddress() {
  yield takeEvery(putEditAddressPending.type, putEditAddressDatafromServer);
}

function* delDatafromServer(action) {
  let addressId = action.payload;

  try {
    const res = yield call(delAddressRequest, { addressId });
    if (res.data) {
      yield put(delAddressSuccess(res.data));
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
      delAddressFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handleDelAddress() {
  yield takeEvery(delAddressPending.type, delDatafromServer);
}

export default function* rootSaga() {
  yield all([
    fork(handleUserPanel),
    fork(handleLeaderBoard),
    fork(handleOrders),
    fork(handlePayments),
    fork(handleInvoiceDetails),
    fork(handleDeleteOrder),
    fork(handleListAddress),
    fork(handleUpdateAddress),
    fork(handleChallengesList),
    fork(handleClaimChallengesList),
    fork(handleRemoveChallengesList),
    fork(handleCountries),
    fork(handleOrderDetails),
    fork(handleUpdateFamily),
    fork(handleUpdateAvatar),
    fork(handleSetDefaultOrder),
    fork(handleUpdateShippingAndBillingAddress),
    fork(handleGetEditAddress),
    fork(handlePutEditAddress),
    fork(handleDelAddress),
  ]);
}
