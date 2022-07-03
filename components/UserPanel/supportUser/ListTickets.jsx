import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeTicketPending,
  listTicketsPending,
  showTicketPending,
} from "../../../app/ticketSlice";
import { setPaymentModal } from "../../../app/userPanelSlice";
import ModalTicketShowDetails from "./ModalTicketShowDetails";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Ticket({ pagesNumber, pageNumber }) {
  const state = useSelector((state) => state);
  let { listTicketsData } = state.ticket;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {open && (
        <div>
          <ModalTicketShowDetails setOpen={setOpen} open={open} />
        </div>
      )}
      {listTicketsData && listTicketsData.tickets ? (
        <div>
          {listTicketsData.tickets.map((item, index) => (
            <div
              onClick={() => {
                dispatch(setPaymentModal(true));
                setOpen(true);
                dispatch(showTicketPending(item.id));
              }}
              key={index}
              className={classNames(
                (index + 1) % 10 === 0 ||
                  listTicketsData.tickets.length === index + 1
                  ? "rounded-b-3xl"
                  : "",
                "hover:border hover:shadow cursor-pointer"
              )}
            >
              {((index + 1) / 10 < pageNumber ||
                (index + 1) / 10 === pageNumber) &&
                (index + 1) / 10 > pageNumber - 1 && (
                  <div
                    className={classNames(
                      item.is_admin || item.is_admin === 0 ? "bg-gray-100" : "",
                      index + 1 === 1 ? "rounded-t-3xl sm:rounded-none" : "",
                      "grid grid-cols-12 gap-1 w-full px-3 py-1 border-b border-gray-200"
                    )}
                  >
                    <div
                      className={classNames(
                        item.is_admin || item.is_admin === 0
                          ? "font-normal"
                          : "font-light",
                        "col-span-12 md:col-span-2 py-1 md:py-4 text-left text-xs sm:text-sm font-light text-blue-500 cursor-pointer"
                      )}
                    >
                      {item.title}
                      {item.comment_count > 0 ? (
                        <span className="bg-nireekaGreen rounded-xl text-white text-xs font-light px-1 mx-1">
                          {item.comment_count}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      onClick={() => {
                        dispatch(setPaymentModal(true));
                        setOpen(true);
                        dispatch(showTicketPending(item.id));
                      }}
                      className={classNames(
                        item.is_admin || item.is_admin === 0
                          ? "font-normal"
                          : "font-light",
                        "col-span-6 sm:py-4 flex justify-start items-center text-xs sm:text-sm font-light text-gray-500 truncate cursor-pointer"
                      )}
                    >
                      {item.message}
                    </div>

                    <div className="col-span-3 md:col-span-2 sm:py-2 flex justify-center items-center text-xs sm:text-sm font-light">
                      {item.status === "Open" ? (
                        <div className="rounded-xl sm:p-2 text-xs sm:text-sm font-light text-nireekaGreen ">
                          Open
                        </div>
                      ) : (
                        // <div
                        //   onClick={() => {
                        //     dispatch(closeTicketPending(item.id));
                        //   }}
                        //   className="border border-red-600 rounded-xl p-2 cursor-pointer text-xs sm:text-sm font-light hover:bg-red-600 text-red-600 hover:text-white"
                        // >
                        //   Close
                        // </div>
                        <div className="rounded-xl sm:p-2 text-xs sm:text-sm font-light text-nireekaRed ">
                          Closed
                        </div>
                      )}
                    </div>
                    <div
                      className={classNames(
                        item.is_admin || item.is_admin === 0
                          ? "font-normal"
                          : "font-light",
                        "flex justify-center items-center col-span-3 md:col-span-2 sm:py-4 text-xs sm:text-sm font-light text-gray-500"
                      )}
                    >
                      {item.updated_at}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      ) : (
        <div className="py-4 text-xs sm:text-sm font-light text-gray-500 flex justify-center">
          There is no successful Tickets.
        </div>
      )}
    </div>
  );
}

export default function ListTickets({ pagesNumber, pageNumber }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { listTicketsData, closeTicketReqSuccess, commentReqSuccess } =
    state.ticket;

  useEffect(() => {
    if (closeTicketReqSuccess || commentReqSuccess) {
      dispatch(listTicketsPending());
    }
  }, [closeTicketReqSuccess, commentReqSuccess]);

  return (
    <div className="flex flex-col">
      <div className="w-full bg-white rounded-3xl my-5 shadow-sm border border-gray-200 flex flex-col justify-center items-center">
        <div className="w-full hidden md:block ">
          <div className="grid grid-cols-12 gap-1 px-3 border-b border-gray-300">
            <div className="col-span-2 py-3 text-left text-xs sm:text-sm font-light text-gray-900">
              Subject
            </div>
            <div className="col-span-6 py-3 text-left text-xs sm:text-sm font-light text-gray-900">
              Message
            </div>
            <div className="col-span-2 py-3 text-center text-xs sm:text-sm font-light text-gray-900 flex justify-center">
              Status
            </div>
            <div className="col-span-2 py-3 text-center text-xs sm:text-sm font-light text-gray-900">
              Last Updated
            </div>
          </div>
        </div>

        <Ticket pagesNumber={pagesNumber} pageNumber={pageNumber} />
      </div>
    </div>
  );
}
