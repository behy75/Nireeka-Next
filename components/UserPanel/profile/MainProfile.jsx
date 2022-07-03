import React, { useState } from "react";
import Addresses from "./Addresses";
import Personal from "./Personal";
import Security from "./Security";

export default function MainProfile() {
  const [state, setstate] = useState(1);
  return (
    <div className="w-full bg-white rounded-3xl my-5 border border-black flex flex-col justify-center items-center">
      <div className="flex w-full">
        <div className="w-1/4 border-r border-gray-300 p-2 sm:p-3">
          <div className="font-dosis font-semibold text-xl">About</div>
          <div
            onClick={() => setstate(1)}
            className={
              state === 1
                ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
            }
          >
            Overview
          </div>
          <div
            onClick={() => setstate(2)}
            className={
              state === 2
                ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
            }
          >
            Address
          </div>
          <div
            onClick={() => setstate(3)}
            className={
              state === 3
                ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
            }
          >
            Security
          </div>
        </div>
        <div className="w-3/4 p-3">
          {state === 1 && <Personal />}
          {state === 2 && <Addresses />}
          {state === 3 && <Security />}
        </div>
      </div>
    </div>
  );
}
