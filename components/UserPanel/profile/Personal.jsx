// import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BellIcon } from "@heroicons/react/outline";
import {
  changePasswordPending,
  registerSecondPending,
} from "../../../app/authSlice";
import {
  updateAvatarPending,
  updateFamilyPending,
  userPanelPending,
} from "../../../app/userPanelSlice";
import UpdateImage from "./UpdateImage";
import UpdateSuccessful from "../../Atoms/UpdateSuccessful";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import FailedMessage from "../../Atoms/FailedMessage";
import { Switch } from "@headlessui/react";
import {
  getBikeSettingsPending,
  setBikeSettingsPending,
} from "../../../app/nsdSlice";
import CookiesService from "../../../services/CookiesService";
import GreenTick from "../../../public/images/green_tick.png";
import Image from "next/image";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SwitchUnit({ params }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;
  let { getBikeSettingsData, getMacByOrderIdData, setBikeSettingsReqSuccess } =
    state.nsd;
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
  let localEnabled = JSON.parse(window.localStorage.getItem(`localEnabled`));
  const [enabled, setEnabled] = useState(
    getBikeSettingsData && getBikeSettingsData.unit
      ? getBikeSettingsData.unit
      : localEnabled
      ? localEnabled
      : 0
  );
  window.localStorage.setItem(`localEnabled`, JSON.stringify(enabled));
  return (
    <div className="flex">
      <div className="font-dosis text-gray-600 font-medium text-sm my-2 w-3/5 xl:w-4/5">
        Unit
      </div>
      <div className="font-light text-sm text-gray-600 my-2 w-2/5 xl:w-1/5 text-center">
        <div className="relative flex justify-center items-center w-full">
          <p className="absolute -left-3 sm:left-0 font-dosis font-medium text-gray-400 text-xs sm:text-sm">
            Metric
          </p>
          <Switch
            checked={enabled}
            onChange={(item) => {
              setEnabled(item);

              dispatch(
                setBikeSettingsPending({
                  ...getBikeSettingsData,
                  unit: item ? 1 : 0,
                  mac_id: getMacByOrderIdData,
                  token: CookiesService.get("access_token"),
                })
              );
            }}
            className={classNames(
              enabled ? "bg-gray-200" : "bg-gray-200",
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
          <p className="absolute -right-3 sm:right-0 font-dosis font-medium text-gray-400 text-xs sm:text-sm">
            Imperial
          </p>
        </div>
      </div>
    </div>
  );
}

function EditItem({
  initialValue,
  type,
  name,
  placeholderName,
  id,
  unit,
  showTickPassword,
  setShowTickPassword,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { data, updateFamilyReqSuccess } = state.userPanel;
  let {
    requestPersonalInformationSuccess,
    sendRequestPersonalInformation,
    changePasswordReq,
    changePasswordMessage,
  } = state.auth;

  useEffect(() => {
    if (updateFamilyReqSuccess) {
      dispatch(userPanelPending());
    }
  }, [updateFamilyReqSuccess]);

  const [personalData, setPersonalData] = useState({});
  useEffect(() => {
    setPersonalData({
      height: data.height,
      weight: data.weight,
      inseam: data.inseam,
      birth_date: data.birth_date,
      gender: data.gender,
    });
  }, [data]);

  const birthday = new Date("10/26/1990");
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countDown = (timeSpan) => {
    const today = new Date();
    timeSpan = birthday - today;

    const days = Math.floor(timeSpan / day);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    return days + " Days " + minutes + " Minutes " + seconds + " Seconds ";
  };
  setInterval(countDown, second);

  const [edit, setEdit] = useState(false);

  const [old_password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const unitHeight = 0;
  const unitInseam = 0;
  const unitWeight = 0;
  if (unit === 1) {
    if (id === 6) {
      initialValue = (initialValue / 2.2).toFixed(1);
      unitWeight = 1;
    }
    if (id === 5) {
      initialValue = (initialValue / 30.5).toFixed(2);
      unitInseam = 1;
    }
    if (id === 4) {
      initialValue = (initialValue / 30.5).toFixed(2);
      unitHeight = 1;
    }
  }

  const [newValue, setNewValue] = useState(initialValue);

  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    if (requestPersonalInformationSuccess === true && showTick) {
      const timer = setTimeout(() => {
        setEdit(false);
        setShowTick(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [requestPersonalInformationSuccess, showTick]);

  useEffect(() => {
    if (changePasswordReq === true && showTickPassword) {
      const timer = setTimeout(() => {
        setEdit(false);
        setShowTickPassword(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (changePasswordReq === false && showTickPassword) {
      const timer = setTimeout(() => {
        setShowTickPassword(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [changePasswordReq, showTick]);

  return (
    <div className="flex-shrink-0 flex py-2">
      <div className="flex items-center justify-start w-11/12">
        <div className="">
          {!edit && (
            <div className="flex">
              <p className="text-base font-semibold text-gray-800 font-dosis">
                {initialValue !== "null" && initialValue !== ""
                  ? initialValue
                  : "N/A"}
              </p>
              {/* {id === 6 && initialunit && (
                <p className="flex mt-1 mx-1 text-xs font-light text-gray-400 font-dosis">
                  {initialValue !== "null" && initialValue !== ""
                    ? `${initialunit}`
                    : "N/A"}
                </p>
              )} */}
            </div>
          )}
          {edit && (
            <div className="flex">
              {id === 1 && (
                <div className="md:flex">
                  <div>
                    <input
                      id={`${type}`}
                      name={`${type}`}
                      type={`${type}`}
                      autoComplete={`${initialValue}`}
                      value={`${old_password}`}
                      onChange={(item) => {
                        setPassword(item.target.value);
                      }}
                      className="appearance-none font-dosis relative block w-full px-1 placeholder-gray-300 border border-gray-300 text-base font-light  text-gray-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={`${placeholderName}`}
                    />
                    <p className="font-dosis text-xs font-light text-gray-400">
                      {placeholderName}
                    </p>
                  </div>

                  <div className="md:mx-1 my-1 md:my-0">
                    <input
                      id={`new-password`}
                      name={`new-password`}
                      type={`password`}
                      autoComplete={`${initialValue}`}
                      value={`${newPassword}`}
                      onChange={(item) => {
                        setNewPassword(item.target.value);
                      }}
                      className="appearance-none font-dosis relative block w-full px-1 placeholder-gray-300 border border-gray-300 text-base font-light  text-gray-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={`New Password`}
                    />
                    <p className="font-dosis text-xs font-light text-gray-400">
                      New Password
                    </p>
                  </div>

                  <div>
                    <input
                      id={`confirm-password`}
                      name={`confirm-password`}
                      type={`password`}
                      autoComplete={`${initialValue}`}
                      value={`${password_confirmation}`}
                      onChange={(item) => {
                        setPasswordConfirmation(item.target.value);
                      }}
                      className="appearance-none font-dosis relative block w-full px-1 placeholder-gray-300 border border-gray-300 text-base font-light  text-gray-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={`Confirm Password`}
                    />
                    <p className="font-dosis text-xs font-light text-gray-400">
                      Confirm Password
                    </p>
                  </div>
                </div>
              )}
              {id === 3 && (
                <input
                  onChange={(data) =>
                    setPersonalData({
                      height: data.height,
                      weight: data.weight,
                      inseam: data.inseam,
                      birth_date: data.nativeEvent.target.value,
                      gender: item.target.value,
                    })
                  }
                  id="birth-date"
                  name="birth-date"
                  type="date"
                  autoComplete="birth-date"
                  className="appearance-none font-dosis relative block w-full px-1 placeholder-gray-300 border border-gray-300 text-base font-light  text-gray-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Birth Date (mm/dd/yyyy)"
                />
              )}
              {id !== 7 && id !== 1 && id !== 3 && (
                <input
                  id={`${type}`}
                  name={`${type}`}
                  type={`${type}`}
                  autoComplete={initialValue}
                  // value={newValue ? newValue : initialValue}
                  value={newValue}
                  onChange={(item) => {
                    setNewValue(item.target.value);
                    {
                      id === 4 &&
                        setPersonalData({
                          height: parseFloat(
                            unitHeight
                              ? item.target.value * 30.5
                              : item.target.value
                          ),
                          weight: data.weight,
                          inseam: data.inseam,
                          birth_date: data.birth_date,
                          gender: data.gender,
                        });
                    }
                    {
                      id === 5 &&
                        setPersonalData({
                          height: data.height,
                          weight: data.weight,
                          inseam: parseFloat(
                            unitInseam
                              ? item.target.value * 30.5
                              : item.target.value
                          ),
                          birth_date: data.birth_date,
                          gender: data.gender,
                        });
                    }
                    {
                      id === 6 &&
                        setPersonalData({
                          height: data.height,
                          weight: parseFloat(
                            unitWeight
                              ? item.target.value * 2.2
                              : item.target.value
                          ),
                          inseam: data.inseam,
                          birth_date: data.birth_date,
                          gender: data.gender,
                        });
                    }
                  }}
                  className="appearance-none font-dosis relative block w-full px-1 placeholder-gray-300 border border-gray-300 text-base font-light  text-gray-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={`${placeholderName}`}
                />
              )}
              {id === 7 && (
                <div>
                  <div>
                    <label htmlFor="gender" className="sr-only">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="appearance-none font-dosis relative block w-full px-1 placeholder-gray-300 border border-gray-300 text-base font-light  text-gray-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      defaultValue={initialValue}
                      onChange={(item) =>
                        setPersonalData({
                          height: data.height,
                          weight: data.weight,
                          inseam: data.inseam,
                          birth_date: data.birth_date,
                          gender: item.target.value,
                        })
                      }
                    >
                      <option>male</option>
                      <option>female</option>
                      {/* <option>other</option> */}
                    </select>
                  </div>
                </div>
              )}
              <div className="flex h-6">
                <div
                  onClick={(data) => {
                    {
                      id !== 1 && setShowTick(true);
                    }
                    {
                      id === 1 &&
                        dispatch(
                          changePasswordPending({
                            old_password,
                            password_confirmation,
                            password: newPassword,
                          })
                        ) &&
                        setShowTickPassword(true);
                    }
                    dispatch(registerSecondPending(personalData));
                  }}
                  className="flex justify-center items-centerpy-1 px-5 mx-2 border border-nireekaGreen text-white hover:text-nireekaGreen rounded-lg cursor-pointer hover:bg-white bg-nireekaGreen"
                >
                  {sendRequestPersonalInformation === true ||
                  (changePasswordReq === true && showTickPassword) ? (
                    <div className="px-2 flex justify-center items-center">
                      <LoadingNireeka
                        colorLoading={"text-white"}
                        widthLoading={"w-3"}
                        heightLoading={"h-3"}
                        borderLoading={"border-2"}
                      />
                    </div>
                  ) : (
                    <span className="w-full font-dosis font-light text-sm">
                      Save
                    </span>
                  )}
                </div>
                <div
                  onClick={() => {
                    setEdit(false);

                    setNewValue(initialValue);
                    {
                      id === 1 &&
                        setPassword() &&
                        setNewPassword() &&
                        setPasswordConfirmation();
                    }
                    setPersonalData({
                      height: data.height,
                      weight: data.weight,
                      inseam: data.inseam,
                      birth_date: data.birth_date,
                      gender: data.gender,
                    });
                  }}
                  className="font-dosis flex justify-center items-center font-medium text-sm py-1 px-2 mx-2 text-gray-600 hover:text-gray-900 rounded-lg cursor-pointer"
                >
                  Cancel
                </div>
                {((id !== 1 && showTick && requestPersonalInformationSuccess) ||
                  (id === 1 &&
                    changePasswordReq === true &&
                    showTickPassword)) && (
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: -1150 }}
                    transition={{ duration: 10 }}
                    className="w-5 mx-2 flex justify-center inems-center"
                  >
                    <Image src={GreenTick} alt="green-tick" />
                  </motion.div>
                )}
              </div>
            </div>
          )}
          {id !== 1 && (
            <p className="font-dosis text-xs font-light text-gray-400">
              {placeholderName}
            </p>
          )}
          {id === 1 && !edit && (
            <p className="font-dosis text-xs font-light text-gray-400">
              {placeholderName}
            </p>
          )}
        </div>
      </div>
      {!edit && id !== 2 && (
        <div
          onClick={() => setEdit(true)}
          className="font-dosis flex items-start justify-end w-1/12 text-gray-400 hover:text-gray-500 font-light cursor-pointer"
        >
          edit
        </div>
      )}
    </div>
  );
}

export default function Personal() {
  let localEnabled = JSON.parse(window.localStorage.getItem(`localEnabled`));

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let {
    message,
    changePasswordMessage,
    error,
    status,
    isAuth,
    changePasswordReq,
    sendRequestPersonalInformation,
  } = state.auth;
  let { getBikeSettingsData, getMacByOrderIdData, getUserBikesReqSuccess } =
    state.nsd;

  let {
    data,
    updateFamilyReqSuccess,
    updateAvatarMessage,
    updateAvatarReqSuccess,
  } = state.userPanel;
  useEffect(() => {
    if (updateAvatarReqSuccess || sendRequestPersonalInformation || isAuth) {
      dispatch(userPanelPending());
    }
  }, [sendRequestPersonalInformation, updateAvatarReqSuccess, isAuth]);

  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(data && data.name ? data.name : "");
  const [newLastName, setNewLastName] = useState(
    data && data.last_name ? data.last_name : ""
  );
  const [openUpload, setOpenUpload] = useState(false);

  const handleSendAvatar = async (e) => {
    e.preventDefault();
    var file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(updateAvatarPending(formData));
  };

  const [show, setShow] = useState(true);
  const [nameClick, setNameClick] = useState(false);

  useEffect(() => {
    if (nameClick && updateFamilyReqSuccess === true) {
      const timer = setTimeout(() => {
        setShow(false);
        setEdit(false);
        setNameClick(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [updateFamilyReqSuccess, data]);

  const [showTickPassword, setShowTickPassword] = useState(false);

  return (
    <div className="font-dosis">
      {openUpload && (
        <div>
          <UpdateImage setOpenUpload={setOpenUpload} openUpload={openUpload} />
        </div>
      )}
      {changePasswordReq === false && showTickPassword && (
        <div className="w-full">
          <div className="relative w-full sm:w-2/3 xl:w-1/2 flex justify-center">
            <FailedMessage
              MSG={changePasswordMessage ? changePasswordMessage : ""}
            />
          </div>
        </div>
      )}
      <div className="font-dosis text-sm font-medium text-gray-500">
        Since Jan 4, 2022
      </div>
      <div className="flex-shrink-0 flex py-2">
        <div className="flex items-start justify-start w-11/12">
          <div>
            {data ? (
              <div>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative">
                    <div
                      onClick={() => {
                        setOpenUpload(true);
                      }}
                      className="absolute -right-1 -bottom-1 bg-white shadow-md cursor-pointer rounded-full p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <img
                      className="h-12 w-12 rounded-full"
                      src={`${data.avatar}`}
                      alt="avatar"
                    />
                  </label>
                </div>
              </div>
            ) : (
              <BellIcon className="h-12 w-12 rounded-full" alt="avatar" />
            )}
          </div>

          <div className="ml-3">
            {data ? (
              <div>
                {!edit && (
                  <p className="text-base font-semibold text-gray-800 font-dosis">
                    {`${data.name} ${data.last_name}`}
                  </p>
                )}
                {edit && (
                  <div className="sm:flex">
                    <input
                      name={`name`}
                      type={`text`}
                      onChange={(item) => setNewName(item.target.value)}
                      // autoComplete={initialValue}
                      value={newName ? newName : data.name}
                      className="appearance-none font-dosis relative block w-full mx-1 my-1 sm:my-0 px-1 placeholder-gray-300 border border-gray-300 text-base font-light  text-gray-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={`Name`}
                    />
                    <input
                      name={`last-name`}
                      type={`text`}
                      onChange={(item) => setNewLastName(item.target.value)}
                      // autoComplete={initialValue}
                      value={newLastName ? newLastName : data.last_name}
                      className="appearance-none font-dosis relative block w-full mx-1 my-1 sm:my-0  px-1 placeholder-gray-300 border border-gray-300 text-base font-light  text-gray-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder={`Last Name`}
                    />
                  </div>
                )}
              </div>
            ) : (
              <p className="text-base font-semibold text-gray-800 font-dosis">
                ... is Loading
              </p>
            )}

            <p className="ml-1 text-xs font-light text-gray-400 font-dosis">
              Display Name
            </p>
          </div>
        </div>
        <div>
          {updateFamilyReqSuccess && nameClick && show && <UpdateSuccessful />}
        </div>
        {!edit && (
          <div
            onClick={() => setEdit(true)}
            className="flex items-start justify-end w-1/12 text-gray-400 font-light cursor-pointer font-dosis"
          >
            edit
          </div>
        )}
        {edit && (
          <div className="flex h-6 mt-1">
            {nameClick && updateFamilyReqSuccess === true && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -1150 }}
                transition={{ duration: 10 }}
                className="w-5 mx-2 flex justify-center inems-center"
              >
                <Image src={GreenTick} alt="green-tick" />
              </motion.div>
            )}
            <div
              onClick={(data) => {
                // setEdit(false);

                dispatch(
                  updateFamilyPending({
                    lastname: newLastName,
                    name: newName,
                  })
                );
                // setShow(true);
                setNameClick(true);
              }}
              className="font-dosis flex justify-center items-center font-light text-sm py-1 px-5 mx-2 text-white hover:text-nireekaGreen bg-nireekaGreen border border-nireekaGreen hover:bg-white rounded-lg cursor-pointer"
            >
              {updateFamilyReqSuccess === false ? (
                <div className="px-2 flex justify-center items-center">
                  <LoadingNireeka
                    colorLoading={"text-white"}
                    widthLoading={"w-3"}
                    heightLoading={"h-3"}
                    borderLoading={"border-2"}
                  />
                </div>
              ) : (
                <span className="font-dosis font-light text-sm">Save</span>
              )}
            </div>
            <div
              onClick={() => {
                setEdit(false);
                setNewLastName(data.last_name);
                setNewName(data.name);
              }}
              className="font-dosis flex justify-center items-center font-medium text-sm py-1 px-2 mx-2 text-gray-600 hover:text-gray-900 rounded-lg cursor-pointer"
            >
              Cancel
            </div>
          </div>
        )}
      </div>
      <div className="flex-shrink-0 flex py-2">
        <div className="flex items-center justify-start w-11/12">
          <div className="">
            {data && (
              <p className="text-base font-semibold text-gray-800 font-dosis">
                {data.email}
              </p>
            )}
            <p className="font-dosis text-xs font-light text-gray-400">
              E-mail
            </p>
          </div>
        </div>
      </div>
      {data && (
        <div>
          <EditItem
            id={1}
            initialValue={`********`}
            type="password"
            placeholderName="Password"
            name="password"
            showTickPassword={showTickPassword}
            setShowTickPassword={setShowTickPassword}
          />
          <EditItem
            id={2}
            initialValue={`${data.user_name}`}
            type="name"
            placeholderName="Username"
            name="username"
          />
          <EditItem
            id={7}
            initialValue={`${data.gender}`}
            type="number"
            placeholderName="Gender"
            name="gender"
          />
          <EditItem
            id={3}
            initialValue={`${data.age}`}
            type="number"
            name="age"
            placeholderName="Age"
          />
          <EditItem
            unit={
              getBikeSettingsData && getBikeSettingsData.unit
                ? getBikeSettingsData.unit
                : localEnabled
                ? 1
                : 0
            }
            id={4}
            initialValue={`${parseFloat(data.height).toFixed(0)}`}
            type="number"
            placeholderName={
              (getBikeSettingsData && getBikeSettingsData.unit === 1) ||
              localEnabled
                ? "Height (ft)"
                : "Height (cm)"
            }
            name="height"
          />
          <EditItem
            unit={
              getBikeSettingsData && getBikeSettingsData.unit
                ? getBikeSettingsData.unit
                : localEnabled
                ? 1
                : 0
            }
            id={5}
            initialValue={`${parseFloat(data.inseam).toFixed(0)}`}
            type="number"
            placeholderName={
              (getBikeSettingsData && getBikeSettingsData.unit === 1) ||
              localEnabled
                ? "Inseam (ft)"
                : "Inseam (cm)"
            }
            name="inseam"
          />
          <EditItem
            unit={
              getBikeSettingsData && getBikeSettingsData.unit
                ? getBikeSettingsData.unit
                : localEnabled
                ? 1
                : 0
            }
            id={6}
            initialValue={`${parseFloat(data.weight).toFixed(0)}`}
            type="number"
            placeholderName={
              (getBikeSettingsData && getBikeSettingsData.unit === 1) ||
              localEnabled
                ? "Weight (lb)"
                : "Weight (kg)"
            }
            name="weight"
          />
        </div>
      )}
      <SwitchUnit />
    </div>
  );
}
