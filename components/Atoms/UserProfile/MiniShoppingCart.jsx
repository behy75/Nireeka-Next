import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import DeleteIcon from "../../../public/images/delete.svg";

function ShoppingCartItem({ orderBikeId, setRemove, remove }) {
  let ordersNumber = 0;

  if (typeof window !== "undefined") {
    ordersNumber = JSON.parse(window.localStorage.getItem(`ordersNumber`));
  }
  const [itemsPrice, setItemsPrice] = useState(0);
  let bikeDetails = JSON.parse(window.localStorage.getItem(`${orderBikeId}`));
  const [qty, setQty] = useState(
    bikeDetails && bikeDetails.qty ? bikeDetails.qty : 1
  );

  useEffect(() => {
    let prices = 0;
    if (window.localStorage.getItem(`${orderBikeId}`) && bikeDetails.details) {
      bikeDetails.details.map((pr) => (prices = prices + pr.price));
    }
    setItemsPrice(prices);
  }, [window]);

  useEffect(() => {
    if (window.localStorage.getItem(`${orderBikeId}`)) {
      window.localStorage.setItem(
        `${orderBikeId}`,
        JSON.stringify({
          ...bikeDetails,
          qty: qty,
        })
      );
    }
  }, [qty]);

  return (
    <>
      {itemsPrice > 0 && !remove && (
        <div className="flex w-full">
          <div className="w-1/2 md:1/3 py-2 text-xs sm:text-sm font-light text-gray-500 flex justify-start items-center">
            {`${bikeDetails && bikeDetails.title ? bikeDetails.title : ""}`}
          </div>
          <div className="w-1/4 md:1/3 py-2 text-xs sm:text-sm font-light text-gray-500 flex justify-center items-center">
            <span
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="px-2 py-1 cursor-pointer border border-gray-200 rounded-md mr-2 text-center"
            >
              -
            </span>
            <span className="flex justify-center items-center">{qty}</span>
            <span
              onClick={() => setQty(qty + 1)}
              className="px-2 py-1 cursor-pointer border border-gray-200 rounded-md ml-2"
            >
              +
            </span>
          </div>
          <div className="w-1/4 md:1/3 py-2 text-xs sm:text-sm text-gray-500 flex justify-center items-center">
            {`$${(itemsPrice * qty).toLocaleString()}`}
          </div>
          <div className="relative flex justify-center items-center">
            <div
              onClick={() => {
                window.localStorage.removeItem(`${orderBikeId}`);
                setRemove(true);
              }}
              className="absolute -right-2 w-5 flex justify-center inems-center cursor-pointer"
            >
              <Image src={DeleteIcon} alt="delete" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function MiniShoppingCart({ setReset, reset }) {
  const state = useSelector((state) => state);
  let { getUserBikesData } = state.nsd;
  let ordersNumber = 0;

  if (typeof window !== "undefined") {
    ordersNumber = JSON.parse(window.localStorage.getItem(`ordersNumber`));
  }
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    if (remove) {
      setReset(true);
    }
    if (!remove) {
      setReset(false);
    }
  }, [remove]);

  useEffect(() => {
    let number = 0;
    if (getUserBikesData && getUserBikesData[0]) {
      getUserBikesData.map((item, index) => {
        if (
          window.localStorage.getItem(`${item.order_bike_id}`) &&
          JSON.parse(window.localStorage.getItem(`${item.order_bike_id}`)) &&
          JSON.parse(window.localStorage.getItem(`${item.order_bike_id}`))
            .details &&
          JSON.parse(window.localStorage.getItem(`${item.order_bike_id}`))
            .details[0]
        ) {
          number = number + 1;
        }
      });
      window.localStorage.setItem(`ordersNumber`, JSON.stringify(number));
      setRemove(false);
    }
  }, [getUserBikesData, remove]);

  return (
    <div className="py-4">
      {ordersNumber > 0 ? (
        <>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden flex justify-center items-center">
                  <div className="w-900 border-b border-gray-200">
                    <div className="flex w-full">
                      <div className="w-1/2 md:1/3 py-1 text-xs sm:text-sm font-light text-gray-900 flex justify-start">
                        PRODUCT
                      </div>
                      <div className="w-1/4 md:1/3 py-1 text-xs sm:text-sm font-light text-gray-9500 flex justify-center">
                        QUANTITY
                      </div>
                      <div className="w-1/4 md:1/3 sm:px-3 py-1 text-xs sm:text-sm font-light text-gray-900 flex justify-center">
                        PRICE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden flex justify-center items-center">
                  <div
                    className={
                      // paymentsData &&
                      // paymentsData.order_paid &&
                      // paymentsData.order_paid.length < id
                      // ?
                      // "w-900 border-b border-gray-200"
                      // :
                      "w-900 flex flex-col justify-center"
                    }
                  >
                    {getUserBikesData &&
                      getUserBikesData[0] &&
                      getUserBikesData.map((item, index) => (
                        <ShoppingCartItem
                          setRemove={setRemove}
                          remove={remove}
                          ordersNumber={index + 1}
                          key={index + 1}
                          orderBikeId={item.order_bike_id}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            {ordersNumber > 1 && (
              <div>
                <span
                  onClick={() => {
                    window.localStorage.clear();
                    setRemove(true);
                  }}
                  className="cursor-pointer text-sm sm:text-base font-light mx-3 px-3 py-1 text-gray-500 hover:text-gray-700"
                >
                  Clear All
                </span>
              </div>
            )}

            <div>
              <Link href="/checkout">
                <a className="cursor-pointer border border-transparent rounded-md shadow-sm text-sm sm:text-base font-light mx-3 px-3 py-1 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  CHECKOUT
                </a>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center">
          <span className="font-inter font-light text-xs sm:text-sm">
            Your cart is empty.
          </span>
        </div>
      )}
    </div>
  );
}
