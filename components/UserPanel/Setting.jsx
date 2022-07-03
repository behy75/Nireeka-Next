import ReactLoading from "react-loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAddressPending } from "../../app/userPanelSlice";
import ControllerSettngs from "./NSDSetting/ControllerSettngs";
import GeneralSetting from "./NSDSetting/GeneralSetting";
import HeartAssistSetting from "./NSDSetting/HeartAssistSetting";
import SettingMSG from "./NSDSetting/SettingMSG";
import SmartSettings from "./NSDSetting/SmartSettings";
import Addresses from "./profile/Addresses";
import Personal from "./profile/Personal";
import Privacy from "./profile/Privacy";
import { getBikeSettingsPending } from "../../app/nsdSlice";
import CookiesService from "../../services/CookiesService";

export default function Setting() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [itemSelected, setItemSelected] = useState(1);
  const [subjectSelected, setSubjectSelected] = useState(1);

  useEffect(() => {
    if (itemSelected === 2) {
      dispatch(listAddressPending());
    }
  }, [itemSelected]);

  let { getMacByOrderIdData } = state.nsd;
  let { isAuth } = state.auth;
  let { data } = state.userPanel;
  useEffect(() => {
    if (isAuth && getMacByOrderIdData) {
      dispatch(
        getBikeSettingsPending({
          token: CookiesService.get("access_token"),
          mac_id: getMacByOrderIdData,
        })
      );
    }
  }, [isAuth && getMacByOrderIdData]);

  if (!data) {
    return (
      <div
        style={{ height: "100vh" }}
        className="relative z-0 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
      >
        <SettingMSG />
        <div
          className="bg-bgUserPanel flex justify-center items-center h-full w-full"
          style={{ height: "60vh" }}
        >
          <ReactLoading
            type="spin"
            color="rgb(209, 213, 219)"
            height={80}
            width={80}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="relative z-0 xl:flex md:pr-4 xl:pr-6 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
    >
      <div className="w-full">
        <div className="mx-2 md:mx-0">
          <SettingMSG />
          <div className="relative z-0 xl:flex md:pr-4 xl:pr-6 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none">
            <div className="w-full bg-white rounded-3xl my-5 shadow-sm border border-gray-200 flex flex-col justify-center items-center">
              <div className="sm:flex w-full">
                <div className="hidden sm:block w-1/4 border-r border-gray-300 p-2 sm:p-3">
                  <div className="font-dosis font-semibold text-xl">About</div>
                  <div
                    onClick={() => setItemSelected(1)}
                    className={
                      itemSelected === 1
                        ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                        : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
                    }
                  >
                    Overview
                  </div>
                  <div
                    onClick={() => setItemSelected(2)}
                    className={
                      itemSelected === 2
                        ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                        : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
                    }
                  >
                    Address
                  </div>
                  <div
                    onClick={() => setItemSelected(3)}
                    className={
                      itemSelected === 3
                        ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                        : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
                    }
                  >
                    Privacy
                  </div>
                  {getMacByOrderIdData && (
                    <>
                      <div className="font-dosis font-semibold text-xl">
                        NSD
                      </div>
                      <div
                        onClick={() => setItemSelected(4)}
                        className={
                          itemSelected === 4
                            ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                            : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
                        }
                      >
                        General
                      </div>
                      <div
                        onClick={() => setItemSelected(5)}
                        className={
                          itemSelected === 5
                            ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                            : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
                        }
                      >
                        Heart Assist
                      </div>
                      <div
                        onClick={() => setItemSelected(6)}
                        className={
                          itemSelected === 6
                            ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                            : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
                        }
                      >
                        Controller
                      </div>
                      <div
                        onClick={() => setItemSelected(7)}
                        className={
                          itemSelected === 7
                            ? "font-dosis font-medium text-sm text-blue-700 py-1 w-full bg-blue-100 rounded-md px-1 cursor-pointer my-1"
                            : "font-dosis font-medium text-sm text-gray-500 py-1 w-full px-1 cursor-pointer my-1"
                        }
                      >
                        Smart Settings
                      </div>
                    </>
                  )}
                </div>

                <div className="block sm:hidden">
                  <div className="flex">
                    <div
                      onClick={() => {
                        setSubjectSelected(1);
                        setItemSelected(1);
                      }}
                      className={
                        subjectSelected === 1
                          ? "w-1/2 flex justify-center items-center p-2 cursor-pointer"
                          : "w-1/2 flex justify-center items-center bg-bgSelectedSetting p-2 rounded-tl-3xl cursor-pointer"
                      }
                    >
                      <span className="font-dosis font-semibold text-xl">
                        About
                      </span>
                    </div>
                    {getMacByOrderIdData && (
                      <div
                        onClick={() => {
                          setSubjectSelected(2);
                          setItemSelected(4);
                        }}
                        className={
                          subjectSelected === 2
                            ? "w-1/2 flex justify-center items-center p-2 cursor-pointer"
                            : "w-1/2 flex justify-center items-center bg-bgSelectedSetting rounded-tr-3xl p-2 cursor-pointer"
                        }
                      >
                        <span className="font-dosis font-semibold text-xl">
                          Nsd
                        </span>
                      </div>
                    )}
                  </div>
                  {subjectSelected === 1 && (
                    <div className="flex">
                      <div
                        className={"w-1/3 flex justify-center items-center p-1"}
                      >
                        <span
                          onClick={() => setItemSelected(1)}
                          className={
                            itemSelected === 1
                              ? "font-dosis font-medium text-sm text-textSelectedSetting border-b border-textSelectedSetting cursor-pointer"
                              : "font-dosis font-medium text-sm text-gray-500 cursor-pointer"
                          }
                        >
                          Overview
                        </span>
                      </div>
                      <div
                        className={"w-1/3 flex justify-center items-center p-1"}
                      >
                        <span
                          onClick={() => setItemSelected(2)}
                          className={
                            itemSelected === 2
                              ? "font-dosis font-medium text-sm text-textSelectedSetting border-b border-textSelectedSetting cursor-pointer"
                              : "font-dosis font-medium text-sm text-gray-500 cursor-pointer"
                          }
                        >
                          Address
                        </span>
                      </div>
                      <div
                        className={"w-1/3 flex justify-center items-center p-1"}
                      >
                        <span
                          onClick={() => setItemSelected(3)}
                          className={
                            itemSelected === 3
                              ? "font-dosis font-medium text-sm text-textSelectedSetting border-b border-textSelectedSetting cursor-pointer"
                              : "font-dosis font-medium text-sm text-gray-500 cursor-pointer"
                          }
                        >
                          Privacy
                        </span>
                      </div>
                    </div>
                  )}
                  {subjectSelected === 2 && getMacByOrderIdData && (
                    <div className="flex">
                      <div
                        className={"w-1/3 flex justify-center items-center p-1"}
                      >
                        <span
                          onClick={() => setItemSelected(3)}
                          className={
                            itemSelected === 4
                              ? "font-dosis font-medium text-sm text-textSelectedSetting border-b border-textSelectedSetting cursor-pointer"
                              : "font-dosis font-medium text-sm text-gray-500 cursor-pointer"
                          }
                        >
                          General
                        </span>
                      </div>
                      <div
                        className={"w-1/3 flex justify-center items-center p-1"}
                      >
                        <span
                          onClick={() => setItemSelected(5)}
                          className={
                            itemSelected === 5
                              ? "font-dosis font-medium text-sm text-textSelectedSetting border-b border-textSelectedSetting cursor-pointer"
                              : "font-dosis font-medium text-sm text-gray-500 cursor-pointer"
                          }
                        >
                          Heart Assist
                        </span>
                      </div>
                      <div
                        className={"w-1/3 flex justify-center items-center p-1"}
                      >
                        <span
                          onClick={() => setItemSelected(6)}
                          className={
                            itemSelected === 6
                              ? "font-dosis font-medium text-sm text-textSelectedSetting border-b border-textSelectedSetting cursor-pointer"
                              : "font-dosis font-medium text-sm text-gray-500 cursor-pointer"
                          }
                        >
                          Controller
                        </span>
                      </div>
                      <div
                        className={"w-1/3 flex justify-center items-center p-1"}
                      >
                        <span
                          onClick={() => setItemSelected(7)}
                          className={
                            itemSelected === 7
                              ? "font-dosis font-medium text-sm text-textSelectedSetting border-b border-textSelectedSetting cursor-pointer"
                              : "font-dosis font-medium text-sm text-gray-500 cursor-pointer"
                          }
                        >
                          Smart Settings
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full p-3">
                  {itemSelected === 1 && <Personal />}
                  {itemSelected === 2 && <Addresses />}
                  {itemSelected === 3 && <Privacy />}
                  {itemSelected === 4 && <GeneralSetting />}
                  {itemSelected === 5 && <HeartAssistSetting />}
                  {itemSelected === 6 && <ControllerSettngs />}
                  {itemSelected === 7 && <SmartSettings />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
