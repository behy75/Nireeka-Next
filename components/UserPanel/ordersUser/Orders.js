import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { ordersPending } from "../../../app/userPanelSlice";
import Accessories from "./Accessories";
import Bikes from "./Bikes";
import NireekaBike from "./NireekaBike";
import OrdersMSG from "./OrdersMSG";
import SelectedBike from "../../../public/images/selected-bike.svg";
import Image from "next/image";
import SuccessfulMessage from "../../Atoms/SuccessfulMessage";

export default function Orders() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;
  let { ordersData, selectedOrderId, orderDetailsData } = state.userPanel;

  useEffect(() => {
    if (isAuth) {
      dispatch(ordersPending());
    }
  }, [isAuth]);

  if (!ordersData) {
    return (
      <div
        style={{ height: "100vh" }}
        className="relative z-0 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
      >
        <OrdersMSG />
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
      className="relative z-0 xl:flex overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
    >
      <div className="xl:w-2/3 mx-2 md:mr-7">
        <div className="w-full">
          <OrdersMSG />
          <div>
            <Bikes />
            {/* <Accessories /> */}
          </div>
        </div>
      </div>
      {ordersData ? (
        <div className="hidden xl:block xl: h-full xl:w-1/3 ml-2">
          <div
            className="bg-white p-5 w-full shadowe xl:rounded-tl-3xl"
            // style={`${selectedOrderId === 0 ? (height = "100vh") : ""}`}
          >
            {selectedOrderId === 0 ? (
              <div>
                {ordersData &&
                ordersData.order_bikes &&
                ordersData.order_bikes.length !== 0 ? (
                  <div className="p-5 text-xl font-light font-inter text-gray-900">
                    Select one of the bikes to show details!
                  </div>
                ) : (
                  <div className="p-5 text-xl font-light font-inter text-gray-900"></div>
                )}

                <div className="w-50 my-32 flex justify-center inems-center">
                  <Image src={SelectedBike} alt="activity" />
                </div>
              </div>
            ) : (
              <div>
                {orderDetailsData ? (
                  <NireekaBike />
                ) : (
                  <div
                    className="flex justify-center items-center h-full w-full"
                    style={{ height: "100vh" }}
                  >
                    <ReactLoading
                      type="spin"
                      color="rgb(209, 213, 219)"
                      height={80}
                      width={80}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
