import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  listTicketsError: null,
  listTicketsMessage: "",
  listTicketsReqSuccess: null,
  listTicketsData: {},
  closeTicketError: null,
  closeTicketMessage: "",
  closeTicketReqSuccess: null,
  closeTicketData: {},
  ticketCategoriesError: null,
  ticketCategoriesMessage: "",
  ticketCategoriesReqSuccess: null,
  ticketCategoriesData: {},
  ticketPriorityError: null,
  ticketPriorityMessage: "",
  ticketPriorityReqSuccess: null,
  ticketPriorityData: {},
  showTicketError: null,
  showTicketMessage: "",
  showTicketReqSuccess: null,
  showTicketData: {},
  reOpenTicketError: null,
  reOpenTicketMessage: "",
  reOpenTicketReqSuccess: null,
  reOpenTicketData: {},
  commentError: null,
  commentMessage: "",
  commentReqSuccess: null,
  commentData: {},
  storeTicketError: null,
  storeTicketMessage: "",
  storeTicketReqSuccess: null,
  storeTicketData: {},
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    listTicketsPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    listTicketsSuccess(state, action) {
      return {
        ...state,
        listTicketsError: action.payload.error,
        listTicketsMessage: action.payload.message,
        listTicketsReqSuccess: action.payload.success,
        listTicketsData: action.payload.data,
      };
    },
    listTicketsFail(state, action) {
      return {
        ...state,
        listTicketsError: action.payload.error,
        listTicketsMessage: action.payload.message,
        listTicketsReqSuccess: action.payload.success,
        listTicketsData: action.payload.data,
      };
    },
    closeTicketPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        closeTicketReqSuccess: false,
      };
    },
    closeTicketSuccess(state, action) {
      return {
        ...state,
        closeTicketError: action.payload.error,
        closeTicketMessage: action.payload.message,
        closeTicketReqSuccess: action.payload.success,
        closeTicketData: action.payload.data,
      };
    },
    closeTicketFail(state, action) {
      return {
        ...state,
        closeTicketError: action.payload.error,
        closeTicketMessage: action.payload.message,
        closeTicketReqSuccess: action.payload.success,
        closeTicketData: action.payload.data,
      };
    },
    ticketCategoriesPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    ticketCategoriesSuccess(state, action) {
      return {
        ...state,
        ticketCategoriesError: action.payload.error,
        ticketCategoriesMessage: action.payload.message,
        ticketCategoriesReqSuccess: action.payload.success,
        ticketCategoriesData: action.payload.data,
      };
    },
    ticketCategoriesFail(state, action) {
      return {
        ...state,
        ticketCategoriesError: action.payload.error,
        ticketCategoriesMessage: action.payload.message,
        ticketCategoriesReqSuccess: action.payload.success,
        ticketCategoriesData: action.payload.data,
      };
    },
    ticketPriorityPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
      };
    },
    ticketPrioritySuccess(state, action) {
      return {
        ...state,
        ticketPriorityError: action.payload.error,
        ticketPriorityMessage: action.payload.message,
        ticketPriorityReqSuccess: action.payload.success,
        ticketPriorityData: action.payload.data,
      };
    },
    ticketPriorityFail(state, action) {
      return {
        ...state,
        ticketPriorityError: action.payload.error,
        ticketPriorityMessage: action.payload.message,
        ticketPriorityReqSuccess: action.payload.success,
        ticketPriorityData: action.payload.data,
      };
    },
    showTicketPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        showTicketData: {},
      };
    },
    showTicketSuccess(state, action) {
      return {
        ...state,
        showTicketError: action.payload.error,
        showTicketMessage: action.payload.message,
        showTicketReqSuccess: action.payload.success,
        showTicketData: action.payload.data,
      };
    },
    showTicketFail(state, action) {
      return {
        ...state,
        showTicketError: action.payload.error,
        showTicketMessage: action.payload.message,
        showTicketReqSuccess: action.payload.success,
        showTicketData: action.payload.data,
      };
    },
    reOpenTicketPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        reOpenTicketReqSuccess: false,
      };
    },
    reOpenTicketSuccess(state, action) {
      return {
        ...state,
        reOpenTicketError: action.payload.error,
        reOpenTicketMessage: action.payload.message,
        reOpenTicketReqSuccess: action.payload.success,
        reOpenTicketData: action.payload.data,
      };
    },
    reOpenTicketFail(state, action) {
      return {
        ...state,
        reOpenTicketError: action.payload.error,
        reOpenTicketMessage: action.payload.message,
        reOpenTicketReqSuccess: action.payload.success,
        reOpenTicketData: action.payload.data,
      };
    },
    commentPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        commentReqSuccess: false,
      };
    },
    commentSuccess(state, action) {
      return {
        ...state,
        commentError: action.payload.error,
        commentMessage: action.payload.message,
        commentReqSuccess: action.payload.success,
        commentData: action.payload.data,
      };
    },
    commentFail(state, action) {
      return {
        ...state,
        commentError: action.payload.error,
        commentMessage: action.payload.message,
        commentReqSuccess: action.payload.success,
        commentData: action.payload.data,
      };
    },
    storeTicketPending(state, action) {
      return {
        ...current(state),
        ...action.payload,
        storeTicketReqSuccess: false,
        storeTicketError: false,
      };
    },
    storeTicketSuccess(state, action) {
      return {
        ...state,
        storeTicketError: action.payload.success,
        storeTicketMessage: action.payload.message,
        storeTicketReqSuccess: action.payload.status,
        storeTicketData: action.payload.data,
      };
    },
    storeTicketFail(state, action) {
      return {
        ...state,
        storeTicketError: action.payload.error,
        storeTicketMessage: action.payload.message,
        storeTicketReqSuccess: action.payload.status,
        storeTicketData: action.payload.data,
      };
    },
  },
});

export const {
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
} = ticketSlice.actions;

const reducer = {
  ticket: ticketSlice.reducer,
};

export default reducer;
