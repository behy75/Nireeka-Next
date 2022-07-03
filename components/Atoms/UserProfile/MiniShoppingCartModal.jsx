import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

function ProductsItem({
  product,
  id,
  orderBikeId,
  setRemove,
  remove,
  setTotalQty,
}) {
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
      {itemsPrice > 0 && !remove && bikeDetails && (
        <li className="py-8 flex font-light font-inter text-sm sm:items-start">
          {bikeDetails && bikeDetails.image && (
            <Link href={bikeDetails.image}>
              <a
                target="_blank"
                className="flex justify-center w-28 h-auto border border-gray-200 rounded-md"
              >
                <Image
                  width={738}
                  height={422}
                  src={bikeDetails.image}
                  alt={bikeDetails.title}
                />
              </a>
            </Link>
          )}
          <div className="ml-4 flex-auto grid gap-y-3 gap-x-5 grid-rows-1 grid-cols-1 items-start sm:ml-6 sm:flex sm:gap-0 sm:items-start">
            <div className="flex-auto row-end-1 sm:pr-6">
              <h3 className="font-light text-gray-900">
                {bikeDetails && bikeDetails.image && (
                  <Link href={bikeDetails.image}>
                    <a target="_blank">
                      {`${
                        bikeDetails && bikeDetails.title
                          ? bikeDetails.title
                          : ""
                      }`}
                    </a>
                  </Link>
                )}
              </h3>
              {bikeDetails &&
                bikeDetails.details &&
                React.Children.toArray(
                  bikeDetails.details.map((item) => (
                    <p key={item.title} className="mt-1 text-xs text-gray-500">
                      {item.title}
                    </p>
                  ))
                )}
            </div>
            <p className="row-end-2 row-span-2 font-light text-gray-900 sm:ml-6 sm:order-1 sm:flex-none sm:w-1/3 sm:text-right">
              {`$${(itemsPrice * qty).toLocaleString()}`}
            </p>
            <div className="flex items-center sm:flex-none sm:block sm:text-center">
              <label htmlFor={`quantity-${qty}`} className="sr-only">
                Quantity
              </label>
              <select
                id={`quantity-${qty}`}
                name={`quantity-${qty}`}
                defaultValue={qty}
                onChange={(item) => {
                  setQty(item.target.value);
                  setTotalQty(item.target.value);
                }}
                className="block cursor-pointer max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>

              <div
                onClick={() => {
                  window.localStorage.removeItem(`${orderBikeId}`);
                  setRemove(true);
                }}
                className="ml-4 font-light text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2 cursor-pointer"
              >
                <span>Remove</span>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

export default function MiniShoppingCartModal({
  openMiniShoppingCart,
  setOpenMiniShoppingCart,
  setReset,
  reset,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
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

  useEffect(() => {
    let total = 0;
    if (getUserBikesData && getUserBikesData[0]) {
      getUserBikesData.map((item, index) => {
        let bikeDetails = JSON.parse(
          window.localStorage.getItem(`${item.order_bike_id}`)
        );
        if (
          window.localStorage.getItem(`${item.order_bike_id}`) &&
          bikeDetails &&
          bikeDetails.details &&
          bikeDetails.details[0]
        ) {
          let prices = 0;
          bikeDetails.details.map((ev) => (prices = prices + ev.price));
        }
        total =
          bikeDetails && bikeDetails.qty
            ? total + bikeDetails.qty * prices
            : total;
      });
    }
    setTotalPrice(total);
  }, [getUserBikesData, totalQty]);

  return (
    <Transition.Root show={openMiniShoppingCart} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-scroll"
        onClose={setOpenMiniShoppingCart}
      >
        <div
          className="flex min-h-screen text-center sm:block sm:px-6 lg:px-8"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-105"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-105"
          >
            <div
              style={{ maxHeight: "80vh" }}
              className="flex text-base text-left transform transition w-full overflow-y-scroll sm:inline-block max-w-3xl sm:my-8 sm:align-middle"
            >
              <form className="w-full relative flex flex-col bg-white pt-6 pb-8 sm:pb-6 sm:rounded-lg lg:py-8">
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                  <h2 className="text-lg font-light font-inter text-gray-900">
                    Shopping Cart
                  </h2>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => setOpenMiniShoppingCart(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {ordersNumber > 0 ? (
                  <>
                    <section aria-labelledby="cart-heading">
                      <h2 id="cart-heading" className="sr-only">
                        Items in your shopping cart
                      </h2>

                      <ul
                        role="list"
                        className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8"
                      >
                        {getUserBikesData &&
                          getUserBikesData[0] &&
                          getUserBikesData.map((item, index) => (
                            <ProductsItem
                              setRemove={setRemove}
                              remove={remove}
                              ordersNumber={index + 1}
                              key={index + 1}
                              id={index + 1}
                              orderBikeId={item.order_bike_id}
                              setTotalQty={setTotalQty}
                            />
                          ))}
                      </ul>
                    </section>
                    <section
                      aria-labelledby="summary-heading"
                      className="mt-auto sm:px-6 lg:px-8"
                    >
                      <div className="bg-gray-50 p-6 sm:p-8 sm:rounded-lg">
                        <h2 id="summary-heading" className="sr-only">
                          Order summary
                        </h2>

                        <div className="flow-root font-light font-inter">
                          <dl className="-my-4 text-sm divide-y divide-gray-200">
                            <div className="py-4 flex items-center justify-between">
                              <dt className="text-gray-600">Subtotal</dt>
                              <dd className="font-light text-gray-900">{`$${totalPrice.toLocaleString()}`}</dd>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                              <dt className="text-gray-600">Shipping</dt>
                              <dd className="font-light text-gray-900">$0</dd>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                              <dt className="text-gray-600">Tax</dt>
                              <dd className="font-light text-gray-900"> $0</dd>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                              <dt className="text-base font-light text-gray-900">
                                Order total
                              </dt>
                              <dd className="text-base font-light text-gray-900">
                                {`$${totalPrice.toLocaleString()}`}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </section>
                    <Link href="/checkout">
                      <a className="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                        <div className="bg-indigo-600 cursor-pointer border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-inter font-light text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                          Continue to Payment
                        </div>
                      </a>
                    </Link>
                  </>
                ) : (
                  <div className="w-full flex justify-center items-center">
                    <span className="font-inter font-light text-xs sm:text-sm">
                      Your cart is empty.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
