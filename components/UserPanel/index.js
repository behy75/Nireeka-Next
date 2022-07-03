import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import ActiveOption from "./ActiveOption";
import { PanelDesktopList, PanelMobileList } from "./PanelList";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  leaderBoardPending,
  setActiveItem,
  userPanelPending,
} from "../../app/userPanelSlice";
import { useRouter } from "next/router";
import {
  getBikeSettingsPending,
  getMacByOrderIdPending,
  getStatusByMacIdPending,
  getUserBikesPending,
} from "../../app/nsdSlice";
import CookiesService from "../../services/CookiesService";

import SuccessfulMessage from "../Atoms/SuccessfulMessage";
import Image from "next/image";
import UserProfile from "../Atoms/UserProfile";
import {
  getRidesPending,
  getServerTimePending,
} from "../../app/nsdUserPanelSlice";

const Active = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { isAuth, isLoading } = state.auth;
  let { data, setDefaultOrderReqSuccess } = state.userPanel;
  let { getMacByOrderIdData } = state.nsd;
  let { getServerTimeData, getRidesData } = state.nsdUserPanel;

  const [defaultBikeClick, setDefaultBikeClick] = useState(false);

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth, isLoading, router]);

  useEffect(() => {
    if (setDefaultOrderReqSuccess && defaultBikeClick) {
      // setDefaultBikeClick(true);
      const timer = setTimeout(() => {
        setDefaultBikeClick(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [setDefaultOrderReqSuccess, defaultBikeClick]);

  useEffect(() => {
    if (setDefaultOrderReqSuccess) {
      dispatch(userPanelPending());
    }
  }, [setDefaultOrderReqSuccess]);

  useEffect(() => {
    if (isAuth && data) {
      dispatch(
        getMacByOrderIdPending({
          token: CookiesService.get("access_token"),
          order_bike_id: data.order_bike_default_id,
        })
      );
    }
  }, [isAuth, data]);

  useEffect(() => {
    if (isAuth && data) {
      dispatch(
        getUserBikesPending({
          token: CookiesService.get("access_token"),
        })
      );
    }
  }, [isAuth, data]);

  useEffect(() => {
    if (isAuth && getMacByOrderIdData) {
      dispatch(
        getStatusByMacIdPending({
          token: CookiesService.get("access_token"),
          mac_id: getMacByOrderIdData,
        })
      );
    }
  }, [isAuth, getMacByOrderIdData]);

  useEffect(() => {
    if (isAuth && getMacByOrderIdData) {
      dispatch(
        getBikeSettingsPending({
          token: CookiesService.get("access_token"),
          mac_id: getMacByOrderIdData,
        })
      );
    }
  }, [isAuth, getMacByOrderIdData]);

  useEffect(() => {
    if (isAuth) {
      dispatch(
        getServerTimePending({
          token: CookiesService.get("access_token"),
        })
      );
    }
  }, [isAuth, pathname]);

  useEffect(() => {
    if (isAuth && getServerTimeData && getMacByOrderIdData) {
      dispatch(
        getRidesPending({
          token: CookiesService.get("access_token"),
          mac_id: getMacByOrderIdData,
          from_date: 1645526076837 - 100 * 24 * 3600 * 1000,
          to_date: 1645526076837,
        })
      );
    }
  }, [isAuth, pathname, getMacByOrderIdData, getServerTimeData]);

  useEffect(() => {
    if (pathname.includes("/user-panel")) {
      dispatch(setActiveItem(1));
    }
    if (pathname.includes("/orders")) {
      dispatch(setActiveItem(2));
    }
    if (pathname.includes("/setting")) {
      dispatch(setActiveItem(3));
    }
    if (pathname.includes("/reports")) {
      dispatch(setActiveItem(4));
    }
    if (pathname.includes("/navigations")) {
      dispatch(setActiveItem(5));
    }
    if (pathname.includes("/challenges")) {
      dispatch(setActiveItem(6));
    }
    if (pathname.includes("/payments")) {
      dispatch(setActiveItem(7));
    }
    if (pathname.includes("/affiliate")) {
      dispatch(setActiveItem(8));
    }
    if (pathname.includes("/support")) {
      dispatch(setActiveItem(9));
    }
    if (pathname.includes("/update")) {
      dispatch(setActiveItem(10));
    }
  }, [pathname]);

  return (
    <div className="bg-bgUserPanel w-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex items-center justify-start px-4">
                <Link href="/">
                  <a className="fixed left-4 flex items-center justify-center cursor-pointer">
                    <Image
                      width={200}
                      height={24}
                      src="https://nireeka.com/images/logo_nireeka_dark.svg"
                      alt="nireeka"
                    />
                  </a>
                </Link>
              </div>
              <PanelMobileList setSidebarOpen={setSidebarOpen} />
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>
      <div className="hidden md:flex md:w-36 md:ml-10 md:flex-col md:fixed md:inset-y-0 ml-10">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-bgUserPanel">
          <Link href="/">
            <a className="fixed left-4 flex items-center justify-center cursor-pointer">
              <Image
                width={200}
                height={24}
                src="https://nireeka.com/images/logo_nireeka_dark.svg"
                alt="nireeka"
              />
            </a>
          </Link>

          <PanelDesktopList />
        </div>
      </div>
      <div className="md:pl-60 flex flex-col flex-1">
        <div className="z-10 flex-shrink-0 flex h-16">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-2 flex justify-end">
            <div className="relative w-full top-10">
              {defaultBikeClick && (
                <SuccessfulMessage MSG="Default bike changed successfully." />
              )}
            </div>

            <UserProfile />
          </div>
        </div>

        <ActiveOption setDefaultBikeClick={setDefaultBikeClick} />
      </div>
    </div>
  );
};

export default Active;
