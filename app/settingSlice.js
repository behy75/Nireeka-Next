import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  updateSettingForumError: null,
  updateSettingForumMessage: "",
  updateSettingForumData: null,
  updateSettingForumReqSuccess: null,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    updateSettingForumPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        updateSettingForumReqSuccess: false,
      };
    },
    updateSettingForumSuccess(state, action) {
      return {
        ...state,
        updateSettingForumError: action.payload.error,
        updateSettingForumMessage: action.payload.message,
        updateSettingForumData: action.payload.data,
        updateSettingForumReqSuccess: action.payload.success,
      };
    },
    updateSettingForumFail(state, action) {
      return {
        ...state,
        updateSettingForumError: action.payload.error,
        updateSettingForumMessage: action.payload.message,
        updateSettingForumData: action.payload.data,
        updateSettingForumReqSuccess: action.payload.success,
      };
    },
  },
});

export const {
  updateSettingForumPending,
  updateSettingForumSuccess,
  updateSettingForumFail,
} = settingSlice.actions;

const reducer = {
  setting: settingSlice.reducer,
};

export default reducer;
