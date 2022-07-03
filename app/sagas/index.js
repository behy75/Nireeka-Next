/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// sagas
import authSagas from "./Auth";
import nsdSagas from "./nsd";
import userPanelSagas from "./userPanel";
import ticketsSagas from "./tickets";
import helpCenterSagas from "./helpCenter";
import homePageSagas from "./homePage";
import settingSagas from "./setting";
import nsdUserPanelSagas from "./nsdUserPanel";
// import patientInformationSagas from './PatientInformation';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    nsdSagas(),
    userPanelSagas(),
    ticketsSagas(),
    helpCenterSagas(),
    homePageSagas(),
    settingSagas(),
    nsdUserPanelSagas(),
    // patientInformationSagas()
  ]);
}
