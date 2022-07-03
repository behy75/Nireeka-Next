import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setHoverSelected } from "../../app/userPanelSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SettingIconButton({
  title,
  lastItem,
  number,
  subTitle1,
  valuwSubTitle1,
  subTitle2,
  subTitle3,
  subTitle4,
  hoverNumber,
}) {
  const [enabled, setEnabled] = useState(false);

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  let { hoverSelected, brightness } = state.userPanel;

  return (
    <div
      className="bg-white overflow-hidden sm:rounded-md w-full flex justify-center items-center"
      onMouseOver={() => dispatch(setHoverSelected(hoverNumber))}
      onMouseLeave={() => dispatch(setHoverSelected(0))}
    >
      <ul
        role="list"
        className={
          !lastItem
            ? "divide-y divide-gray-200 w-900 border-b border-gray-200"
            : "divide-y divide-gray-200 w-900"
        }
      >
        <li>
          <a className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div
                  className={
                    number === 1 && !lastItem
                      ? "min-w-0 flex-1 px-4 grid grid-cols-3 md:gap-4"
                      : "min-w-0 flex-1 px-4 grid grid-cols-2 md:grid-cols-3 md:gap-4"
                  }
                >
                  <div className="h-full flex items-center">
                    <p className="text-sm md:text-lg font-light md:text-semibold">
                      {title}
                    </p>
                  </div>
                  {number === 1 && !lastItem && (
                    <div className="w-full flex justify-center items-center">
                      <div className="flex justify-center items-center cursor-pointer py-2 text-sm rounded-md z-50">
                        {valuwSubTitle1}
                      </div>
                    </div>
                  )}
                  {(number !== 1 || lastItem) && (
                    <div className="hidden md:block"></div>
                  )}

                  {number === 1 && (
                    <div className="w-full flex justify-center items-center">
                      <div className="w-1/2 flex justify-center items-center cursor-pointer py-2 bg-slate-100 text-sm rounded-md z-50">
                        {subTitle1}
                      </div>
                    </div>
                  )}
                  {number === 2 && (
                    <div className="flex justify-center items-center w-full">
                      <div className="flex justify-center items-center text-sm font-light text-gray-700 mx-2 w-1/3">
                        {subTitle1}
                      </div>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
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
                      <div className="flex justify-center items-center mx-2 text-sm font-light text-gray-700 w-1/3">
                        {subTitle2}
                      </div>
                    </div>
                  )}
                  {number === 4 && (
                    <div className="w-full flex justify-center items-center">
                      <div className="w-1/2">
                        <select
                          id="size"
                          name="size"
                          className="block cursor-pointer w-full sm:pl-3 py-2 bg-slate-100 text-sm rounded-md z-50"
                          defaultValue="Canada"
                        >
                          <option>{subTitle1}</option>
                          <option>{subTitle2}</option>
                          <option>{subTitle3}</option>
                          <option>{subTitle4}</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="flex flex-col w-full">
      <div className="lg:-mx-8">
        <div className="py-2 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <table
              className={!lastItem ? "w-900 border-b border-gray-200" : "w-900"}
            >
              <tbody>
                <tr className="flex justify-between items-center">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                    {title}
                  </td>
                  {number === 1 && (
                    <td className="flex justify-between items-center w-1/4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="relative flex justify-between items-center w-full">
                        <button
                          type="button"
                          className="relative inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-light text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          {subTitle1}
                        </button>
                      </span>
                    </td>
                  )}
                  {number === 2 && (
                    <td className="flex justify-between items-center lg:w-1/4 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex justify-center items-center text-sm font-light text-gray-700 mx-2">
                        {subTitle1}
                      </div>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
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
                      <div className="flex justify-center items-center mx-2 text-sm font-light text-gray-700">
                        {subTitle2}
                      </div>
                    </td>
                  )}
                  {/* {number === 4 && (
                    <td className="flex justify-between items-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="relative z-0 inline-flex shadow-sm rounded-md">
                        <button
                          type="button"
                          className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-light text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          {subTitle1}
                        </button>
                        <button
                          type="button"
                          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-light text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          {subTitle2}
                        </button>
                        <button
                          type="button"
                          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-light text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          {subTitle3}
                        </button>
                        <button
                          type="button"
                          className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-light text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          {subTitle4}
                        </button>
                      </span>
                    </td>
                  )} */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
