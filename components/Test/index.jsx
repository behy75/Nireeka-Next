import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { setPaymentModal } from "../app/userPanelSlice";

function PersonalBox({ title, typeBox, nameBox }) {
  return (
    <div className="col-span-6 sm:col-span-2">
      <label
        htmlFor={`${nameBox}`}
        className="block text-sm font-light text-gray-700"
      >
        {title}
      </label>
      <input
        type={`${nameBox}`}
        name={`${typeBox}`}
        id={`${nameBox}`}
        autoComplete={`${nameBox}`}
        className="mt-1 px-2 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}

function StreetAddressBox({ title, typeBox, nameBox }) {
  return (
    <div className="col-span-6 lg:col-span-4">
      <label
        htmlFor={`${nameBox}`}
        className="block text-sm font-light text-gray-700"
      >
        {title}
      </label>
      <input
        type={`${nameBox}`}
        name={`${typeBox}`}
        id={`${nameBox}`}
        autoComplete={`${nameBox}`}
        className="mt-1 px-2 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}

export default function DetailsTestModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { paymentModal } = state.userPanel;

  return (
    <Transition.Root show={paymentModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setPaymentModal}
      >
        <div
          onClick={() => {
            dispatch(setPaymentModal(false));
          }}
          className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3/4 sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    dispatch(setPaymentModal(false));
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="w-full bg-white rounded-3xl my-5 border border-black flex flex-col justify-center items-center">
                <form className="w-full">
                  <div className="px-4 py-5 bg-white rounded-3xl sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <PersonalBox
                        title="First name"
                        typeBox="text"
                        nameBox="first-name"
                      />

                      <PersonalBox
                        title="Last name"
                        typeBox="text"
                        nameBox="last-name"
                      />

                      <PersonalBox
                        title="Email Address"
                        typeBox="email"
                        nameBox="email"
                      />

                      <PersonalBox
                        title="Phone"
                        typeBox="number"
                        nameBox="phone-number"
                      />

                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="country"
                          className="block text-sm font-light text-gray-700"
                        >
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-light"
                        >
                          <option className="font-light">United States</option>
                          <option className="font-light">Canada</option>
                          <option className="font-light">Mexico</option>
                        </select>
                      </div>

                      <PersonalBox
                        title="State / Province"
                        typeBox="text"
                        nameBox="region"
                      />

                      <PersonalBox title="City" typeBox="text" nameBox="city" />

                      <PersonalBox
                        title="ZIP / Postal code"
                        typeBox="text"
                        nameBox="postal-code"
                      />

                      <StreetAddressBox
                        title="Street Address 1"
                        typeBox="text"
                        nameBox="street-address-1"
                      />

                      <StreetAddressBox
                        title="Street Address 2"
                        typeBox="text"
                        nameBox="street-address-2"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 rounded-3xl text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
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
