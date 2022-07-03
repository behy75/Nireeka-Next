import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ordersPending } from "../../../app/userPanelSlice";
import BikesTable from "./BikesTable";

export default function Bikes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { ordersData, setDefaultOrderReqSuccess } = state.userPanel;

  useEffect(() => {
    if (setDefaultOrderReqSuccess) {
      dispatch(ordersPending());
    }
  }, [setDefaultOrderReqSuccess]);

  return (
    <div>
      <div className="py-1">
        {ordersData && ordersData.order_bikes[0] ? (
          <div>
            {ordersData.order_bikes.map((item) => (
              <BikesTable
                isRefaunded={item.is_refunded}
                isDefault={item.is_default}
                refundedAt={item.refunded_at}
                bikeColor={item.color_code}
                percent={item.progress}
                key={item.id}
                orderId={item.id}
                orderBikeId={item.order_bike_id}
                model={`${item.id} - ${item.title}`}
                price={item.total_price}
                colorAndSize={`${item.color}/${item.size}"`}
                manufactureDate={`${item.estimated_shipping}`}
                details={`Details`}
                lastItem={item.id + 1 === ordersData.order_bikes.length}
                selectedBg={item.id === 0 ? "bg-red-500" : ""}
                stage={item.stage}
                frameNumber={item.frame_no}
              />
            ))}
          </div>
        ) : (
          <div className="w-full my-5 flex flex-col justify-center items-center">
            <div className="my-2 font-light text-lg sm:text-2xl ml-6 flex justify-center items-center">
              {`You haven't ordered a bike yet!`}
            </div>

            <p className="my-2 font-light text-xs sm:text-sm lg:text-lg xl:text-xl ml-6 flex justify-center items-center">
              Order yours from
              <Link href="/">
                <a className="ml-1 font-light text-xs sm:text-sm lg:text-lg xl:text-xl text-blue-400 hover:text-blue-600 cursor-pointer">
                  HERE!
                </a>
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
