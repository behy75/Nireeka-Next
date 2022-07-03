import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import {
  orderDetailsPending,
  setSelectedOrderId,
} from "../../../app/userPanelSlice";
import NireekaBike from "./NireekaBike";

export default function BikesTable({
  orderId,
  orderBikeId,
  model,
  price,
  details,
  manufactureDate,
  lastItem,
  selectedBg,
  percent,
  stage,
  colorAndSize,
  frameNumber,
  bikeColor,
  isRefaunded,
  isDefault,
  refundedAt,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { selectedOrderId, orderDetailsData } = state.userPanel;

  return (
    <div className="bg-white rounded-3xl z-50">
      <div
        className={`w-full bg-white rounded-3xl my-2 shadow-sm border ${
          selectedOrderId === orderBikeId
            ? "border-blue-700"
            : "border-gray-200"
        } cursor-pointer`}
        onClick={() =>
          orderBikeId === selectedOrderId
            ? dispatch(setSelectedOrderId(0))
            : dispatch(setSelectedOrderId(orderBikeId)) &&
              dispatch(orderDetailsPending(orderBikeId))
        }
      >
        <div className="font-semibold font-inter text-lg pt-5 ml-6">
          <span className="font-semibold font-inter text-lg">#{model}</span>
          {isDefault ? (
            <span className="font-light font-inter text-md">
              {` (Default Bike)`}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 md:mx-0 lg:-mx-8">
            <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden flex justify-center items-center">
                <table
                  className={
                    !lastItem
                      ? `w-900 border-b ${selectedBg} mb-3`
                      : "w-900 border-b mb-3"
                  }
                >
                  <tbody>
                    <tr className="flex justify-between">
                      <td
                        className={
                          bikeColor == "#FFFFFF"
                            ? "px-6 py-4 font-normal font-inter text-xs lg:text-sm whitespace-nowrap md:w-40 lg:w-52 text-gray-500 text-start"
                            : "px-6 py-4 font-normal font-inter text-xs lg:text-sm whitespace-nowrap md:w-40 lg:w-52 text-white text-start"
                        }
                      >
                        <span
                          style={{ backgroundColor: `${bikeColor}` }}
                          className={
                            bikeColor == "#FFFFFF"
                              ? "font-inter px-4 py-1 rounded-xl border border-gray-200"
                              : "font-inter px-4 py-1 rounded-xl"
                          }
                        >
                          {colorAndSize}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-light font-inter text-xs lg:text-sm text-gray-500 text-center">
                        {frameNumber
                          ? `Frame Number: #${frameNumber}`
                          : "Frame Number: N/A"}
                      </td>
                      <td className="hidden sm:block px-6 py-4 whitespace-nowrap font-normal font-inter text-xs lg:text-sm text-gray-800 text-center">
                        {`$${price.toLocaleString()} USD`}
                      </td>

                      <td className="hidden sm:block px-6 py-4 whitespace-nowrap font-light font-inter text-xs lg:text-sm text-gray-500 text-right">
                        {manufactureDate !== "null" ? manufactureDate : "date"}
                      </td>
                    </tr>
                    <tr className="flex justify-between">
                      <td className="block sm:hidden px-6 py-2 whitespace-nowrap font-normal font-inter text-xs lg:text-sm text-gray-800 text-center">
                        {`$${price.toLocaleString()} USD`}
                      </td>

                      <td className="block sm:hidden px-6 py-2 whitespace-nowrap font-light font-inter text-xs lg:text-sm text-gray-500 text-right">
                        {manufactureDate !== "null" ? manufactureDate : "date"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {!isRefaunded ? (
                <div className="overflow-hidden flex flex-col justify-center items-center mb-2">
                  <div className="flex justify-start items-start w-900 py-1">
                    <span className="font-medium font-inter text-xs lg:text-sm">
                      Your Order Status
                    </span>
                  </div>
                  <div className="w-900">
                    <div className="relative w-full flex flex-row-reverse items-center flex-grow py-1 group">
                      <div className="w-full relative flex justify-start h-2 rounded-full bg-gray-300">
                        <div
                          className={
                            Number(percent) == 100 ||
                            Number(percent) == 101 ||
                            Number(percent) == 102 ||
                            Number(percent) == 103 ||
                            Number(percent) == 104
                              ? `relative flex justify-center h-2 rounded-full bg-blue-400 z-50`
                              : `relative flex justify-center h-2 rounded-l-full bg-blue-400 z-50`
                          }
                          style={{
                            width: `${
                              parseInt(percent) == 104
                                ? 100
                                : Number(percent) == 103
                                ? 100
                                : Number(percent) == 102
                                ? 80
                                : Number(percent) == 101
                                ? 60
                                : Number(percent) == 100
                                ? 45
                                : Number(percent) == 0
                                ? 5
                                : 25
                            }%`,
                          }}
                        ></div>
                      </div>

                      {/* <span className="absolute bottom-0 text-xs font-light text-gray-700">
                      {stage}
                    </span> */}
                    </div>
                    <div className="flex justify-end sm:justify-between">
                      <div className="hidden md:block">
                        <span
                          className={
                            Number(percent) === 0
                              ? `font-normal font-inter text-gray-800 text-xs`
                              : `font-normal font-inter text-gray-300 text-xs`
                          }
                        >
                          Order Placed
                        </span>
                      </div>
                      <div className="hidden md:block">
                        {Number(percent) == 0 ||
                        Number(percent) == 100 ||
                        Number(percent) == 101 ||
                        Number(percent) == 102 ||
                        Number(percent) == 103 ||
                        Number(percent) == 104 ? (
                          <span className="font-normal font-inter text-gray-300 text-xs">
                            Manufacturing
                          </span>
                        ) : (
                          <span className="font-normal font-inter text-gray-800 text-xs">
                            {`Manufacturing (${percent}%)`}
                          </span>
                        )}
                      </div>
                      <div className="hidden md:block">
                        <span
                          className={
                            Number(percent) === 100
                              ? `font-normal font-inter text-gray-800 text-xs`
                              : `font-normal font-inter text-gray-300 text-xs`
                          }
                        >
                          Assembled
                        </span>
                      </div>
                      <div className="hidden md:block">
                        <span
                          className={
                            Number(percent) === 101
                              ? `font-normal font-inter text-gray-800 text-xs`
                              : `font-normal font-inter text-gray-300 text-xs`
                          }
                        >
                          Packed
                        </span>
                      </div>
                      <div className="hidden md:block">
                        <span
                          className={
                            Number(percent) === 102
                              ? `font-normal font-inter text-gray-800 text-xs`
                              : `font-normal font-inter text-gray-300 text-xs`
                          }
                        >
                          Shipped
                        </span>
                      </div>
                      <div className="hidden md:block">
                        <span
                          className={
                            Number(percent) === 103
                              ? `font-normal font-inter text-gray-800 text-xs`
                              : `font-normal font-inter text-gray-300 text-xs`
                          }
                        >
                          Delivered
                        </span>
                      </div>
                      <div className="block md:hidden">
                        <span
                          className={`font-normal font-inter text-gray-800 text-xs`}
                        >
                          {percent === 0 ||
                          percent === 100 ||
                          percent === 101 ||
                          percent === 102 ||
                          percent === 103 ||
                          percent === 104
                            ? `${stage}`
                            : `${stage}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center my-6">
                  <div className="">
                    <span className="font-inter text-2xl font-semibold text-nireekaRed">
                      REFUNDED
                    </span>
                  </div>
                  <div className="">
                    <span className="font-inter text-base text-gray-600">
                      The order canceled on {refundedAt}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedOrderId === orderBikeId ? (
        <div className="relative p-4 block xl:hidden z-0">
          {orderDetailsData ? (
            <NireekaBike />
          ) : (
            <div
              className="flex justify-center items-center h-full w-full"
              style={{ height: "30vh" }}
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
      ) : (
        ""
      )}
    </div>
  );
}
