import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  setBillingAddress,
  setShippingAddress,
  updateShippingAndBillingAddressPending,
} from "../../../app/userPanelSlice";
import LoadingNireeka from "../../Atoms/LoadingNireeka";
import SuccessfulMessage from "../../Atoms/SuccessfulMessage";

function PersonalBox({
  title,
  typeBox,
  nameBox,
  initialValue,
  changeStr,
  id,
  changeId,
}) {
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
          changeId(item.target.id);
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
  changeId,
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
          changeId(item.target.id);
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

function Countries({ initialValue, changeStr, changeId, id }) {
  const state = useSelector((state) => state);
  let { countriesData } = state.userPanel;

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
          changeId(item.target.id);
        }}
        id={id}
        name="country"
        autoComplete="country-name"
        className="mt-1 font-inter cursor-pointer block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {initialValue && (
          <option className="font-inter sm:text-sm">
            {initialValue.title}
          </option>
        )}
        {countriesData
          ? countriesData.map((item) => (
              <option
                value={item.id}
                key={item.id}
                className="font-inter sm:text-sm"
              >
                {item.title}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
}

export default function EditShipping({ showEditAddress, setShowEditAddress }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let {
    orderDetailsData,
    billingAddress,
    shippingAddress,
    updateShippingAndBillingAddressReqSuccess,
  } = state.userPanel;

  const [data, setData] = useState({});
  const [boxId, setBoxId] = useState(0);

  useEffect(() => {
    if (boxId < 15) {
      dispatch(setShippingAddress({ ...shippingAddress, ...data }));
    }
    if (boxId > 15) {
      dispatch(setBillingAddress({ ...billingAddress, ...data }));
    }
  }, [data]);

  const [editAddressClick, setEditAddressClick] = useState(false);

  useEffect(() => {
    if (updateShippingAndBillingAddressReqSuccess) {
      const timer = setTimeout(() => {
        setShowEditAddress(false);
        setEditAddressClick(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [updateShippingAndBillingAddressReqSuccess]);

  return (
    <Transition.Root show={showEditAddress} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setShowEditAddress}
      >
        <div className="flex items-center justify-center min-h-screen text-center sm:block sm:p-0">
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
            <div
              style={{ height: "90vh" }}
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-y-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3/4 sm:w-full sm:p-6"
            >
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <div
                  className="bg-white cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    setShowEditAddress(false);
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="w-full bg-white rounded-3xl my-5 flex flex-col justify-center items-center">
                <form className="w-full">
                  <div>
                    <span className="font-inter">Shipping Address</span>
                  </div>
                  {orderDetailsData && orderDetailsData.shipping_address && (
                    <div className="px-4 py-5 bg-white rounded-3xl sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <PersonalBox
                          title="First name"
                          typeBox="text"
                          nameBox="name"
                          initialValue={orderDetailsData.shipping_address.name}
                          id={1}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="Last name"
                          typeBox="text"
                          nameBox="lastname"
                          initialValue={
                            orderDetailsData.shipping_address.last_name
                          }
                          id={2}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="Phone"
                          typeBox="number"
                          nameBox="phone"
                          initialValue={orderDetailsData.shipping_address.phone}
                          id={3}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <StreetAddressBox
                          title="Street Address 1"
                          typeBox="text"
                          nameBox="address"
                          initialValue={
                            orderDetailsData.shipping_address.address1
                          }
                          id={7}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <StreetAddressBox
                          title="Street Address 2"
                          typeBox="text"
                          nameBox="address2"
                          initialValue={
                            orderDetailsData.shipping_address.address2
                          }
                          id={9}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="ZIP / Postal code"
                          typeBox="text"
                          nameBox="zipcode"
                          initialValue={
                            orderDetailsData.shipping_address.zipcode
                          }
                          id={4}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="City"
                          typeBox="text"
                          nameBox="city"
                          initialValue={orderDetailsData.shipping_address.city}
                          id={6}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="State / Province"
                          typeBox="text"
                          nameBox="state"
                          initialValue={orderDetailsData.shipping_address.state}
                          id={5}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <Countries
                          nameBox="country"
                          initialValue={
                            orderDetailsData.shipping_address.country
                          }
                          id={8}
                          changeStr={setData}
                          changeId={setBoxId}
                        />
                      </div>
                    </div>
                  )}
                </form>
                <form className="w-full border-t pt-5">
                  <div>
                    <span className="font-inter">Billing Address</span>
                  </div>
                  {orderDetailsData && orderDetailsData.billing_address && (
                    <div className="px-4 py-5 bg-white rounded-3xl sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <PersonalBox
                          title="First name"
                          typeBox="text"
                          nameBox="name"
                          initialValue={orderDetailsData.billing_address.name}
                          id={21}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="Last name"
                          typeBox="text"
                          nameBox="lastname"
                          initialValue={
                            orderDetailsData.billing_address.last_name
                          }
                          id={22}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="Phone"
                          typeBox="number"
                          nameBox="phone"
                          initialValue={orderDetailsData.billing_address.phone}
                          id={23}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <StreetAddressBox
                          title="Street Address 1"
                          typeBox="text"
                          nameBox="address"
                          initialValue={
                            orderDetailsData.billing_address.address1
                          }
                          id={27}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <StreetAddressBox
                          title="Street Address 2"
                          typeBox="text"
                          nameBox="address2"
                          initialValue={
                            orderDetailsData.billing_address.address2
                          }
                          id={29}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="City"
                          typeBox="text"
                          nameBox="city"
                          initialValue={orderDetailsData.billing_address.city}
                          id={26}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="State / Province"
                          typeBox="text"
                          nameBox="state"
                          initialValue={orderDetailsData.billing_address.state}
                          id={25}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <PersonalBox
                          title="ZIP / Postal code"
                          typeBox="text"
                          nameBox="zipcode"
                          initialValue={
                            orderDetailsData.billing_address.zipcode
                          }
                          id={24}
                          changeStr={setData}
                          changeId={setBoxId}
                        />

                        <Countries
                          initialValue={
                            orderDetailsData.billing_address.country
                          }
                          id={28}
                          changeStr={setData}
                          changeId={setBoxId}
                        />
                        <div className="col-span-6 sm:col-span-4 flex items-center justify-start sm:justify-end">
                          {updateShippingAndBillingAddressReqSuccess &&
                            editAddressClick && (
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
                          setShowEditAddress(false);
                        }}
                        className="inline-flex justify-center py-2 px-4 mx-2 text-sm font-light rounded-md text-gray-700 cursor-pointer"
                      >
                        Cancel
                      </div>
                      <div
                        onClick={() => {
                          dispatch(
                            updateShippingAndBillingAddressPending({
                              shipping_address: shippingAddress,
                              billing_address: billingAddress,
                            })
                          );
                          setEditAddressClick(true);
                        }}
                        className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                      >
                        {updateShippingAndBillingAddressReqSuccess === false ? (
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
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
