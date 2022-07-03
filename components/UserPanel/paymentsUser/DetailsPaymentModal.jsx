import { useRef } from "react";
import NireekaLogo from "../../../public/images/logo-mid-dark.png";
import ReactLoading from "react-loading";
import { XIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import Printer from "../../../public/images/printer.png";
import Image from "next/image";
import MainModal from "../../Atoms/MainModal";

function DetailsMap({ data }) {
  return (
    <tbody className="">
      {data.map((data) => (
        <tr key={data.title} className="bg-white">
          <td className="px-6 py-1 w-5/6 text-sm font-light font-inter">
            {data.title}
          </td>
          <td className="px-6 py-1 w-1/6 text-sm font-light font-inter text-right">
            {`$${data.final_price.toLocaleString()}`}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

function CurrentDetails({ data, title }) {
  return (
    <tr className="bg-white">
      <td className="px-6 w-5/6 text-sm font-semibold font-inter text-gray-900">
        {title}
      </td>
      <td className="px-6 w-1/6 text-right text-sm font-semibold font-inter text-gray-600">
        ${data ? data.toLocaleString() : "N/A"}
      </td>
    </tr>
  );
}

export default function DetailsPaymentModal({ setOpen, open }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { paymentModal, invoiceDetailsData, invoiceDetailsReqSuccess } =
    state.userPanel;
  console.log("invoiceDetailsData", invoiceDetailsData);
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

  return (
    <MainModal setOpen={setOpen} open={open}>
      <div className="absolute top-0 right-0 pt-4 pr-4">
        <div
          className="bg-white cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => {
            setOpen(false);
          }}
        >
          <span className="sr-only">Close</span>
          <XIcon className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>

      {invoiceDetailsReqSuccess ? (
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <button onClick={printPage} className="flex">
                <div className="w-5 flex justify-center inems-center">
                  <Image src={Printer} alt="printer" />
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
              <div ref={ref} className="overflow-hidden sm:rounded-b-lg">
                {invoiceDetailsData &&
                  invoiceDetailsData.billing_address &&
                  invoiceDetailsData.billing_address.country &&
                  invoiceDetailsData.shipping_address &&
                  invoiceDetailsData.shipping_address.country && (
                    <div>
                      <div className="flex items-center mt-2">
                        <div className="relative ml-6 w-1/2 -mb-1">
                          <Image
                            width={300}
                            height={40}
                            src={NireekaLogo}
                            alt="logo"
                          />
                        </div>
                        <div className="px-6 w-1/2">
                          <div className="-mb-1">
                            <span className="text-xs sm:text-sm font-light font-inter">
                              {`DATE: ${invoiceDetailsData.date}`}
                            </span>
                          </div>
                          <div className="-mt-1">
                            <span className="text-sm sm:text-md font-light font-inter">
                              {`Reference #${invoiceDetailsData.id}`}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="px-6 w-1/2">
                          <div>
                            <span className="text-sm sm:text-md font-medium font-inter">
                              Bill to:
                            </span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`${invoiceDetailsData.billing_address.name} ${invoiceDetailsData.billing_address.last_name}`}</span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`${invoiceDetailsData.billing_address.country.title}`}</span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`Phone: ${invoiceDetailsData.billing_address.phone}`}</span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`Email: ${invoiceDetailsData.billing_address.email}`}</span>
                          </div>
                        </div>
                        <div className="w-1/2 pl-8">
                          <div className="">
                            <span className="text-sm sm:text-md font-medium font-inter">
                              Shipping to:
                            </span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`Phone: ${invoiceDetailsData.shipping_address.phone}`}</span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`${invoiceDetailsData.shipping_address.address1}`}</span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`${invoiceDetailsData.shipping_address.address2}`}</span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`${invoiceDetailsData.shipping_address.state} ${invoiceDetailsData.billing_address.city} ${invoiceDetailsData.billing_address.zipcode}`}</span>
                          </div>
                          <div>
                            <span className="text-sm sm:text-md font-light font-inter">{`${invoiceDetailsData.shipping_address.country.title}`}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                <div className="py-4">
                  <table className="min-w-full">
                    {invoiceDetailsData && invoiceDetailsData.order_bikes ? (
                      <DetailsMap data={invoiceDetailsData.order_bikes} />
                    ) : (
                      ""
                    )}
                    {invoiceDetailsData &&
                    invoiceDetailsData.order_accessories ? (
                      <DetailsMap data={invoiceDetailsData.order_accessories} />
                    ) : (
                      ""
                    )}
                    {invoiceDetailsData && invoiceDetailsData.order_spares ? (
                      <DetailsMap data={invoiceDetailsData.order_spares} />
                    ) : (
                      ""
                    )}
                    {invoiceDetailsData && invoiceDetailsData.order_upgrades ? (
                      <DetailsMap data={invoiceDetailsData.order_upgrades} />
                    ) : (
                      ""
                    )}
                    {invoiceDetailsData &&
                    invoiceDetailsData.order_warranties ? (
                      <DetailsMap data={invoiceDetailsData.order_warranties} />
                    ) : (
                      ""
                    )}
                  </table>
                </div>
                <div className="py-2 border-t border-nireekaRed">
                  <div className="">
                    <span className="font-semibold font-inter text-sm">
                      Current Invoice
                    </span>
                  </div>
                  <table className="min-w-full">
                    <tbody>
                      {invoiceDetailsData &&
                        invoiceDetailsData.price &&
                        (invoiceDetailsData.price.sub_total ||
                          invoiceDetailsData.price.sub_total > 0) && (
                          <CurrentDetails
                            title="Sub Total"
                            data={invoiceDetailsData.price.sub_total}
                          />
                        )}
                      {invoiceDetailsData &&
                        invoiceDetailsData.price &&
                        (invoiceDetailsData.price.vat ||
                          invoiceDetailsData.price.vat > 0) && (
                          <CurrentDetails
                            title="Vat"
                            data={invoiceDetailsData.price.vat}
                          />
                        )}
                      {invoiceDetailsData &&
                        invoiceDetailsData.price &&
                        (invoiceDetailsData.price.credit ||
                          invoiceDetailsData.price.credit > 0) && (
                          <CurrentDetails
                            title="Credit"
                            data={invoiceDetailsData.price.credit}
                          />
                        )}
                      {invoiceDetailsData &&
                        invoiceDetailsData.price &&
                        (invoiceDetailsData.price.discount ||
                          invoiceDetailsData.price.discount > 0) && (
                          <CurrentDetails
                            title="Discount"
                            data={invoiceDetailsData.price.discount}
                          />
                        )}
                      {invoiceDetailsData &&
                        invoiceDetailsData.price &&
                        (invoiceDetailsData.price.shipping ||
                          invoiceDetailsData.price.shipping > 0) && (
                          <CurrentDetails
                            title="Shipping"
                            data={invoiceDetailsData.price.shipping}
                          />
                        )}
                      {invoiceDetailsData &&
                        invoiceDetailsData.price &&
                        (invoiceDetailsData.price.total_price ||
                          invoiceDetailsData.price.total_price > 0) && (
                          <CurrentDetails
                            title="Total"
                            data={invoiceDetailsData.price.total_price}
                          />
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center">
            <div
              onClick={() => {
                setOpen(false);
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
    </MainModal>
  );
}
