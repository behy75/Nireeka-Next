import React, { useEffect, useState } from "react";
import { Range } from "react-range";
import { useDispatch, useSelector } from "react-redux";
import {
  getBikeSettingsPending,
  setBikeSettingsPending,
} from "../../../app/nsdSlice";
import CookiesService from "../../../services/CookiesService";
import LoadingNireeka from "../../Atoms/LoadingNireeka";

import MainSwitch from "../../Atoms/MainSwitch";

function Reset({ title }) {
  return (
    <div className="flex">
      <div className="flex items-center font-dosis text-gray-600 font-medium text-sm my-2 w-3/5 xl:w-4/5">
        {title}
      </div>
      <div className="font-dosis font-light text-sm text-gray-600 my-2 w-2/5 xl:w-1/5 text-center">
        <div className="relative flex justify-center items-center w-full">
          <div className="w-1/2">
            <div className="font-dosis font-semibold block cursor-pointer w-full py-2 bg-slate-100 text-sm rounded-md z-50">
              Reset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WheelSize({ title, initialValue, id, setActive }) {
  let property = [26, 27.5, 29, 30];

  return (
    <div className="flex">
      <div className="flex items-center font-dosis text-gray-600 font-medium text-sm my-2 w-3/5 xl:w-4/5">
        {title}
      </div>
      <div className="font-dosis font-light text-sm text-gray-600 my-2 w-2/5 xl:w-1/5 text-center">
        <div className="relative flex justify-center items-center w-full">
          <div className="w-1/2">
            <select
              id="size"
              name="size"
              className="font-dosis block cursor-pointer w-full sm:pl-3 py-2 bg-slate-100 text-sm rounded-md z-50"
              defaultValue={initialValue}
              onClick={(evt) =>
                setActive({
                  wheel: evt.target.value ? evt.target.value : initialValue,
                })
              }
            >
              <option className="font-medium font-dosis cursor-pointer">
                {initialValue}
              </option>
              {property.map((item) => (
                <option
                  value={item}
                  key={item}
                  className="font-light font-dosis cursor-pointer"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrightnessRange({ title, value, setActive }) {
  const [values, setValues] = useState([value > 11 ? value : 12]);

  return (
    <div className="flex">
      <div className="flex items-center font-dosis text-gray-600 font-medium text-sm mb-3 mt-2 w-3/5 xl:w-4/5">
        {`${title} (${values})`}
      </div>
      <div className="font-dosis font-light text-sm text-gray-600 my-2 w-2/5 xl:w-1/5 flex justify-center items-center">
        <Range
          step={1}
          min={12}
          max={99}
          values={values}
          onChange={(values) => {
            setValues(values);
            setActive({ brightness: values[0] });
          }}
          renderTrack={({ props, children }) => (
            <div {...props} className="w-full h-3 pr-2 bg-gray-200 rounded-md">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-5 h-5 transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          )}
        />
      </div>
    </div>
  );
}

export default function GeneralSetting() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let {
    getBikeSettingsData,
    getMacByOrderIdData,
    setBikeSettingsReqSuccess,
    getStatusByMacIdData,
  } = state.nsd;
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
          General Setting
        </div>
        <div className="m-4">
          <MainSwitch
            value={getBikeSettingsData ? getBikeSettingsData.unit : 0}
            title="Unit"
            property1="Metric"
            property2="Imperial"
            id={1}
            setActive={setActive}
          />
          <MainSwitch
            value={getBikeSettingsData.brightness}
            title="Brightness"
            property1="Auto"
            property2="Custom"
            id={2}
            setActive={setActive}
          />
          {settingsData && settingsData.brightness !== 0 && (
            <BrightnessRange
              value={getBikeSettingsData.brightness}
              title="Brightness Value"
              id={3}
              setActive={setActive}
            />
          )}
          <MainSwitch
            value={getBikeSettingsData.auto_off}
            title="Auto Off"
            property1="Off"
            property2="On"
            id={4}
            setActive={setActive}
          />
          <Reset
            // value={getBikeSettingsData}
            title={`Trip Reset (${
              getStatusByMacIdData && getStatusByMacIdData.current_trip
                ? getStatusByMacIdData.current_trip
                : "N/A"
            } km)`}
            id={5}
            setActive={setActive}
          />
          <WheelSize
            initialValue={getBikeSettingsData.wheel}
            title="Wheel Size"
            id={6}
            setActive={setActive}
          />
          <Reset title="Factory" id={7} setActive={setActive} />
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
