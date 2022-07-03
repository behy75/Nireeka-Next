import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { countryPending, countrySuccess, countryFail } from "../homePageSlice";
import AppHttp from "../api/AppHttp";
const countryRequest = async (data) => {
  console.log(data);
  let countryHttp = await AppHttp();

  return await countryHttp.get(
    `/api/shipping-calculator?country=${data.idCountry}&product=${data.idProduct}`,
    {
      ...data,
    }
  );
};

function* getcountryDataFromServer(action) {
  let { idCountry, idProduct } = action.payload;

  try {
    const res = yield call(countryRequest, { idCountry, idProduct });

    if (res.data) {
      yield put(countrySuccess(res.data));
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
      countryFail({
        error: errorMsg,
        data: errorData,
        status: statusData,
      })
    );
  }
}

export function* handlecountry() {
  yield takeEvery(countryPending.type, getcountryDataFromServer);
}
export default function* rootSaga() {
  yield all([fork(handlecountry)]);
}
