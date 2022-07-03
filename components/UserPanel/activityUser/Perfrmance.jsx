import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import SetDefaultBike from "./SetDefaultBike";

function PerfrmanceBox({
  key,
  title,
  unit,
  bgFromColor,
  bgViaColor,
  bgToColor,
  amount,
  bgImg,
}) {
  const [lockSize, setLockSize] = useState(["w-20", "h-20"]);

  return (
    <li key={key} className="col-span-1 flex rounded-md">
      <div
        className={`relative flex-1 flex items-center justify-between shadow-2xl border border-gray-200 bg-gradient-to-bl ${bgFromColor} ${bgViaColor} ${bgToColor} bg-opacity-60 rounded-3xl truncate h-32 md:h-40 w-40 md:w-48 z-40`}
      >
        {/* {amount == "N/A" && (
          <div
            onMouseEnter={() => setLockSize(["w-24", "h-24"])}
            onMouseLeave={() => setLockSize(["w-20", "h-20"])}
            className="flex justify-center items-center absolute z-50 w-full h-full shadow-2xl rounded-3xl bg-gray-400 cursor-pointer opacity-80"
          >
            <div className={`${lockSize[0]} ${lockSize[1]} relative`}>
              <Image layout="fill" src={PadLock} alt="lock" />
            </div>
          </div>
        )} */}

        <div className="flex flex-col items-start justify-between px-2 py-2 text-sm text-white truncate h-full">
          <p className="text-gray-400 text-xl md:text-2xl font-light pt-4">
            {title}
          </p>
          <p className="text-gray-600 text-4xl md:text-6xl xl:text-5xl 2xl:text-6xl font-light">
            {amount}
          </p>
        </div>
        <div className="flex-shrink-0 pr-1 h-full">
          <div className="w-8 text-white flex items-end justify-center rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-full">
            <p className="text-gray-600 font-light text-lg md:text-xl pr-4 py-3">
              {unit}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Perfrmance({ setDefaultBikeClick }) {
  const state = useSelector((state) => state);
  let { getStatusByMacIdData, getBikeSettingsData } = state.nsd;

  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="flex justify-between items-center">
          <div className="px-1 sm:px-2 md:px-4">
            <h1 className="text-2xl font-light text-white">Your Perfrmance</h1>
          </div>

          <Menu as="div" className="mx-2 relative">
            <Menu.Button className="max-w-xs flex items-center text-sm rounded-full">
              <span className="sr-only">Open Set Bike Default menu</span>
              <div className="flex justify-center inems-center">
                <div className="pr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="origin-top-right absolute right-0 rounded-md py-1 bg-white ring-opacity-5 focus:outline-none">
                <SetDefaultBike setDefaultBikeClick={setDefaultBikeClick} />
              </div>
            </Transition>
          </Menu>
        </div>
        <div className="px-1 sm:px-2 md:px-4">
          <h3 className="text-md font-light text-white">Todays Activity</h3>
        </div>
        <div className="flex flex-col justify-center items-start mx-4">
          <ul
            role="list"
            className="relative mt-3 w-full grid gap-5 sm:gap-6 grid-cols-2 lg:grid-cols-4"
          >
            <PerfrmanceBox
              bgImg="app-odo"
              bgFromColor="from-white"
              bgViaColor="via-white"
              bgToColor="to-white"
              title="ODO"
              amount={
                getStatusByMacIdData &&
                (getStatusByMacIdData.odo || getStatusByMacIdData.odo === 0)
                  ? getBikeSettingsData && getBikeSettingsData.unit === 1
                    ? (getStatusByMacIdData.odo / 1.61).toFixed(1)
                    : getStatusByMacIdData.odo
                  : "N/A"
              }
              unit={
                getBikeSettingsData && getBikeSettingsData.unit === 1
                  ? "mi"
                  : "km"
              }
            />
            <div className="relative group mb-8 lg:mb-0">
              <PerfrmanceBox
                bgImg="app-trip"
                bgFromColor="from-white"
                bgViaColor="via-white"
                bgToColor="to-white"
                title="Trip"
                amount={
                  getStatusByMacIdData &&
                  (getStatusByMacIdData.current_trip ||
                    getStatusByMacIdData.current_trip === 0)
                    ? getBikeSettingsData && getBikeSettingsData.unit === 1
                      ? (getStatusByMacIdData.current_trip / 1.61).toFixed(1)
                      : getStatusByMacIdData.current_trip
                    : "N/A"
                }
                unit={
                  getBikeSettingsData && getBikeSettingsData.unit === 1
                    ? "mi"
                    : "km"
                }
              />
              {getStatusByMacIdData &&
                (getStatusByMacIdData.current_trip ||
                  getStatusByMacIdData.current_trip === 0) && (
                  <div className="absolute flex items-end justify-around invisible group-hover:visible bg-gray-400 w-full h-16 -mt-5 pb-3 z-0 rounded-b-3xl">
                    <div>Avg. since N/A</div>
                  </div>
                )}
            </div>

            <div className="relative group">
              <PerfrmanceBox
                bgImg="app-max-speed"
                bgFromColor="from-white"
                bgViaColor="via-white"
                bgToColor="to-white"
                title="Max Speed"
                amount={
                  getStatusByMacIdData &&
                  (getStatusByMacIdData.max_speed_ever ||
                    getStatusByMacIdData.max_speed_ever === 0)
                    ? getBikeSettingsData && getBikeSettingsData.unit === 1
                      ? (getStatusByMacIdData.max_speed_ever / 1.61).toFixed(1)
                      : getStatusByMacIdData.max_speed_ever
                    : "N/A"
                }
                unit={
                  getBikeSettingsData && getBikeSettingsData.unit === 1
                    ? "mph"
                    : "km/h"
                }
              />
              {getStatusByMacIdData &&
                (getStatusByMacIdData.max_speed_ever ||
                  getStatusByMacIdData.max_speed_ever === 0) && (
                  <div className="absolute flex items-end justify-around invisible group-hover:visible bg-gray-400 w-full h-16 -mt-5 pb-3 z-0 rounded-b-3xl">
                    <div>N/A</div>
                  </div>
                )}
            </div>

            <PerfrmanceBox
              bgImg="app-charge"
              bgFromColor="from-white"
              bgViaColor="via-white"
              bgToColor="to-white"
              title="Charge"
              amount={
                getStatusByMacIdData &&
                (getStatusByMacIdData.battery_charge ||
                  getStatusByMacIdData.battery_charge === 0)
                  ? getStatusByMacIdData.battery_charge
                  : "N/A"
              }
              unit="%"
            />
          </ul>
        </div>
      </div>
    </main>
  );
}
