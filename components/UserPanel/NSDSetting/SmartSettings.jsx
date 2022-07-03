import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBikeSettingsPending,
  setBikeSettingsPending,
} from "../../../app/nsdSlice";
import CookiesService from "../../../services/CookiesService";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import MainSwitch from "../../Atoms/MainSwitch";

export default function SmartSettings() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { getBikeSettingsData, getMacByOrderIdData, setBikeSettingsReqSuccess } =
    state.nsd;
  let { isAuth } = state.auth;
  useEffect(() => {
    if (isAuth && setBikeSettingsReqSuccess) {
      dispatch(
        getBikeSettingsPending({
          token: CookiesService.get("access_token"),
          mac_id: getMacByOrderIdData,
        })
      );
    }
  }, [isAuth && setBikeSettingsReqSuccess]);

  const [active, setActive] = useState({});
  const [settingsData, setSettingsData] = useState({ ...getBikeSettingsData });
  useEffect(() => {
    setSettingsData({ ...settingsData, ...active });
  }, [active]);

  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="font-dosis text-sm font-semibold text-gray-800 my-3">
          Smart
        </div>
        <div className="m-4">
          <MainSwitch
            title="Auto Brake"
            value={
              getBikeSettingsData && getBikeSettingsData.auto_break
                ? getBikeSettingsData.auto_break
                : 0
            }
            id={16}
            setActive={setActive}
          />
          <MainSwitch
            title="Location Service"
            value={
              getBikeSettingsData && getBikeSettingsData.gps
                ? getBikeSettingsData.gps
                : 0
            }
            id={17}
            setActive={setActive}
          />
          <MainSwitch
            title="Alarm"
            value={
              getBikeSettingsData && getBikeSettingsData.alarm
                ? getBikeSettingsData.alarm
                : 0
            }
            id={18}
            setActive={setActive}
          />
          <MainSwitch
            title="Lights"
            value={
              getBikeSettingsData && getBikeSettingsData.lights
                ? getBikeSettingsData.lights
                : 0
            }
            id={19}
            setActive={setActive}
          />
          <MainSwitch
            title="Security"
            value={
              getBikeSettingsData && getBikeSettingsData.security_mode
                ? getBikeSettingsData.security_mode
                : 0
            }
            id={20}
            setActive={setActive}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="px-2">
          <div
            // onClick={() =>
            //   dispatch(
            //     getBikeSettingsPending({
            //       mac_id: getMacByOrderIdData,
            //       token: CookiesService.get("access_token"),
            //     })
            //   )
            // }
            className="cursor-pointer mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-light text-gray-500  sm:w-auto"
          >
            Cancel
          </div>
        </div>
        <div
          onClick={() =>
            dispatch(
              setBikeSettingsPending({
                ...settingsData,
                mac_id: getMacByOrderIdData,
                token: CookiesService.get("access_token"),
              })
            )
          }
          className="px-2"
        >
          <div className="cursor-pointer mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-light text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
            {setBikeSettingsReqSuccess ? (
              <p>Save</p>
            ) : (
              <div className="p-1">
                <LoadingNireeka
                  colorLoading={"text-white"}
                  widthLoading={"w-4"}
                  heightLoading={"h-4"}
                  borderLoading={"border-2"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
