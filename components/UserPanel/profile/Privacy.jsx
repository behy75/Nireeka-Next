import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSettingForumPending } from "../../../app/settingSlice";
import LoadingNireeka from "../../Atoms/LoadingNireeka";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PrivacySwitch({ title, initialValue, id, setActive }) {
  const [enabled, setEnabled] = useState(initialValue);

  useEffect(() => {
    if (id === 1) {
      setActive({ show_country: enabled });
    }
    if (id === 2) {
      setActive({
        show_in_leaderboard: enabled,
      });
    }
  }, [enabled]);

  return (
    <div className="flex">
      <div className="font-dosis text-gray-600 font-medium text-sm my-2 w-3/5">
        {title}
      </div>
      <div className="font-light text-sm text-gray-600 my-2 w-2/5 text-center">
        <div className="flex justify-center items-center w-full">
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
        </div>
      </div>
    </div>
  );
}

export default function Privacy() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { data } = state.userPanel;
  let { getMacByOrderIdData } = state.nsd;
  let { updateSettingForumReqSuccess } = state.setting;

  const [active, setActive] = useState({});
  const [settingsData, setSettingsData] = useState({
    show_country: data.show_country,
    show_in_leaderboard: data.show_in_leaderboard,
  });
  useEffect(() => {
    setSettingsData({ ...settingsData, ...active });
  }, [active]);

  return (
    <div>
      <div className="font-dosis text-sm font-medium text-gray-500">
        You can personalize your privacy perferences here.
      </div>
      <div className="border-b border-gray-200">
        <div className="font-dosis text-sm font-semibold text-gray-800 my-3">
          Forum
        </div>
        <div className="m-4">
          <div className="flex">
            <div className="font-dosis text-gray-600 font-medium text-sm my-2 w-3/5">
              Display Name
            </div>
            <div className="font-dosis font-light text-sm text-gray-600 my-2 w-2/5 text-center">
              {`${data.name} ${data.last_name}`}
            </div>
          </div>
          <div className="flex">
            <div className="font-dosis text-gray-600 font-medium text-sm my-2 w-3/5">
              Username
            </div>
            <div className="font-dosis font-light text-sm text-gray-600 my-2 w-2/5 text-center">
              {`${data.user_name}`}
            </div>
          </div>
          <PrivacySwitch
            initialValue={data && data.show_country ? data.show_country : 0}
            title="Show my Country"
            id={1}
            setActive={setActive}
          />
          <PrivacySwitch
            initialValue={
              data && data.show_in_leaderboard ? data.show_in_leaderboard : 0
            }
            title="Show me in Leaderboard"
            id={2}
            setActive={setActive}
          />
        </div>
      </div>
      {getMacByOrderIdData && (
        <div className="border-b border-gray-200">
          <div className="font-dosis text-sm font-semibold text-gray-800 my-3">
            NSD
          </div>
          <div className="m-4">
            <PrivacySwitch title="Share my location with the others" />
            <PrivacySwitch title="Show my location with on the map" />
            <PrivacySwitch title="ODO" />
            <PrivacySwitch title="Heallth Data" />
            <PrivacySwitch title="Trip" />
          </div>
        </div>
      )}

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
          onClick={() => {
            dispatch(
              updateSettingForumPending({
                ...settingsData,
              })
            );
          }}
          className="px-2"
        >
          <div className="cursor-pointer mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-light text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
            {updateSettingForumReqSuccess === false ? (
              <div className="p-1">
                <LoadingNireeka
                  colorLoading={"text-white"}
                  widthLoading={"w-4"}
                  heightLoading={"h-4"}
                  borderLoading={"border-2"}
                />
              </div>
            ) : (
              <p>Save</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
