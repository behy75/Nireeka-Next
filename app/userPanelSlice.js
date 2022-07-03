import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  activeItem: 1,
  brightness: false,
  ticketStep: 1,
  selectedOrderId: 0,
  brightnessValue: 12,
  paymentModal: false,
  editShippingAndBillingModal: false,
  error: "",
  data: null,
  message: "",
  success: null,
  leaderBoardError: "",
  leaderBoardMessage: "",
  leaderBoardReqSuccess: "",
  leaderBoardData: null,
  ordersError: "",
  ordersMessage: "",
  ordersReqSuccess: "",
  ordersData: null,
  paymentsError: "",
  paymentsMessage: "",
  paymentsReqSuccess: "",
  paymentsData: null,
  invoiceDetailsError: "",
  invoiceDetailsMessage: "",
  invoiceDetailsReqSuccess: "",
  invoiceDetailsData: null,
  deleteOrderError: "",
  deleteOrderMessage: "",
  deleteOrderReqSuccess: true,
  deleteOrderData: null,
  listAddressError: "",
  listAddressMessage: "",
  listAddressReqSuccess: "",
  listAddressData: null,
  updateAddressError: "",
  updateAddressMessage: "",
  updateAddressReqSuccess: "",
  updateAddressData: null,
  challengesListError: "",
  challengesListMessage: "",
  challengesListData: null,
  challengesListReqSuccess: "",
  claimChallengesError: "",
  claimChallengesMessage: "",
  claimChallengesReqSuccess: "",
  claimChallengesData: null,
  removeChallengesError: "",
  removeChallengesMessage: "",
  removeChallengesReqSuccess: "",
  removeChallengesData: null,
  countriesError: "",
  countriesMessage: "",
  countriesReqSuccess: "",
  countriesData: null,
  orderDetailsError: "",
  orderDetailsMessage: "",
  orderDetailsReqSuccess: "",
  orderDetailsData: null,
  updateAvatarError: "",
  updateAvatarMessage: "",
  updateAvatarReqSuccess: null,
  updateAvatarData: null,
  updateFamilyError: "",
  updateFamilyMessage: "",
  updateFamilyReqSuccess: null,
  updateFamilyData: null,
  setDefaultOrderError: "",
  setDefaultOrderMessage: "",
  setDefaultOrderReqSuccess: null,
  setDefaultOrderData: null,
  updateShippingAndBillingAddressError: "",
  updateShippingAndBillingAddressMessage: "",
  updateShippingAndBillingAddressReqSuccess: "",
  updateShippingAndBillingAddressData: null,
  getEditAddressError: "",
  getEditAddressMessage: "",
  getEditAddressReqSuccess: "",
  getEditAddressData: null,
  putEditAddressError: "",
  putEditAddressMessage: "",
  putEditAddressReqSuccess: "",
  putEditAddressData: null,
  delAddressError: "",
  delAddressMessage: "",
  delAddressReqSuccess: null,
  delAddressData: null,
  billingAddress: {},
  shippingAddress: {},
};

const userPanelSlice = createSlice({
  name: "userPanel",
  initialState,
  reducers: {
    setBillingAddress(state, action) {
      return {
        ...state,
        billingAddress: action.payload,
      };
    },
    setShippingAddress(state, action) {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    },
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
    setHoverSelected: (state, action) => {
      return {
        ...current(state),
        hoverSelected: action.payload,
      };
    },
    setTicketStep: (state, action) => {
      return {
        ...current(state),
        ticketStep: action.payload,
      };
    },
    setSelectedOrderId: (state, action) => {
      return {
        ...current(state),
        selectedOrderId: action.payload,
      };
    },
    setPaymentModal: (state, action) => {
      return {
        ...current(state),
        paymentModal: action.payload,
      };
    },
    setEditShippingAndBillingModal: (state, action) => {
      return {
        ...current(state),
        editShippingAndBillingModal: action.payload,
      };
    },
    setBrightness: (state, action) => {
      return {
        ...current(state),
        brightness: action.payload,
      };
    },
    setBrightnessValue: (state, action) => {
      return {
        ...current(state),
        brightnessValue: action.payload,
      };
    },
    userPanelPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    userPanelSuccess(state, action) {
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
        success: action.payload.success,
        data: action.payload.data,
      };
    },
    userPanelFail(state, action) {
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
        data: action.payload.data,
        success: action.payload.success,
      };
    },
    leaderBoardPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    leaderBoardSuccess(state, action) {
      return {
        ...state,
        leaderBoardError: action.payload.error,
        leaderBoardMessage: action.payload.message,
        leaderBoardReqSuccess: action.payload.success,
        leaderBoardData: action.payload.data,
      };
    },
    leaderBoardFail(state, action) {
      return {
        ...state,
        leaderBoardError: action.payload.error,
        leaderBoardMessage: action.payload.message,
        leaderBoardData: action.payload.data,
        leaderBoardReqSuccess: action.payload.success,
      };
    },
    ordersPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    ordersSuccess(state, action) {
      return {
        ...state,
        ordersError: action.payload.error,
        ordersMessage: action.payload.message,
        ordersReqSuccess: action.payload.success,
        ordersData: action.payload.data,
      };
    },
    ordersFail(state, action) {
      return {
        ...state,
        ordersError: action.payload.error,
        ordersMessage: action.payload.message,
        ordersData: action.payload.data,
        ordersReqSuccess: action.payload.success,
      };
    },
    paymentsPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    paymentsSuccess(state, action) {
      return {
        ...state,
        paymentsError: action.payload.error,
        paymentsMessage: action.payload.message,
        paymentsReqSuccess: action.payload.success,
        paymentsData: action.payload.data,
      };
    },
    paymentsFail(state, action) {
      return {
        ...state,
        paymentsError: action.payload.error,
        paymentsMessage: action.payload.message,
        paymentsReqSuccess: action.payload.data,
        paymentsSuccess: action.payload.success,
      };
    },

    invoiceDetailsPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        invoiceDetailsReqSuccess: false,
      };
    },
    invoiceDetailsSuccess(state, action) {
      return {
        ...state,
        invoiceDetailsError: action.payload.error,
        invoiceDetailsMessage: action.payload.message,
        invoiceDetailsReqSuccess: action.payload.success,
        invoiceDetailsData: action.payload.data,
      };
    },
    invoiceDetailsFail(state, action) {
      return {
        ...state,
        invoiceDetailsError: action.payload.error,
        invoiceDetailsMessage: action.payload.message,
        invoiceDetailsData: action.payload.data,
        invoiceDetailsReqSuccess: action.payload.success,
      };
    },

    deleteOrderPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        deleteOrderReqSuccess: false,
      };
    },
    deleteOrderSuccess(state, action) {
      return {
        ...state,
        deleteOrderError: action.payload.error,
        deleteOrderMessage: action.payload.message,
        deleteOrderReqSuccess: action.payload.success,
        deleteOrderData: action.payload.data,
      };
    },
    deleteOrderFail(state, action) {
      return {
        ...state,
        deleteOrderError: action.payload.error,
        deleteOrderMessage: action.payload.message,
        deleteOrderData: action.payload.data,
        deleteOrderReqSuccess: action.payload.success,
      };
    },
    listAddressPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    listAddressSuccess(state, action) {
      return {
        ...state,
        listAddressError: action.payload.error,
        listAddressMessage: action.payload.message,
        listAddressReqSuccess: action.payload.success,
        listAddressData: action.payload.data,
      };
    },
    listAddressFail(state, action) {
      return {
        ...state,
        listAddressError: action.payload.error,
        listAddressMessage: action.payload.message,
        listAddressData: action.payload.data,
        listAddressReqSuccess: action.payload.success,
      };
    },
    updateAddressPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    updateAddressSuccess(state, action) {
      return {
        ...state,
        updateAddressError: action.payload.error,
        updateAddressMessage: action.payload.message,
        updateAddressReqSuccess: action.payload.success,
        updateAddressData: action.payload.data,
      };
    },
    updateAddressFail(state, action) {
      return {
        ...state,
        updateAddressError: action.payload.error,
        updateAddressMessage: action.payload.message,
        updateAddressData: action.payload.data,
        updateAddressReqSuccess: action.payload.success,
      };
    },
    challengesListPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        challengesListReqSuccess: false,
        challengesListMessage: null,
      };
    },
    challengesListSuccess(state, action) {
      return {
        ...state,
        challengesListError: action.payload.error,
        challengesListMessage: action.payload.message,
        challengesListReqSuccess: action.payload.success,
        challengesListData: action.payload.data,
      };
    },
    challengesListFail(state, action) {
      return {
        ...state,
        challengesListError: action.payload.error,
        challengesListMessage: action.payload.status,
        challengesListData: action.payload.data,
        challengesListReqSuccess: action.payload.success,
      };
    },
    claimChallengesPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    claimChallengesSuccess(state, action) {
      return {
        ...state,
        claimChallengesError: action.payload.error,
        claimChallengesMessage: action.payload.message,
        claimChallengesReqSuccess: action.payload.success,
        claimChallengesData: action.payload.data,
      };
    },
    claimChallengesFail(state, action) {
      return {
        ...state,
        claimChallengesError: action.payload.error,
        claimChallengesMessage: action.payload.message,
        claimChallengesData: action.payload.data,
        claimChallengesReqSuccess: action.payload.success,
      };
    },
    removeChallengesPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    removeChallengesSuccess(state, action) {
      return {
        ...state,
        removeChallengesError: action.payload.error,
        removeChallengesMessage: action.payload.message,
        removeChallengesReqSuccess: action.payload.success,
        removeChallengesData: action.payload.data,
      };
    },
    removeChallengesFail(state, action) {
      return {
        ...state,
        removeChallengesError: action.payload.error,
        removeChallengesMessage: action.payload.message,
        removeChallengesData: action.payload.data,
        removeChallengesReqSuccess: action.payload.success,
      };
    },
    countriesPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    countriesSuccess(state, action) {
      return {
        ...state,
        countriesError: action.payload.error,
        countriesMessage: action.payload.message,
        countriesReqSuccess: action.payload.success,
        countriesData: action.payload.data,
      };
    },
    countriesFail(state, action) {
      return {
        ...state,
        countriesError: action.payload.error,
        countriesMessage: action.payload.message,
        countriesData: action.payload.data,
        countriesReqSuccess: action.payload.success,
      };
    },
    orderDetailsPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        orderDetailsReqSuccess: false,
      };
    },
    orderDetailsSuccess(state, action) {
      return {
        ...state,
        orderDetailsError: action.payload.error,
        orderDetailsMessage: action.payload.message,
        orderDetailsReqSuccess: action.payload.success,
        orderDetailsData: action.payload.data,
      };
    },
    orderDetailsFail(state, action) {
      return {
        ...state,
        orderDetailsError: action.payload.error,
        orderDetailsMessage: action.payload.message,
        orderDetailsData: action.payload.data,
        orderDetailsReqSuccess: action.payload.success,
      };
    },

    updateAvatarPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        updateAvatarMessage: null,
        updateAvatarReqSuccess: false,
      };
    },
    updateAvatarSuccess(state, action) {
      return {
        ...state,
        updateAvatarError: action.payload.error,
        updateAvatarMessage: action.payload.message,
        updateAvatarData: action.payload.data,
        updateAvatarReqSuccess: action.payload.success,
      };
    },
    updateAvatarFail(state, action) {
      return {
        ...state,
        updateAvatarError: action.payload.error,
        updateAvatarMessage: action.payload.message,
        updateAvatarData: action.payload.data,
        updateAvatarReqSuccess: action.payload.success,
      };
    },

    updateFamilyPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        updateFamilyReqSuccess: false,
      };
    },
    updateFamilySuccess(state, action) {
      return {
        ...state,
        updateFamilyError: action.payload.error,
        updateFamilyMessage: action.payload.message,
        updateFamilyData: action.payload.data,
        updateFamilyReqSuccess: action.payload.success,
      };
    },
    updateFamilyFail(state, action) {
      return {
        ...state,
        updateFamilyError: action.payload.error,
        updateFamilyMessage: action.payload.message,
        updateFamilyData: action.payload.data,
        updateFamilyReqSuccess: action.payload.success,
      };
    },

    setDefaultOrderPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        setDefaultOrderReqSuccess: false,
      };
    },
    setDefaultOrderSuccess(state, action) {
      return {
        ...state,
        setDefaultOrderError: action.payload.error,
        setDefaultOrderMessage: action.payload.message,
        setDefaultOrderData: action.payload.data,
        setDefaultOrderReqSuccess: action.payload.success,
      };
    },
    setDefaultOrderFail(state, action) {
      return {
        ...state,
        setDefaultOrderError: action.payload.error,
        setDefaultOrderMessage: action.payload.message,
        setDefaultOrderData: action.payload.data,
        setDefaultOrderReqSuccess: action.payload.success,
      };
    },

    updateShippingAndBillingAddressPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        updateShippingAndBillingAddressReqSuccess: false,
      };
    },
    updateShippingAndBillingAddressSuccess(state, action) {
      return {
        ...state,
        updateShippingAndBillingAddressError: action.payload.error,
        updateShippingAndBillingAddressMessage: action.payload.message,
        updateShippingAndBillingAddressData: action.payload.data,
        updateShippingAndBillingAddressReqSuccess: action.payload.success,
      };
    },
    updateShippingAndBillingAddressFail(state, action) {
      return {
        ...state,
        updateShippingAndBillingAddressError: action.payload.error,
        updateShippingAndBillingAddressMessage: action.payload.message,
        updateShippingAndBillingAddressData: action.payload.data,
        updateShippingAndBillingAddressReqSuccess: action.payload.success,
      };
    },
    getEditAddressPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        getEditAddressReqSuccess: false,
      };
    },
    getEditAddressSuccess(state, action) {
      return {
        ...state,
        getEditAddressError: action.payload.error,
        getEditAddressMessage: action.payload.message,
        getEditAddressData: action.payload.data,
        getEditAddressReqSuccess: action.payload.success,
      };
    },
    getEditAddressFail(state, action) {
      return {
        ...state,
        getEditAddressError: action.payload.error,
        getEditAddressMessage: action.payload.message,
        getEditAddressData: action.payload.data,
        getEditAddressReqSuccess: action.payload.success,
      };
    },
    putEditAddressPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        putEditAddressReqSuccess: false,
      };
    },
    putEditAddressSuccess(state, action) {
      return {
        ...state,
        putEditAddressError: action.payload.error,
        putEditAddressMessage: action.payload.message,
        putEditAddressData: action.payload.data,
        putEditAddressReqSuccess: action.payload.success,
      };
    },
    putEditAddressFail(state, action) {
      return {
        ...state,
        putEditAddressError: action.payload.error,
        putEditAddressMessage: action.payload.message,
        putEditAddressData: action.payload.data,
        putEditAddressReqSuccess: action.payload.success,
      };
    },

    delAddressPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        delAddressReqSuccess: false,
      };
    },
    delAddressSuccess(state, action) {
      return {
        ...state,
        delAddressError: action.payload.error,
        delAddressMessage: action.payload.message,
        delAddressData: action.payload.data,
        delAddressReqSuccess: action.payload.success,
      };
    },
    delAddressFail(state, action) {
      return {
        ...state,
        delAddressError: action.payload.error,
        delAddressMessage: action.payload.message,
        delAddressData: action.payload.data,
        delAddressReqSuccess: action.payload.success,
      };
    },
  },
});
export const {
  setBillingAddress,
  setShippingAddress,
  setActiveItem,
  setHoverSelected,
  setTicketStep,
  setSelectedOrderId,
  setBrightness,
  setBrightnessValue,
  setPaymentModal,
  setEditShippingAndBillingModal,
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
} = userPanelSlice.actions;

const reducer = {
  userPanel: userPanelSlice.reducer,
};
export default reducer;
