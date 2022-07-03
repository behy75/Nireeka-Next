import React, { useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import EditAddress from "./EditAddress";
import { useState } from "react";
import {
  countriesPending,
  getEditAddressPending,
  listAddressPending,
  setEditShippingAndBillingModal,
  setPaymentModal,
} from "../../../app/userPanelSlice";
import DelAddressModal from "./DelAddressModal";
import GreenTick from "../../../public/images/green_tick.png";
import Image from "next/image";

function ActionItem({ addressId, orderId, isActive, index, setItemSelected }) {
  const dispatch = useDispatch();
  const [editOn, setEdieOn] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      {editOn && (
        <div>
          <EditAddress
            editOn={editOn}
            setEdieOn={setEdieOn}
            index={index}
            setItemSelected={setItemSelected}
          />
        </div>
      )}
      {open && (
        <div>
          <DelAddressModal open={open} setOpen={setOpen} />
        </div>
      )}
      <div className="relative inline-block text-left">
        <Menu>
          {({ open }) => (
            <>
              <span className="">
                <Menu.Button className="">
                  <div className="flex justify-center inems-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </div>
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 z-50 w-24 sm:w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                >
                  <div className="py-1">
                    {isActive && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => {
                              dispatch(setEditShippingAndBillingModal(true));
                              dispatch(getEditAddressPending(addressId));
                              dispatch(countriesPending());
                              setEdieOn(true);
                            }}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex justify-between cursor-pointer w-full px-4 py-1 sm:py-2 text-sm leading-5 text-left`}
                          >
                            edit
                          </a>
                        )}
                      </Menu.Item>
                    )}

                    {!orderId && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => {
                              dispatch(setPaymentModal(true));
                              dispatch(getEditAddressPending(addressId));
                              setOpen(true);
                            }}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex justify-between cursor-pointer w-full px-4 py-1 sm:py-2 text-sm leading-5 text-left`}
                          >
                            delete
                          </a>
                        )}
                      </Menu.Item>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}

function Address({
  name,
  orderAssiged,
  orderStage,
  country,
  province,
  city,
  address,
  address2,
  zipcode,
  phone,
  addressId,
  orderId,
  isActive,
  index,
}) {
  const state = useSelector((state) => state);
  let { listAddressData } = state.userPanel;
  const [itemSelected, setItemSelected] = useState(0);

  useEffect(() => {
    if (itemSelected === index) {
      const timer = setTimeout(() => {
        setItemSelected(0);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [itemSelected, index]);

  return (
    <div
      className={
        index !== listAddressData.length
          ? "flex w-full py-4 border-b border-gray-200"
          : "flex w-full py-4"
      }
    >
      <div className="relative font-dosis text-gray-600 w-1/4 font-medium text-sm">
        {name}
        {itemSelected === index && (
          <div className="absolute">
            <div className="w-5 mx-2 flex justify-center inems-center">
              <Image src={GreenTick} alt="green-tick" />
            </div>
          </div>
        )}
      </div>
      <div className="w-1/3">
        <div className="font-dosis font-medium text-xs sm:text-sm text-gray-400">
          {country}, {province}, {city}
        </div>
        <div className="font-dosis font-medium text-xs sm:text-sm text-gray-400">
          {address}, {address2}
        </div>
        <div className="font-dosis font-medium text-xs sm:text-sm text-gray-400">
          {zipcode}, {phone}
        </div>
      </div>
      <div className="flex flex-col justify-start items-center font-dosis w-1/4 text-xs sm:text-sm font-medium">
        <div className="font-dosis text-gray-600 text-xs sm:text-sm font-medium">
          {orderStage}
        </div>
        <div className="font-dosis text-xs sm:text-sm font-light">
          {orderAssiged ? (
            <div className="bg-nireekaGreen text-xs sm:text-sm p-1 rounded-lg text-white flex justify-center">
              #{orderAssiged}
            </div>
          ) : (
            <div className="bg-red-400 text-xs sm:text-sm p-1 rounded-lg text-white flex justify-center">
              N/A
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center w-1/12">
        <ActionItem
          addressId={addressId}
          orderId={orderId}
          isActive={isActive}
          index={index}
          setItemSelected={setItemSelected}
        />
      </div>
    </div>
  );
}

export default function Addresses() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { listAddressData, putEditAddressReqSuccess, delAddressReqSuccess } =
    state.userPanel;

  useEffect(() => {
    if (putEditAddressReqSuccess || delAddressReqSuccess) {
      dispatch(listAddressPending());
    }
  }, [putEditAddressReqSuccess, delAddressReqSuccess]);

  if (!listAddressData) {
    return (
      <div
        className="bg-white flex justify-center items-center h-full w-full"
        style={{ height: "60vh" }}
      >
        <ReactLoading
          type="spin"
          color="rgb(209, 213, 219)"
          height={80}
          width={80}
        />
      </div>
    );
  }

  return (
    <>
      {listAddressData && listAddressData.length !== 0 ? (
        <div>
          <div className="font-dosis text-sm font-medium text-gray-500">
            You can only edit addresses that dont have an active order.
          </div>
          <div className="font-dosis text-base font-semibold text-gray-800 my-3">
            Deliavery Address
          </div>
          <div className="flex w-full mt-4 border-b border-gray-200">
            <div className="font-dosis text-gray-600 w-1/4 font-semibold text-xs sm:text-sm px-1">
              Consignee
            </div>
            <div className="font-dosis text-gray-600 w-1/3 font-semibold text-xs sm:text-sm px-1">
              Postal Address
            </div>
            <div className="flex justify-center items-center font-dosis text-gray-600 w-1/4 font-semibold text-xs sm:text-sm px-1">
              Order Stage
            </div>
            <div className="flex justify-center items-center font-dosis text-gray-600 w-1/12 font-semibold text-xs sm:text-sm px-1">
              Action
            </div>
          </div>

          {listAddressData ? (
            listAddressData.map((item, index) => (
              <Address
                key={item.id}
                index={index + 1}
                addressId={item.id}
                name={item.full_name}
                country={item.country}
                province={item.state}
                city={item.city}
                address={item.address}
                address2={item.address2}
                zipcode={item.zipcode}
                phone={item.phone}
                orderAssiged={item.id}
                orderStage={item.stage}
                orderId={item.order}
                isActive={item.active}
              />
            ))
          ) : (
            <div
              className="flex justify-center items-center"
              style={{ height: "60vh" }}
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
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span className="my-2 font-light text-lg sm:text-2xl">
            {`You haven't registered any addresses.`}
          </span>
        </div>
      )}
    </>
  );
}
