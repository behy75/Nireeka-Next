/**
 * Redux Store
 */

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import configuratorReducer from "./configuratorSlice";
import baseReducer from "./baseSlice";
import informationReducer from "./informationSlice";
import userPanelReducer from "./userPanelSlice";
import authReducer from "./authSlice";
import homePageReducer from "./homePageSlice";
import nsdReducer from "./nsdSlice";
import ticketReducer from "./ticketSlice";
import helpCenterReducer from "./helpCenterSlice";
import checkOutReducer from "./checkOutSlice";
import settingReducer from "./settingSlice";
import nsdUserPanelReducer from "./nsdUserPanelSlice";

const sagaMiddleware = createSagaMiddleware();
// const createHistory = require("history").createBrowserHistory;
// export const appHistory = createHistory();

const store = configureStore({
  reducer: {
    ...baseReducer,
    ...configuratorReducer,
    ...informationReducer,
    ...userPanelReducer,
    ...homePageReducer,
    auth: authReducer,
    ...nsdReducer,
    ...ticketReducer,
    ...helpCenterReducer,
    ...checkOutReducer,
    ...settingReducer,
    ...nsdUserPanelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
