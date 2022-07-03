import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  invoiceDetailsPending,
  deleteOrderPending,
  paymentsPending,
} from "../../../app/userPanelSlice";
import DetailsPaymentModal from "./DetailsPaymentModal";
import DeleteIcon from "../../../public/images/delete.svg";
import Image from "next/image";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import DelPaymentModal from "./DelPaymentModal";

function Unpaid({ orderId, amount, date, lastItem, id }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { paymentsData, deleteOrderReqSuccess } = state.userPanel;
  const [open, setOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {open && (
        <div>
          <DetailsPaymentModal setOpen={setOpen} open={open} />
        </div>
      )}
      {delOpen && (
        <div>
          <DelPaymentModal
            setDelOpen={setDelOpen}
            delOpen={delOpen}
            orderId={orderId}
          />
        </div>
      )}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden flex justify-center items-center">
            <div
              className={
                paymentsData &&
                paymentsData.order_unpaid &&
                paymentsData.order_unpaid.length === id
                  ? "w-full sm:w-900"
                  : "w-full sm:w-900 border-b border-gray-200"
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
                    className="sm:px-2 py-2 mx-1 sm:mx-2 rounded-lg text-xs sm:text-sm text-gray-500 hover:text-gray-900 font-light cursor-pointer"
                  >
                    Details
                  </span>
                  <span className="px-2 sm:px-4 py-2 mx-1 sm:mx-2 border rounded-lg bg-nireekaGreen hover:bg-white font-light text-white hover:text-nireekaGreen cursor-pointer">
                    Pay Now
                  </span>
                  <span
                    onClick={() => {
                      setDelOpen(true);
                      // dispatch(deleteOrderPending(orderId));
                    }}
                    className="px-2 sm:px-4 py-2 mx-1 sm:mx-2 border border-nireekaRed  rounded-lg bg-white hover:bg-nireekaRed font-light text-nireekaRed hover:text-white cursor-pointer"
                  >
                    Delete
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

export default function Unpaids() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { paymentsData, invoiceDetailsData, deleteOrderReqSuccess } =
    state.userPanel;
  let { isAuth } = state.auth;

  useEffect(() => {
    if (deleteOrderReqSuccess && isAuth) {
      dispatch(paymentsPending());
    }
  }, [deleteOrderReqSuccess, isAuth]);

  return (
    <div className="w-full bg-white rounded-3xl my-5 shadow-sm border border-gray-200">
      {paymentsData &&
      paymentsData.order_unpaid &&
      paymentsData.order_unpaid.length ? (
        <>
          <div className="py-4">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 md:mx-0 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden flex justify-center items-center">
                    <div className="w-full sm:w-900 border-b border-gray-200">
                      <div className="flex w-full">
                        <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-900 flex justify-center">
                          ID
                        </div>
                        <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-900 flex justify-center">
                          Amount
                        </div>
                        <div className="w-1/5 py-4 text-xs sm:text-sm font-light text-gray-900 flex justify-center">
                          Date
                        </div>
                        <div className="w-2/5 py-4 text-xs sm:text-sm font-light text-gray-900 flex justify-center">
                          <span className="sm:px-3 font-light text-gray-900"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {paymentsData.order_unpaid.map((item, index) => (
                <Unpaid
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
            {`You have no unpaid payments.`}
          </div>
        </div>
      )}
    </div>
  );
}
