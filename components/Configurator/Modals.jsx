import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { setPaymentModal } from "../../app/userPanelSlice";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";
import Slider from "./Slider";
import MainModal from "../Atoms/MainModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Modals({
  selectedItem,
  setSelectedItem,
  open,
  setOpen,
}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
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
              style={{ maxHeight: "85vh" }}
              className={classNames(
                selectedItem === 3
                  ? "sm:max-w-3/4 overflow-y-scroll"
                  : "sm:max-w-lg",
                "inline-block align-bottom bg-white rounded-lg mx-3 px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"
              )}
            >
              {selectedItem === 1 && (
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="">
                    <div className="flex items-center justify-start w-full">
                      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 mx-3 font-medium text-gray-900"
                      >
                        Authentication
                      </Dialog.Title>
                    </div>

                    <div className="mt-3 mx-3 text-justify sm:ml-4">
                      <p className="text-sm text-gray-500">
                        Have you already registered on our site?
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-row-reverse">
                    <div
                      className="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-3 sm:w-auto sm:text-sm"
                      onClick={() => {
                        setOpen(false);
                        router.push("/login");
                        setSelectedItem(0);
                        window.localStorage.setItem(
                          `pathname`,
                          JSON.stringify("/checkout")
                        );
                      }}
                    >
                      <span className="text-sm font-light text-white">Yes</span>
                    </div>
                    <div
                      className="w-full cursor-pointer inline-flex justify-center rounded-md px-4 py-2 bg-white text-base font-light text-gray-700 hover:text-gray-500 mt-0 sm:w-auto sm:text-sm"
                      onClick={() => {
                        setOpen(false);
                        router.push("/register");
                        setSelectedItem(0);
                        window.localStorage.setItem(
                          `pathname`,
                          JSON.stringify("/checkout")
                        );
                      }}
                    >
                      <span className="text-sm font-light">No</span>
                    </div>
                  </div>
                </div>
              )}
              {selectedItem === 2 && (
                <>
                  {1 ? (
                    <div className="flex flex-col">
                      <div className="absolute top-0 right-0 pt-4 pr-4">
                        <div
                          className="bg-white cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => {
                            setSelectedItem(0);
                            setOpen(false);
                          }}
                        >
                          <span className="sr-only">Close</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="py-2 border-b border-nireekaRed">
                        <div className="py-2">
                          <span className="font-semibold font-inter text-sm">
                            SPECIFICATIONS
                          </span>
                        </div>
                        <table className="min-w-full">
                          <tbody className="">
                            <tr className="bg-white">
                              <td className="px-6 py-1 w-5/6 text-sm font-light font-inter">
                                Motors
                              </td>
                              <td className="px-6 py-1 w-1/6 text-sm font-light font-inter text-right">
                                250W
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="py-2">
                        <div className="py-2">
                          <span className="font-semibold font-inter text-sm">
                            CERTIFICATES
                          </span>
                        </div>
                        <table className="min-w-full">
                          <tbody className="">
                            <tr className="bg-white">
                              <td className="px-6 py-1 text-sm font-light font-inter">
                                Standard: EN ISO 12100:2010, EN 15194:2017, EN
                                60204-1:2006+A1:2009+AC:2010
                              </td>
                            </tr>
                            <tr className="bg-white">
                              <td className="px-6 py-1 text-sm font-light font-inter">
                                related to CE Directive(s): 2006/42/EC
                                (Machinery) 2014/35/EU (Low Voltage) 2014/30/EU
                                (Electromagnetic Compatibility)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="cursor-pointer flex justify-center items-center">
                        <div
                          onClick={() => {
                            setOpen(false);
                            setSelectedItem(0);
                          }}
                          className="bg-red-600 hover:bg-red-500 rounded-xl"
                        >
                          <span className="font-light font-inter text-white p-2">
                            Close
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex justify-center items-center h-full w-full"
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
                </>
              )}
              {selectedItem === 3 && (
                <>
                  {1 ? (
                    <div className="flex flex-col">
                      <div className="absolute top-0 right-0 pt-4 pr-4">
                        <div
                          className="bg-white cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => {
                            setSelectedItem(0);
                            setOpen(false);
                          }}
                        >
                          <span className="sr-only">Close</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="col-span-2 md:col-span-1">
                          <Slider />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                          <div className="py-2 h-full flex flex-col justify-center">
                            <table className="min-w-full">
                              <tbody className="py-1">
                                <tr className="grid grid-cols-3 gap-1 bg-white mx-2 sm:mx-5 mt-3">
                                  <td className="col-span-1 text-xs sm:text-sm font-semibold font-inter">
                                    360Wh Battery
                                  </td>
                                  <td className="col-span-1 text-xs sm:text-sm font-light font-inter text-center">
                                    48V 7.5Ah
                                  </td>
                                  <td className="col-span-1 text-xs sm:text-sm font-medium text-gray-500 font-inter text-right">
                                    $99
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="py-2 text-justify">
                              <p className="font-light font-inter text-xs sm:text-sm">
                                The BAFANG HMI with a high-contrast LCD display
                                delivers all important information at a glance
                                and can also be read in direct sunlight without
                                difficulty. The BAFANG handlebar controller
                                gives good feedback, is extremely robust and
                                easy to use. The additional output can be
                                individually controlled by five support levels.
                                The user interface is clearly legible and
                                intuitive to use. The HMI is compatible with the
                                Bus system RS 232. The HMI is protected against
                                contact and ingress of water and dirt and
                                complies with protection class IP 65. It is
                                available in black and sliver.
                              </p>
                            </div>
                            <div className="py-2">
                              <span className="font-normal font-inter text-sm">
                                SPECIFICATIONS*
                              </span>
                            </div>
                            <table className="min-w-full">
                              <tbody className="">
                                <tr className="py-1 grid grid-cols-2 gap-1 bg-white mx-2 sm:mx-5">
                                  <td className="col-span-1 text-xs sm:text-sm font-light font-inter text-left">
                                    Power
                                  </td>
                                  <td className="col-span-1 text-xs sm:text-sm font-light font-inter text-right">
                                    250W
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="py-2">
                              <span className="font-light font-inter text-xs sm:text-sm">
                                *Specifications are subject to change without
                                prior notice.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="cursor-pointer flex justify-center items-center">
                        <div
                          onClick={() => {
                            setOpen(false);
                            setSelectedItem(0);
                          }}
                          className="bg-red-600 hover:bg-red-500 rounded-xl"
                        >
                          <span className="font-light font-inter text-white p-2">
                            Close
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex justify-center items-center h-full w-full"
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
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
