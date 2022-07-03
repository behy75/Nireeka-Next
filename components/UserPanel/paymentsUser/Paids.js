import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { invoiceDetailsPending } from "../../../app/userPanelSlice";
import DetailsPaymentModal from "./DetailsPaymentModal";

function Payment({ orderId, amount, date, lastItem, id }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { paymentsData } = state.userPanel;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {open && (
        <div>
          <DetailsPaymentModal setOpen={setOpen} open={open} />
        </div>
      )}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden flex justify-center items-center">
            <div
              className={
                paymentsData &&
                paymentsData.order_paid &&
                id < paymentsData.order_paid.length
                  ? "w-full sm:w-900 border-b border-gray-200"
                  : "w-full sm:w-900 flex justify-center"
              }
            >
              <div className="flex w-full">
                <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-500 flex justify-center">
                  {orderId}
                </div>
                <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-500 flex justify-center">
                  {amount.toLocaleString()}
                </div>
                <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-500 flex justify-center">
                  {date}
                </div>
                <div className="w-2/5 py-2 text-xs sm:text-sm text-gray-500 flex justify-center">
                  <span
                    onClick={() => {
                      dispatch(invoiceDetailsPending(orderId));
                      setOpen(true);
                    }}
                    className="px-3 py-2 mx-2 border rounded-lg bg-nireekaGreen hover:bg-white text-white hover:text-nireekaGreen font-lighte cursor-pointer"
                  >
                    Invoice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Paids() {
  const state = useSelector((state) => state);
  let { paymentsData } = state.userPanel;

  return (
    <div className="w-full bg-white rounded-3xl my-5 shadow-sm border border-gray-200">
      {paymentsData &&
      paymentsData.order_paid &&
      paymentsData.order_paid.length ? (
        <>
          <div className="py-4">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden flex justify-center items-center">
                    <div className="w-full sm:w-900 border-b border-gray-200">
                      <div className="flex w-full">
                        <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-900 flex justify-center">
                          ID
                        </div>
                        <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-9500 flex justify-center">
                          Amount
                        </div>
                        <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-900 flex justify-center">
                          Date
                        </div>
                        <div className="w-2/5 sm:px-3 py-4 text-xs sm:text-sm font-light text-gray-900 flex justify-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {paymentsData.order_paid.map((item, index) => (
                <Payment
                  id={index + 1}
                  key={item.id}
                  orderId={item.id}
                  amount={item.amount}
                  date={item.date}
                  lastItem={false}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="w-full my-5 flex flex-col justify-center items-center">
          <div className="my-2 font-light text-lg sm:text-2xl ml-6 flex justify-center items-center">
            {`You have no successful payment.`}
          </div>
        </div>
      )}
    </div>
  );
}
