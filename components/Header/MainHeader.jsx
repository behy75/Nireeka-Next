import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveItem,
  setPaymentModal,
  setTicketStep,
} from "../../app/userPanelSlice";
import { useRouter } from "next/router";
import UserProfile from "../Atoms/UserProfile";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainHeader() {
  const [editOn, setEdieOn] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;

  const { pathname } = useRouter();
  const condition1 = router.asPath === "/";
  const condition2 = pathname.includes("/help-center");
  const condition3 = pathname.includes("/configurator/[bikeId]");
  const condition4 = pathname.includes("/user-panel");
  const condition5 = pathname.includes("/affiliate");
  const condition6 = pathname.includes("/orders");
  const condition7 = pathname.includes("/setting");
  const condition8 = pathname.includes("/reports");
  const condition9 = pathname.includes("/navigations");
  const condition10 = pathname.includes("/challenges");
  const condition11 = pathname.includes("/payments");
  const condition12 = pathname.includes("/affliate");
  const condition13 = pathname.includes("/support");
  const condition14 = pathname.includes("/update");

  if (
    condition1 ||
    condition2 ||
    condition3 ||
    condition4 ||
    condition5 ||
    condition6 ||
    condition7 ||
    condition8 ||
    condition9 ||
    condition10 ||
    condition11 ||
    condition12 ||
    condition13 ||
    condition14
  )
    return <Fragment />;

  const handleSubmitForm = ({}) => {
    dispatch(setActiveItem(9));
    dispatch(setTicketStep(1));
    if (!isAuth) {
      router.push("/login");
      window.localStorage.setItem(`pathname`, JSON.stringify("/user-panel"));
    }
    if (isAuth) {
      router.push("/user-panel");
    }
  };
  let ordersNumber = 0;

  if (typeof window !== "undefined") {
    ordersNumber = JSON.parse(window.localStorage.getItem(`ordersNumber`));
  }
  return (
    <Popover className="relative bg-white">
      <div className="absolute z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link href="/">
              <a className="flex">
                <span className="sr-only">Nireeka</span>
                <img
                  className="h-10 w-auto sm:h-12 z-50"
                  src="https://nireeka.com/images/icon-rect.svg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex md:space-x-4 xl:space-x-8">
              <div className="w-14">
                <Link href="/configurator">
                  <a className="text-sm font-light font-inter text-gray-500 hover:text-gray-900">
                    E-BIKES
                  </a>
                </Link>
              </div>

              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-sm font-light font-inter text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span className="font-inter">SHOP</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-500" : "text-gray-500",
                          "ml-2 h-5 w-5 group-hover:text-gray-900"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute -mt-1 z-10 top-full transform shadow-lg bg-white">
                        <div className="border border-indigo-300 rounded-md p-1">
                          <div className="px-2 py-1 pa">
                            <Link href="/">
                              <a className="hover:border-b hover:border-gray-300 font-light font-inter text-sm text-gray-500 hover:text-gray-900">
                                ACCESSORIES
                              </a>
                            </Link>
                          </div>
                          <div className="mx-2 my-1">
                            <Link href="/">
                              <a className="hover:border-b hover:border-gray-300 font-light font-inter text-sm text-gray-500 hover:text-gray-900">
                                SPARE PARTS
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <div className="w-14">
                <Link href="/">
                  <a className="text-sm font-light font-inter text-gray-500 hover:text-gray-900">
                    FORUM
                  </a>
                </Link>
              </div>

              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-sm font-light font-inter text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span className="font-inter">SUPPORT</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-500" : "text-gray-500",
                          "ml-2 h-5 w-5 group-hover:text-gray-900"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute -mt-1 z-10 top-full transform shadow-lg bg-white">
                        <div className="border border-indigo-300 rounded-md p-1">
                          <div className="px-2 py-1 pa">
                            <Link href="/help-center">
                              <a className="hover:border-b hover:border-gray-300 font-light font-inter text-sm text-gray-500 hover:text-gray-900">
                                HELP CENTER
                              </a>
                            </Link>
                          </div>
                          <div className="mx-2 my-1">
                            <a
                              onClick={handleSubmitForm}
                              className="hover:border-b hover:border-gray-300 font-light cursor-pointer font-inter text-sm text-gray-500 hover:text-gray-900"
                            >
                              TICKETS
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {isAuth && (
                <div className="w-24">
                  <Link href="/user-panel">
                    <a className="w-full text-sm font-light font-inter text-gray-500 hover:text-gray-900">
                      USER PANEL
                    </a>
                  </Link>
                </div>
              )}
            </Popover.Group>
            {isAuth ? (
              <UserProfile ordersNumber={ordersNumber} />
            ) : (
              <div className="z-50 flex items-center justify-end">
                <Link href="/login">
                  <a className="text-xs sm:text-sm font-inter font-light text-gray-500 hover:text-gray-900 mx-1">
                    Login
                  </a>
                </Link>
                <Link href="/register">
                  <a className="text-xs sm:text-sm font-inter font-light text-gray-500 hover:text-gray-900 mx-1">
                    Register
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-2 px-5 sm:pb-8">
              <div className="">
                <div className="-mr-2 w-full flex flex-row-reverse justify-between">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-1 px-5">
              <div className="grid grid-cols-1">
                <Link href="/configurator">
                  <a
                    aria-hidden="true"
                    className="my-1 rounded-md text-base font-light font-inter text-gray-900 hover:text-gray-700"
                  >
                    E-BIKES
                  </a>
                </Link>
                <Link href="/">
                  <a className="my-1 rounded-md text-base font-light font-inter text-gray-900 hover:text-gray-700">
                    ACCESSORIES
                  </a>
                </Link>
                <Link href="/">
                  <a className="my-1 rounded-md text-base font-light font-inter text-gray-900 hover:text-gray-700">
                    SPARE PARTS
                  </a>
                </Link>
                <Link href="/">
                  <a className="my-1 rounded-md text-base font-light font-inter font-inter text-gray-900 hover:text-gray-700">
                    FORUM
                  </a>
                </Link>
                <Link href="/help-center">
                  <a className="my-1 rounded-md text-base font-light font-inter text-gray-900 hover:text-gray-700">
                    HELP CENTER
                  </a>
                </Link>
                <a
                  onClick={handleSubmitForm}
                  className="my-1 rounded-md text-base font-light font-inter text-gray-900 hover:text-gray-700"
                >
                  TICKETS
                </a>
                {isAuth ? (
                  <Link href="/user-panel">
                    <a className="my-1 rounded-md text-base font-light font-inter text-gray-900 hover:text-gray-700">
                      USER PANEL
                    </a>
                  </Link>
                ) : (
                  <>
                    <Link href="/login">
                      <a className="my-1 rounded-md text-base font-light font-inter text-gray-900 hover:text-gray-700">
                        LOGIN
                      </a>
                    </Link>
                    <Link href="/register">
                      <a className="my-1 rounded-md text-base font-light font-inter text-gray-900 hover:text-gray-700">
                        REGISTER
                      </a>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
