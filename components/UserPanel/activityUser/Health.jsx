import React, { useState } from "react";
import Heart from "../../../public/images/heart.png";
import PadLock from "../../../public/images/padlock.png";
import Image from "next/image";
import HealthChart from "./HealthChart";

export default function Health() {
  const [popUp, setPopUp] = useState(true);

  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="flex justify-between">
          <div className="max-w-7xl px-1 sm:px-2 md:px-4">
            <h1 className="text-2xl font-light text-white">Health</h1>
          </div>
          <div className="pr-5 pb-4">
            {popUp && (
              <h1
                onClick={() => setPopUp(false)}
                className="font-light text-3xl text-white cursor-pointer"
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
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </h1>
            )}
            {!popUp && (
              <h1
                onClick={() => setPopUp(true)}
                className="font-light text-3xl text-white cursor-pointer"
              >  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
               
              </h1>
            )}
          </div>
        </div>
        {popUp && (
          <div className="relative flex flex-col justify-center items-start mx-4">
            <div className="bg-white shadow-2xl rounded-3xl w-full flex flex-col md:flex-row">
              <div className="flex justify-between bg-blue-50 shadow-lg rounded-3xl w-full md:w-4/5">
                <div className="flex flex-col justify-center items-center pl-4">
                  <div className="w-8 my-2 flex justify-start">
                    <Image className="" src={Heart} alt="heart" />
                  </div>
                  <p className="sm:text-semibold text-xs sm:text-base md:text-xs lg:text-lg">
                    Heart Rate
                  </p>
                </div>
                <div className="px-4 py-5 sm:p-3 w-800">
                  <HealthChart />
                </div>
              </div>
              <div className="flex md:flex-col justify-center lg:justify-around items-center w-full md:w-1/5 my-3 md:my-0">
                <div className="w-1/2 flex flex-col justify-center items-center">
                  <div className="font-light text-xl md:text-4xl">N/A</div>
                  <div className="font-light text-lg md:text-xl text-gray-300">
                    Your BPM
                  </div>
                  <div className="text-base md:text-lg text-gray-300">
                    today
                  </div>
                </div>
                <div className="w-1/2 md:w-800 flex flex-col justify-center items-start">
                  <div className="flex justify-center items-center my-2">
                    <div className="w-12 h-5 bg-paleHealthChatt mx-1"></div>
                    <div className="text-xs font-light text-black mx-1">
                      Current week
                    </div>
                  </div>
                  <div className="flex justify-center items-center my-2">
                    <div className="w-12 h-5 bg-boldHealthChatt mx-1"></div>
                    <div className="text-xs font-light text-black mx-1">
                      Last week
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
