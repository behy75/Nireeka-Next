import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { listTicketsPending } from "../../../app/ticketSlice";
import CenteredPageNumbers from "./CenteredPageNumbers";
import DontTickets from "./DontTickets";
import HasTickets from "./HasTickets";
import ListTickets from "./ListTickets";
import NewTicket from "./NewTicket";
import SupportMSG from "./SupportMSG";

export default function Support() {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { ticketStep, data } = state.userPanel;
  let { isAuth } = state.auth;
  let { listTicketsData } = state.ticket;
  let pagesNumber =
    data && data.tickets && data.tickets.all
      ? Math.ceil(data.tickets.all / 10)
      : 1;

  useEffect(() => {
    if (isAuth) {
      dispatch(listTicketsPending());
    }
  }, [isAuth]);

  if (ticketStep === 1 && (!listTicketsData || !listTicketsData.tickets)) {
    return (
      <div
        style={{ height: "100vh" }}
        className="relative z-0 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
      >
        <SupportMSG />
        <div
          className="bg-bgUserPanel flex justify-center items-center h-full w-full"
          style={{ height: "60vh" }}
        >
          <ReactLoading
            type="spin"
            color="rgb(209, 213, 219)"
            height={80}
            width={80}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="relative z-0 xl:flex md:pr-4 xl:pr-6 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
    >
      <div className="w-full">
        <div className="px-2 xm:px-0">
          <SupportMSG />
          {ticketStep === 1 && (
            <div>
              {listTicketsData &&
              listTicketsData.tickets &&
              listTicketsData.tickets[0] ? (
                <div>
                  <HasTickets />
                  <ListTickets
                    pagesNumber={pagesNumber}
                    pageNumber={pageNumber}
                  />
                  {pagesNumber > 1 && (
                    <CenteredPageNumbers
                      pagesNumber={pagesNumber}
                      setPageNumber={setPageNumber}
                    />
                  )}
                </div>
              ) : (
                <DontTickets />
              )}
            </div>
          )}
          {ticketStep === 2 && <NewTicket />}
        </div>
      </div>
    </div>
  );
}
