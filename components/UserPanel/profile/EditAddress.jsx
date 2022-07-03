import { Fragment, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  putEditAddressPending,
  setShippingAddress,
} from "../../../app/userPanelSlice";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import SuccessfulMessage from "../../Atoms/SuccessfulMessage";

function PersonalBox({ title, typeBox, nameBox, initialValue, changeStr, id }) {
  const [newValue, setNewValue] = useState(initialValue);

  return (
    <div className="col-span-6 sm:col-span-2">
      <label
        htmlFor={`${nameBox}`}
        className="block text-sm font-light text-gray-700 font-inter"
      >
        {title}
      </label>
      <input
        onChange={(item) => {
          changeStr({
            [item.target.name]: item.target.value,
          });
          setNewValue(item.target.value);
        }}
        value={newValue}
        type={`${typeBox}`}
        name={`${nameBox}`}
        id={`${id}`}
        autoComplete={`${nameBox}`}
        className="mt-1 px-2 py-2 font-inter border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}

function StreetAddressBox({
  title,
  typeBox,
  nameBox,
  initialValue,
  changeStr,
  id,
}) {
  const [newValue, setNewValue] = useState(initialValue);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor={`${nameBox}`}
        className="block text-sm font-inter font-light text-gray-700"
      >
        {title}
      </label>
      <input
        onChange={(item) => {
          changeStr({
            [item.target.name]: item.target.value,
          });
          setNewValue(item.target.value);
        }}
        value={newValue}
        type={`${typeBox}`}
        name={`${nameBox}`}
        id={`${id}`}
        autoComplete={`${nameBox}`}
        className="mt-1 px-2 py-2 font-inter border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}

function Countries({ initialValue, changeStr, id }) {
  const state = useSelector((state) => state);
  let { countriesData } = state.userPanel;
  const [newValue, setNewValue] = useState(initialValue);

  return (
    <div className="col-span-6 sm:col-span-2">
      <label
        htmlFor="country"
        className="block text-sm font-light font-inter text-gray-700"
      >
        Country
      </label>
      <select
        onClick={(item) => {
          changeStr({
            [item.target.name]: item.target.value,
          });
        }}
        id={id}
        name="country"
        autoComplete="country-name"
        className="mt-1 font-inter block w-full py-2 px-1 cursor-pointer border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {countriesData
          ? countriesData.map((item) => (
              <option
                value={item.id}
                key={item.id}
                className="font-light font-inter"
              >
                {item.title}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
}

export default function EditAddress({
  editOn,
  setEdieOn,
  index,
  setItemSelected,
}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let {
    getEditAddressData,
    shippingAddress,
    countriesData,
    putEditAddressReqSuccess,
  } = state.userPanel;

  const [data, setData] = useState({});

  useEffect(() => {
    if (getEditAddressData) {
      dispatch(
        setShippingAddress({
          id: getEditAddressData.id,
          name: getEditAddressData.name,
          lastname: getEditAddressData.last_name,
          phone: getEditAddressData.phone,
          zipcode: getEditAddressData.zipcode,
          state: getEditAddressData.state,
          city: getEditAddressData.city,
          address: getEditAddressData.address,
          country: getEditAddressData.country_id,
          address2: getEditAddressData.address2,
        })
      );
    }
  }, [getEditAddressData]);

  useEffect(() => {
    dispatch(setShippingAddress({ ...getEditAddressData, ...data }));
  }, [data, getEditAddressData]);

  const [editAddressClick, setEditAddressClick] = useState(false);

  useEffect(() => {
    if (editAddressClick && putEditAddressReqSuccess) {
      const timer = setTimeout(() => {
        setEdieOn(false);
        setEditAddressClick(false);
        setItemSelected(index);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [putEditAddressReqSuccess, editAddressClick]);

  return (
    <Transition.Root show={editOn} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setEdieOn}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3/4 sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    setEdieOn(false);
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {getEditAddressData && countriesData ? (
                <div className="w-full bg-white rounded-3xl my-5 flex flex-col justify-center items-center">
                  <form className="w-full">
                    <div>
                      <span className="font-inter">Address</span>
                    </div>
                    {getEditAddressData && (
                      <div className="px-4 py-5 bg-white rounded-3xl sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <PersonalBox
                            title="First name"
                            typeBox="text"
                            nameBox="name"
                            initialValue={getEditAddressData.name}
                            id={1}
                            changeStr={setData}
                          />

                          <PersonalBox
                            title="Last name"
                            typeBox="text"
                            nameBox="lastname"
                            initialValue={getEditAddressData.last_name}
                            id={2}
                            changeStr={setData}
                          />

                          <PersonalBox
                            title="Phone"
                            typeBox="number"
                            nameBox="phone"
                            initialValue={getEditAddressData.phone}
                            id={3}
                            changeStr={setData}
                          />

                          <StreetAddressBox
                            title="Street Address 1"
                            typeBox="text"
                            nameBox="address"
                            initialValue={getEditAddressData.address}
                            id={7}
                            changeStr={setData}
                          />

                          <StreetAddressBox
                            title="Street Address 2"
                            typeBox="text"
                            nameBox="address2"
                            initialValue={getEditAddressData.address2}
                            id={9}
                            changeStr={setData}
                          />

                          <PersonalBox
                            title="City"
                            typeBox="text"
                            nameBox="city"
                            initialValue={getEditAddressData.city}
                            id={6}
                            changeStr={setData}
                          />

                          <PersonalBox
                            title="State / Province"
                            typeBox="text"
                            nameBox="state"
                            initialValue={getEditAddressData.state}
                            id={5}
                            changeStr={setData}
                          />

                          <PersonalBox
                            title="ZIP / Postal code"
                            typeBox="text"
                            nameBox="zipcode"
                            initialValue={getEditAddressData.zipcode}
                            id={4}
                            changeStr={setData}
                          />

                          <Countries
                            nameBox="country"
                            initialValue={getEditAddressData.country_id}
                            id={8}
                            changeStr={setData}
                          />
                          <div className="col-span-6 sm:col-span-4 flex items-center justify-start sm:justify-end">
                            {putEditAddressReqSuccess && editAddressClick && (
                              <div className="relative w-full sm:w-2/3 xl:w-1/2 flex justify-start">
                                <SuccessfulMessage MSG="Your address was successfully updated." />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="px-4 py-3 rounded-3xl text-right sm:px-6">
                      <div className="px-4 py-3 rounded-3xl text-right sm:px-6">
                        <div
                          onClick={() => {
                            setEdieOn(false);
                          }}
                          className="inline-flex justify-center py-2 px-4 mx-2 text-sm font-medium rounded-md text-gray-700 cursor-pointer"
                        >
                          Cancel
                        </div>
                        <div
                          onClick={() => {
                            dispatch(
                              putEditAddressPending({
                                data: shippingAddress,
                              })
                            );
                            setEditAddressClick(true);
                          }}
                          className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                        >
                          {putEditAddressReqSuccess === false ? (
                            <div className="px-2">
                              <LoadingNireeka
                                colorLoading={"text-white"}
                                widthLoading={"w-4"}
                                heightLoading={"h-4"}
                                borderLoading={"border-2"}
                              />
                            </div>
                          ) : (
                            <span className="text-sm font-light text-white">
                              Update
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div
                  className="flex justify-center items-center"
                  style={{ height: "60vh" }}
                >
                  <ReactLoading
                    type="spin"
                    color="rgb(209, 213, 219)"
                    height={80}
                    width={80}
                  />
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
