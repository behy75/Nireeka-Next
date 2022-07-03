import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { setActiveItem, setTicketStep } from "../../../app/userPanelSlice";
import Printer from "../../../public/images/printer.png";
import Image from "next/image";
import FailedMessage from "../../Atoms/FailedMessage";
import SuccessfulMessage from "../../Atoms/SuccessfulMessage";
import MainModal from "../../Atoms/MainModal";

export default function DetailsModal({
  detailsSelectedBike,
  selectedDetails,
  showDetails,
  setShowDetails,
}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { orderDetailsData, paymentModal } = state.userPanel;
  let { getUserBikesData } = state.nsd;
  const ref = useRef();
  const printPage = () => {
    const pri = document.getElementById("iframetoprint").contentWindow;
    pri.document.open();
    pri.document.write(document.head.innerHTML);
    pri.document.write(ref.current.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  };

  let userObj = JSON.parse(
    window.localStorage.getItem(`${orderDetailsData.order_bike_id}`)
  );

  // let ordersNumber = JSON.parse(window.localStorage.getItem(`ordersNumber`));

  const [add, setAdd] = useState(userObj ? [...userObj.details] : []);

  useEffect(() => {
    let price = 0;
    if (userObj && userObj.details) {
      userObj.details.map((item) => (price = price + item.price));
    }
  }, [add]);

  useEffect(() => {
    if (add) {
      window.localStorage.setItem(
        `${orderDetailsData.order_bike_id}`,
        JSON.stringify({
          details: add,
          title: detailsSelectedBike.title,
          color: detailsSelectedBike.color,
          image: detailsSelectedBike.image,
          qty: 1,
        })
      );
    }
  }, [add]);

  useEffect(() => {
    let number = 0;

    if (getUserBikesData && getUserBikesData[0]) {
      getUserBikesData.map((item, index) => {
        let bikeDetails = JSON.parse(
          window.localStorage.getItem(`${item.order_bike_id}`)
        );
        if (
          window.localStorage.getItem(`${item.order_bike_id}`) &&
          bikeDetails &&
          bikeDetails.details &&
          bikeDetails.details[0]
        ) {
          number = number + 1;
        }
      });
    }
    window.localStorage.setItem(`ordersNumber`, JSON.stringify(number));
  }, [getUserBikesData, add]);

  const [addToShopping, setAddToShopping] = useState(false);
  const [removeFromShopping, setRemoveFromShopping] = useState(false);
  useEffect(() => {
    if (addToShopping) {
      const timer = setTimeout(() => {
        setAddToShopping(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (removeFromShopping) {
      const timer = setTimeout(() => {
        setRemoveFromShopping(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [addToShopping, removeFromShopping]);

  return (
    <MainModal setOpen={setShowDetails} open={showDetails}>
      {selectedDetails === 1 || selectedDetails === 2 ? (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:align-middle sm:w-1100">
          <div className="relative flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden sm:rounded-b-lg">
                  {selectedDetails === 1 && (
                    <button onClick={printPage} className="flex">
                      <div className="w-5 flex justify-center inems-center">
                        <Image src={Printer} alt="activity" />
                      </div>
                      <span className="font-light font-inter text-sm px-2">
                        Print
                      </span>
                      <iframe
                        className="sr-only"
                        id="iframetoprint"
                        title="printable iframe"
                      />
                    </button>
                  )}

                  {selectedDetails === 1 && (
                    <div ref={ref}>
                      <div className="border-b border-red-600 py-2">
                        <div className="py-2">
                          <span className="font-semibold font-inter text-sm">
                            Ordered Upgrades
                          </span>
                        </div>
                        <table className="min-w-full">
                          <tbody>
                            <tr className="">
                              <td className="px-6 py-1 w-2/3 text-sm font-light">
                                {detailsSelectedBike
                                  ? `${detailsSelectedBike.title}(${detailsSelectedBike.size}"/${detailsSelectedBike.color})`
                                  : "N/A"}
                              </td>
                              <td className="px-6 py-1 w-1/6 text-sm font-light text-right">
                                {detailsSelectedBike
                                  ? `$${detailsSelectedBike.price.toLocaleString()}`
                                  : "N/A"}
                              </td>
                              <td className="w-1/6"></td>
                            </tr>
                          </tbody>
                          <tbody>
                            {orderDetailsData &&
                              orderDetailsData.upgrades &&
                              orderDetailsData.upgrades.map((item) => (
                                <tr key={item.title} className="bg-white">
                                  <td className="px-6 py-1 w-2/3 text-sm font-light">
                                    {item.title}
                                  </td>
                                  <td className="px-6 py-1 w-1/6 text-sm font-light text-right">
                                    {`$${item.price.toLocaleString()}`}
                                  </td>
                                  <td className="w-1/6 py-1"></td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      {orderDetailsData &&
                        orderDetailsData.price &&
                        orderDetailsData.price.sub_total && (
                          <div className="py-2">
                            <div className="">
                              <span className="font-semibold font-inter text-sm">
                                Current Invoice
                              </span>
                            </div>
                            <table className="min-w-full">
                              <tbody>
                                <tr className="bg-white">
                                  <td className="px-6 w-2/3 text-sm font-semibold font-inter text-gray-900">
                                    Subtotal
                                  </td>
                                  <td className="px-6 w-1/6 text-right text-sm font-semibold font-inter text-gray-600">
                                    $
                                    {orderDetailsData.price.sub_total.toLocaleString()}
                                  </td>
                                  <td className="w-1/6"></td>
                                </tr>
                                {orderDetailsData &&
                                orderDetailsData.price &&
                                orderDetailsData.price.credit &&
                                orderDetailsData.price.credit > 0 ? (
                                  <tr className="bg-white">
                                    <td className="px-6 w-2/3 text-sm font-semibold font-inter text-gray-900">
                                      Credit
                                    </td>
                                    <td className="px-6 w-1/6 text-right text-sm font-semibold font-inter text-gray-600">
                                      $
                                      {orderDetailsData.price.credit.toLocaleString()}
                                    </td>
                                    <td className="w-1/6"></td>
                                  </tr>
                                ) : (
                                  ""
                                )}
                                {orderDetailsData &&
                                orderDetailsData.price &&
                                orderDetailsData.price.vat &&
                                orderDetailsData.price.vat > 0 ? (
                                  <tr className="bg-white">
                                    <td className="px-6 w-2/3 text-sm font-semibold font-inter text-gray-900">
                                      Vat
                                    </td>
                                    <td className="px-6 w-1/6 text-right text-sm font-semibold font-inter text-gray-600">
                                      $
                                      {orderDetailsData.price.vat.toLocaleString()}
                                    </td>
                                    <td className="w-1/6"></td>
                                  </tr>
                                ) : (
                                  ""
                                )}
                                {orderDetailsData &&
                                orderDetailsData.price &&
                                orderDetailsData.price.discount &&
                                orderDetailsData.price.discount > 0 ? (
                                  <tr className="bg-white">
                                    <td className="px-6 w-2/3 text-sm font-semibold font-inter text-gray-900">
                                      Discount
                                    </td>
                                    <td className="px-6 w-1/6 text-right text-sm font-semibold font-inter text-gray-600">
                                      $
                                      {orderDetailsData.price.discount.toLocaleString()}
                                    </td>
                                    <td className="w-1/6"></td>
                                  </tr>
                                ) : (
                                  ""
                                )}

                                {orderDetailsData &&
                                orderDetailsData.price &&
                                orderDetailsData.price.shipping &&
                                orderDetailsData.price.shipping > 0 ? (
                                  <tr className="bg-white">
                                    <td className="px-6 w-2/3 text-sm font-semibold font-inter text-gray-900">
                                      Shipping
                                    </td>
                                    <td className="px-6 w-1/6 text-right text-sm font-semibold font-inter text-gray-600">
                                      $
                                      {orderDetailsData &&
                                      orderDetailsData.price.shipping &&
                                      orderDetailsData.price.shipping
                                        ? `${orderDetailsData.price.shipping.toLocaleString()}`
                                        : "N/A"}
                                    </td>
                                    <td className="w-1/6"></td>
                                  </tr>
                                ) : (
                                  ""
                                )}

                                <tr className="bg-white">
                                  <td className="px-6 w-2/3 text-sm font-semibold font-inter text-gray-900">
                                    Total
                                  </td>
                                  <td className="px-6 w-1/6 text-right text-sm font-semibold font-inter text-gray-600">
                                    $
                                    {orderDetailsData &&
                                    orderDetailsData.price &&
                                    orderDetailsData.price.total_price
                                      ? orderDetailsData.price.total_price.toLocaleString()
                                      : "N/A"}
                                  </td>
                                  <td className="w-1/6"></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )}
                    </div>
                  )}
                  {selectedDetails === 2 && (
                    <div className="pt-4 py-2">
                      <div className="relative z-30 w-full flex justify-center items-end">
                        {addToShopping && (
                          <SuccessfulMessage MSG="Added to your shopping cart." />
                        )}
                        {removeFromShopping && (
                          <FailedMessage MSG="Removed from your shopping cart." />
                        )}
                      </div>

                      <div className="">
                        <span className="font-semibold font-inter text-sm">
                          Remaining Upgrades
                        </span>
                      </div>

                      <table className="min-w-full">
                        <tbody>
                          {orderDetailsData &&
                            orderDetailsData.upgrades_remaining &&
                            orderDetailsData.upgrades_remaining.map((item) => (
                              <tr key={item.title} className="bg-white">
                                <td className="px-6 py-1 w-2/3 text-sm font-light">
                                  {item.title}
                                </td>
                                <td className="px-6 py-1 w-1/6 text-sm font-light text-right">
                                  {`+$${item.price.toLocaleString()}`}
                                </td>
                                <td className="text-sm py-1 font-light text-blue-600 w-1/6">
                                  {!add
                                    .map((pp) => pp.id)
                                    .includes(item.id) && (
                                    <span
                                      onClick={() => {
                                        setAdd([
                                          ...add,
                                          {
                                            id: item.id,
                                            price: item.price,
                                            title: item.title,
                                          },
                                        ]);
                                        setAddToShopping(true);
                                      }}
                                      className="text-sm font-light text-blue-600 cursor-pointer"
                                    >
                                      Add
                                    </span>
                                  )}
                                  {add.map((pp) => pp.id).includes(item.id) && (
                                    <span
                                      onClick={() => {
                                        setAdd(
                                          add.filter(
                                            (value) => value.id !== item.id
                                          )
                                        );
                                        setRemoveFromShopping(true);
                                      }}
                                      className="text-sm font-light text-blue-600 cursor-pointer"
                                    >
                                      Remove
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {(selectedDetails === 1 || selectedDetails === 2) && (
              <div className="cursor-pointer flex justify-center items-center">
                <div
                  onClick={() => {
                    setShowDetails(false);
                  }}
                  className="bg-red-600 hover:bg-red-500 rounded-xl"
                >
                  <span className="font-light font-inter text-white p-2">
                    Close
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationIcon
                className="h-6 w-6 text-red-600"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Delete address
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to cancel your Order?
                  {/* All your data for this address will always be deleted from our
                        servers. This action is not reversible. */}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <div
              className="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                setShowDetails(false);
                dispatch(setActiveItem(9));
                dispatch(setTicketStep(2));
              }}
            >
              Cancel Order
            </div>

            <div
              className="mt-3 w-full cursor-pointer inline-flex justify-center rounded-md px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={() => setShowDetails(false)}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </MainModal>
  );
}
