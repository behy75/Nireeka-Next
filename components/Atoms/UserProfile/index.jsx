import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/outline";
import { userPanelPending } from "../../../app/userPanelSlice";
import { logoutPending } from "../../../app/authSlice";
import ShoppingCartIcon from "../../../public/images/shopping.png";
import { NotificationsImg } from "../../UserPanel/img";
import Image from "next/image";
import Link from "next/link";

import MiniShoppingCart from "./MiniShoppingCart";
import MiniShoppingCartModal from "./MiniShoppingCartModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Profile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  let { isAuth, isLoading } = state.auth;
  let { data } = state.userPanel;

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth, isLoading, router]);

  return (
    <div className="flex flex-col items-center my-2">
      <div className="my-2">
        {data ? (
          <img
            className="h-20 w-20 rounded-full"
            src={`${data.avatar}`}
            alt="avatar"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </div>
      <div className="my-2 flex flex-col justify-center items-center">
        <span className="font-semibold font-inter text-sm sm:text-base">{`${data.name} ${data.last_name}`}</span>
        <span className="font-light font-inter text-sm sm:text-base">{`${data.email}`}</span>
      </div>
      <div className="w-full flex flex-col items-center">
        <Link href="/setting">
          <a className="flex justify-center items-center py-1 px-3 my-1 border border-gray-300 hover:bg-gray-100 rounded-3xl shadow-sm cursor-pointer">
            <span className="flex items-center font-light font-inter text-gray-800 hover:text-gray-600 text-xs sm:text-sm text-center w-full h-full mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Manage your Nireeka Account
            </span>
          </a>
        </Link>
        <Link href="/">
          <a className="flex justify-center items-center w-full my-3 py-3 border-t border-b border-gray-300 hover:bg-gray-100 shadow-sm cursor-pointer">
            <span className="flex justify-center items-center font-light font-inter text-gray-800 hover:text-gray-600 text-xs sm:text-sm w-full h-full mx-1">
              Forum Profile
            </span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div
              className="flex justify-center items-center py-2 px-5 my-1 border border-gray-300 hover:bg-gray-100 rounded-md shadow-sm cursor-pointer"
              onClick={() => {
                dispatch(logoutPending());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span className="font-light font-inter text-gray-800 hover:text-gray-600 text-xs sm:text-sm text-center w-full h-full">
                Sign Out
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function UserProfile({}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { data } = state.userPanel;
  let { isAuth } = state.auth;

  const [reset, setReset] = useState(false);
  let ordersNumber = 0;

  if (typeof window !== "undefined") {
    ordersNumber = JSON.parse(window.localStorage.getItem(`ordersNumber`));
  }

  // let ordersNumber = 0;
  //

  useEffect(() => {
    if (isAuth) {
      dispatch(userPanelPending());
    }
  }, [isAuth]);
  const [openMiniShoppingCart, setOpenMiniShoppingCart] = useState(false);
  return (
    <div className="flex justify-end w-full items-center md:ml-6">
      <Menu as="div" className="mx-2 relative">
        <div
          onClick={() => setOpenMiniShoppingCart(true)}
          className={classNames(
            ordersNumber > 0
              ? ""
              : "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            "max-w-xs flex items-center text-sm rounded-full cursor-pointer"
          )}
        >
          <span className="sr-only">Open Shopping Cart</span>
          {openMiniShoppingCart && (
            <MiniShoppingCartModal
              openMiniShoppingCart={openMiniShoppingCart}
              setOpenMiniShoppingCart={setOpenMiniShoppingCart}
              reset={reset}
              setReset={setReset}
            />
          )}
          <div className="relative w-5 flex justify-center inems-center">
            <Image src={ShoppingCartIcon} alt="shopping-cart" />
            {ordersNumber > 0 && (
              <span className="flex justify-center inems-center absolute w-4 h-4 -left-1 -bottom-1 text-xs font-light font-inter bg-nireekaRed text-white rounded-full">
                {ordersNumber}
              </span>
            )}
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="origin-top-right absolute right-0 mt-2 z-50 w-64 sm:w-1100 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MiniShoppingCart reset={reset} setReset={setReset} />
          </div>
        </Transition>
      </Menu>
      <button
        type="button"
        className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="sr-only">View notifications</span>
        <NotificationsImg />
      </button>
      <Menu as="div" className="ml-3 relative z-50">
        <div>
          <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">Open user menu</span>
            {data ? (
              <img
                className="h-8 w-8 rounded-full"
                src={`${data.avatar}`}
                alt="avatar"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="origin-top-right absolute right-0 mt-2 w-72 sm:w-80 rounded-lg shadow-xl py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Profile />
          </div>
        </Transition>
      </Menu>
    </div>
  );
}
