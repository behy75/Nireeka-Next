import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { paymentsPending } from "../../../app/userPanelSlice";
import Paids from "./Paids";
import PaymentsMSG from "./PaymentsMSG";
import Unpaids from "./Unpaids";
import UnpaidsMSG from "./UnpaidsMSG";

export default function Payments() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;
  let { paymentsData } = state.userPanel;

  useEffect(() => {
    if (isAuth) {
      dispatch(paymentsPending());
    }
  }, [isAuth]);

  if (!paymentsData) {
    return (
      <div style={{ minHeight: "100vh" }} className="mx-2">
        <PaymentsMSG />
        <div
          className="bg-bgUserPanel flex justify-center items-center"
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
      className="relative z-0 xl:flex md:pr-4 xl:pr-6 lg:overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
    >
      <div className="w-full h-full">
        <div className="mx-2">
          <PaymentsMSG />
          <Paids />
          <UnpaidsMSG />
          <Unpaids />
        </div>
      </div>
    </div>
  );
}
