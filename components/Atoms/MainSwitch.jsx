import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainSwitch({
  title,
  property1,
  property2,
  value,
  id,
  setActive,
}) {
  const [enabled, setEnabled] = useState(value);
  useEffect(() => {
    if (id === 1) {
      setActive({ unit: enabled ? 1 : 0 });
    }
    if (id === 2) {
      setActive({ brightness: enabled ? 1 : 0 });
    }
    if (id === 4) {
      setActive({ auto_off: enabled ? 1 : 0 });
    }
    if (id === 8) {
      setActive({ ble: enabled ? 1 : 0 });
    }
    // if (id === 9) {
    //   setActive({ brightness: enabled ? 1 : 0 });
    // }
    // if (id === 10) {
    //   setActive({ auto_off: enabled ? 1 : 0 });
    // }
    if (id === 11) {
      setActive({ mode_hr: enabled ? 1 : 0 });
    }
    if (id === 14) {
      setActive({ start_pas: enabled ? 1 : 0 });
    }
    if (id === 15) {
      setActive({ zero_start: enabled ? 1 : 0 });
    }
    if (id === 16) {
      setActive({ auto_break: enabled ? 1 : 0 });
    }
    if (id === 17) {
      setActive({ gps: enabled ? 1 : 0 });
    }
    if (id === 18) {
      setActive({ alarm: enabled ? 1 : 0 });
    }
    if (id === 19) {
      setActive({ lights: enabled ? 1 : 0 });
    }
    // if (id === 20) {
    //   setActive({ security_mode: enabled ? 1 : 0 });
    // }
  }, [enabled]);

  if (id === 1 || id === 11 || id === 14) {
    return (
      <div className="flex">
        <div className="font-dosis text-gray-600 font-medium text-sm my-2 w-3/5 xl:w-4/5">
          {title}
        </div>
        <div className="font-light text-sm text-gray-600 my-2 w-2/5 xl:w-1/5 text-center">
          <div className="relative flex justify-center items-center w-full">
            {property1 && (
              <p className="absolute -left-6 sm:left-0 font-dosis font-medium text-xs sm:text-sm">
                {property1}
              </p>
            )}
            <Switch
              checked={enabled}
              onChange={(item) => {
                setEnabled(item);
              }}
              className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Use setting</span>
              <span
                className={classNames(
                  enabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              >
                <span
                  className="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                  aria-hidden="true"
                >
                  <svg
                    className="h-3 w-3 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                  </svg>
                </span>
              </span>
            </Switch>
            {property2 && (
              <p className="absolute -right-6 sm:right-0 font-dosis font-medium text-xs sm:text-sm">
                {property2}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="font-dosis text-gray-600 font-medium text-sm my-2 w-3/5 xl:w-4/5">
        {title}
      </div>
      <div className="font-light text-sm text-gray-600 my-2 w-2/5 xl:w-1/5 text-center">
        <div className="relative flex justify-center items-center w-full">
          {property1 && (
            <p className="absolute -left-6 sm:left-0 font-dosis font-medium text-xs sm:text-sm">
              {property1}
            </p>
          )}
          <Switch
            checked={enabled}
            onChange={(item) => {
              setEnabled(item);
            }}
            className={classNames(
              enabled ? "bg-indigo-600" : "bg-gray-200",
              "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
              )}
            >
              <span
                className={classNames(
                  enabled
                    ? "opacity-0 ease-out duration-100"
                    : "opacity-100 ease-in duration-200",
                  "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                )}
                aria-hidden="true"
              >
                <svg
                  className="h-3 w-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className={classNames(
                  enabled
                    ? "opacity-100 ease-in duration-200"
                    : "opacity-0 ease-out duration-100",
                  "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                )}
                aria-hidden="true"
              >
                <svg
                  className="h-3 w-3 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                </svg>
              </span>
            </span>
          </Switch>
          {property2 && (
            <p className="absolute -right-6 sm:right-0 font-dosis font-medium text-xs sm:text-sm">
              {property2}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
