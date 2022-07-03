import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch, useSelector } from "react-redux";
import {
  getBikeSettingsPending,
  setBikeSettingsPending,
} from "../../../app/nsdSlice";
import CookiesService from "../../../services/CookiesService";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import MainSwitch from "../../Atoms/MainSwitch";

function HeartbeatRange({ title, minValue, maxValue, setActive }) {
  const [values, setValues] = useState([
    minValue > 0 ? minValue : 0,
    maxValue > 0 ? maxValue : 0,
  ]);

  return (
    <div className="flex">
      <div className="font-dosis text-gray-600 font-medium text-sm my-2 w-3/5 xl:w-4/5">
        {`${title}`}
      </div>
      <div className="font-dosis font-light text-sm text-gray-600 my-2 w-2/5 xl:w-1/5 flex justify-center items-center">
        <Range
          step={1}
          min={60}
          max={220}
          values={values}
          onChange={(values) => {
            setValues(values);
            setActive({ min_hr: values[0], max_hr: values[1] });
          }}
          renderTrack={({ props, children }) => (
            <div {...props} className="w-full h-3 pr-2 bg-gray-200 rounded-md">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="relative w-5 h-5 transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute top-5 text-indigo-500">
                {values[props.key]}
              </span>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default function HeartAssistSetting() {
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
      {/* <div className="font-dosis text-sm font-medium text-gray-500">
        You can personalize your privacy perferences here.
      </div> */}

      <div className="border-b border-gray-200">
        <div className="font-dosis text-sm font-semibold text-gray-800 my-3">
          Heart Assist Setting
        </div>
        <div className="m-4">
          <MainSwitch
            title="Enabled"
            value={getBikeSettingsData ? getBikeSettingsData.ble : 0}
            id={8}
            setActive={setActive}
          />
          {/* <MainSwitch
            title={
              getBikeSettingsData &&
              getBikeSettingsData.min_hr !== 0 &&
              getBikeSettingsData.max_hr !== 0
                ? `Heartbeat (${getBikeSettingsData.min_hr} - ${getBikeSettingsData.max_hr} BPM)`
                : `Heartbeat`
            }
            value={getBikeSettingsData ? getBikeSettingsData.min_hr : "N/A"}
            id={9}
            setActive={setActive}
          /> */}
          <div className="mb-2">
            {settingsData && (
              <HeartbeatRange
                minValue={
                  getBikeSettingsData && getBikeSettingsData.min_hr
                    ? getBikeSettingsData.min_hr
                    : 0
                }
                maxValue={
                  getBikeSettingsData && getBikeSettingsData.max_hr
                    ? getBikeSettingsData.max_hr
                    : 0
                }
                title="Heartbeat (BPM)"
                id={3}
                setActive={setActive}
              />
            )}
          </div>

          <MainSwitch
            title="Mode"
            property1="Sport"
            property2="Leisure"
            value={getBikeSettingsData ? getBikeSettingsData.mode_hr : 0}
            id={11}
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
