import "react-toastify/dist/ReactToastify.css";
import UploadIcon from "../../../public/images/upload.png";
import DetailsIcon from "../../../public/images/details.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditShipping from "./EditShipping";
import {
  countriesPending,
  orderDetailsPending,
  setBillingAddress,
  setShippingAddress,
} from "../../../app/userPanelSlice";
import DetailsModal from "./DetailsModal";
import Link from "next/link";

export default function NireekaBike({}) {
  const [selectedDetails, setSelectedDetails] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let {
    ordersData,
    selectedOrderId,
    orderDetailsData,
    updateShippingAndBillingAddressReqSuccess,
  } = state.userPanel;

  useEffect(() => {
    if (updateShippingAndBillingAddressReqSuccess) {
      dispatch(orderDetailsPending(detailsSelectedBike.order_bike_id));
    }
  }, [updateShippingAndBillingAddressReqSuccess]);

  const [detailsSelectedBike, setDetailsSelectedBike] = useState({});

  useEffect(() => {
    ordersData.order_bikes.map(
      (item) =>
        item.order_bike_id === selectedOrderId && setDetailsSelectedBike(item)
    );
  }, [selectedOrderId, ordersData]);

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  useEffect(() => {
    setSubTotalPrice(
      orderDetailsData &&
        orderDetailsData.upgrades.reduce(
          (total, currentValue) => (total = total + currentValue.price),
          0
        )
    );
    setSubTotalPrice(
      (total) =>
        (total =
          orderDetailsData.total_price -
          orderDetailsData.shipping +
          orderDetailsData.discount)
    );
  }, [orderDetailsData, detailsSelectedBike]);

  return (
    <div className="relative flex flex-col justify-center items-center">
      {showEditAddress && (
        <div>
          <EditShipping
            showEditAddress={showEditAddress}
            setShowEditAddress={setShowEditAddress}
          />
        </div>
      )}
      {showDetails && (
        <div>
          <DetailsModal
            selectedDetails={selectedDetails}
            detailsSelectedBike={detailsSelectedBike}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            subTotalPrice={subTotalPrice}
          />
        </div>
      )}

      <div className="w-full">
        <div className="flex justify-start items-start w-full">
          <span className="text-xs font-semibold font-inter cursor-pointer text-blue-800 hover:text-blue-600">
            Your order detail
          </span>
        </div>
        <div className="flex justify-start items-start w-full">
          <span className="text-3xl font-semibold font-inter text-gray-900">
            {detailsSelectedBike.stage}
          </span>
        </div>

        {detailsSelectedBike ? (
          <div className="flex justify-start items-start w-full">
            <span className="text-xs font-normal font-inter text-gray-600">
              {detailsSelectedBike.progress === 0
                ? `Order #${detailsSelectedBike.id} placed successfully`
                : detailsSelectedBike.progress === 100
                ? "The bike is assembled and ready to be shipped"
                : detailsSelectedBike.progress === 101
                ? "Yay! The bike is packed and will be shipped in a day or so"
                : detailsSelectedBike.progress === 102
                ? "The bike is shipped and its way to youe home"
                : detailsSelectedBike.progress === 103
                ? `The bike is delivered and it's with you since ${detailsSelectedBike.delivered_at}`
                : 0 < detailsSelectedBike.progress < 100
                ? "We're currently processing your order"
                : ""}
            </span>
          </div>
        ) : (
          ""
        )}
        {detailsSelectedBike ? (
          <div className="flex justify-start items-start w-full mt-5">
            <span className="text-xs font-light font-inter text-gray-900">
              {detailsSelectedBike.progress === 0
                ? `Track your shipment here when the bike shipped`
                : detailsSelectedBike.progress === 100
                ? "Track your shipment here when the bike shipped"
                : detailsSelectedBike.progress === 101
                ? "Track your shipment here when the bike shipped"
                : detailsSelectedBike.progress === 102
                ? "Tracking number is not available yet."
                : detailsSelectedBike.progress === 103
                ? detailsSelectedBike.track_number
                : 0 < detailsSelectedBike.progress < 100
                ? "Track your shipment here when the bike shipped"
                : ""}
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-start items-start w-full my-2">
          <Link href="/help-center/category/shipping-delivery">
            <a
              target="_blank"
              className="text-xs font-semibold font-inter cursor-pointer text-blue-400 hover:text-blue-300"
            >
              Shipping FAQ
            </a>
          </Link>
        </div>
        <div className="flex justify-start items-start w-full border-t-2 mt-3 py-2">
          <div className="w-1/2 p-1 relative">
            {ordersData &&
            ordersData.order_bikes &&
            detailsSelectedBike &&
            detailsSelectedBike.image ? (
              <div>
                <Image
                  alt="bike"
                  className="w-auto"
                  width={384}
                  height={220}
                  src={detailsSelectedBike.image}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="w-1/2">
            <div>
              <span className="text-xs font-semibold font-inter text-gray-700">
                {detailsSelectedBike.title}
              </span>
            </div>
            {detailsSelectedBike && detailsSelectedBike.frame_no && (
              <div className="">
                <span className="text-2xl font-light font-inter text-gray-700">
                  #{detailsSelectedBike.frame_no}
                </span>
              </div>
            )}

            <div>
              <span className="text-xs font-semibold font-inter text-gray-600">
                {`${detailsSelectedBike.color} / ${detailsSelectedBike.size}"`}
              </span>
            </div>
            <div className="flex justify-between my-3 sm:w-1/2 md:w-full lg:w-1/2 xl:w-full">
              <span className="text-xs font-semibold font-inter text-gray-800">
                {`Quantity ${detailsSelectedBike.quantity}`}
              </span>
              <span className="text-xs font-semibold font-inter text-gray-800">
                |
              </span>
              <span className="text-xs font-semibold font-inter text-gray-800">
                {`Price $${
                  orderDetailsData &&
                  orderDetailsData.price &&
                  orderDetailsData.price.total_price
                    ? orderDetailsData.price.total_price.toLocaleString()
                    : "N/A"
                }`}
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-start items-start w-full border-t-2 py-4">
          <div className="flex justify-start items-start w-full">
            <div className="w-1/2">
              <div>
                <span className="text-xs font-semibold font-inter text-gray-700">
                  Shipping Address
                </span>
              </div>
              <div>
                <span className="text-xs font-medium font-inter text-gray-500">
                  {orderDetailsData && orderDetailsData.shipping_address
                    ? `${
                        orderDetailsData.shipping_address.name
                          ? orderDetailsData.shipping_address.name
                          : ""
                      } ${
                        orderDetailsData.shipping_address.last_name
                          ? orderDetailsData.shipping_address.last_name
                          : ""
                      }`
                    : "N/A"}
                </span>
              </div>
              <div className="-my-2">
                <span className="text-xs font-medium font-inter text-gray-500">
                  {orderDetailsData &&
                  orderDetailsData.shipping_address &&
                  orderDetailsData.shipping_address.zipcode
                    ? `${
                        orderDetailsData.shipping_address.zipcode
                          ? orderDetailsData.shipping_address.zipcode
                          : ""
                      } ${
                        orderDetailsData.shipping_address.country.title
                          ? orderDetailsData.shipping_address.country.title
                          : ""
                      } ${
                        orderDetailsData.billing_address.state
                          ? orderDetailsData.billing_address.state
                          : ""
                      }`
                    : "N/A"}
                </span>
              </div>
              <div className="-my-2">
                <span className="text-xs font-medium font-inter text-gray-500">
                  {orderDetailsData && orderDetailsData.billing_address
                    ? `${
                        orderDetailsData.billing_address.city
                          ? orderDetailsData.billing_address.city
                          : ""
                      } ${
                        orderDetailsData.billing_address.address1
                          ? orderDetailsData.billing_address.address1
                          : ""
                      }`
                    : "N/A"}
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <span className="text-xs font-semibold font-inter text-gray-700">
                  Billing Address
                </span>
              </div>
              <div>
                <span className="text-xs font-medium font-inter text-gray-500">
                  {orderDetailsData && orderDetailsData.billing_address
                    ? `${
                        orderDetailsData.billing_address.name
                          ? orderDetailsData.billing_address.name
                          : ""
                      } ${
                        orderDetailsData.billing_address.last_name
                          ? orderDetailsData.billing_address.last_name
                          : ""
                      }`
                    : "N/A"}
                </span>
              </div>
              <div className="-my-2">
                <span className="text-xs font-medium font-inter text-gray-500">
                  {orderDetailsData &&
                  orderDetailsData.billing_address &&
                  orderDetailsData.billing_address.zipcode
                    ? `${
                        orderDetailsData.billing_address.zipcode
                          ? orderDetailsData.billing_address.zipcode
                          : ""
                      } ${
                        orderDetailsData.billing_address.country.title
                          ? orderDetailsData.billing_address.country.title
                          : ""
                      } ${
                        orderDetailsData.billing_address.state
                          ? orderDetailsData.billing_address.state
                          : ""
                      }`
                    : " N/A"}
                </span>
              </div>
              <div className="-my-2">
                <span className="text-xs font-medium font-inter text-gray-500">
                  {orderDetailsData && orderDetailsData.billing_address
                    ? `${
                        orderDetailsData.billing_address.city
                          ? orderDetailsData.billing_address.city
                          : ""
                      } ${
                        orderDetailsData.billing_address.address1
                          ? orderDetailsData.billing_address.address1
                          : ""
                      }`
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>
          {detailsSelectedBike.progress < 101 &&
          orderDetailsData &&
          orderDetailsData.billing_address &&
          orderDetailsData.shipping_address ? (
            <div
              onClick={() => {
                setShowEditAddress(true);
                dispatch(countriesPending());
                dispatch(
                  setBillingAddress({
                    id: orderDetailsData.billing_address.b_address_id
                      ? orderDetailsData.billing_address.b_address_id
                      : "",
                    name: orderDetailsData.billing_address.name
                      ? orderDetailsData.billing_address.name
                      : "",
                    lastname: orderDetailsData.billing_address.last_name
                      ? orderDetailsData.billing_address.last_name
                      : "",
                    phone: orderDetailsData.billing_address.phone
                      ? orderDetailsData.billing_address.phone
                      : "",
                    zipcode: orderDetailsData.billing_address.zipcode
                      ? orderDetailsData.billing_address.zipcode
                      : "",
                    state: orderDetailsData.billing_address.state
                      ? orderDetailsData.billing_address.state
                      : "",
                    city: orderDetailsData.billing_address.city
                      ? orderDetailsData.billing_address.city
                      : "",
                    address: orderDetailsData.billing_address.address1
                      ? orderDetailsData.billing_address.address1
                      : "",
                    country:
                      orderDetailsData.billing_address.country &&
                      orderDetailsData.billing_address.country.id
                        ? orderDetailsData.billing_address.country.id
                        : "",
                    address2: orderDetailsData.billing_address.address2
                      ? orderDetailsData.billing_address.address2
                      : "",
                  })
                );
                dispatch(
                  setShippingAddress({
                    id: orderDetailsData.shipping_address.sh_address_id
                      ? orderDetailsData.shipping_address.sh_address_id
                      : "",
                    name: orderDetailsData.shipping_address.name
                      ? orderDetailsData.shipping_address.name
                      : "",
                    lastname: orderDetailsData.shipping_address.last_name
                      ? orderDetailsData.shipping_address.last_name
                      : "",
                    phone: orderDetailsData.shipping_address.phone
                      ? orderDetailsData.shipping_address.phone
                      : "",
                    zipcode: orderDetailsData.shipping_address.zipcode
                      ? orderDetailsData.shipping_address.zipcode
                      : "",
                    state: orderDetailsData.shipping_address.state
                      ? orderDetailsData.shipping_address.state
                      : "",
                    city: orderDetailsData.shipping_address.city
                      ? orderDetailsData.shipping_address.city
                      : "",
                    address: orderDetailsData.shipping_address.address1
                      ? orderDetailsData.shipping_address.address1
                      : "",
                    country:
                      orderDetailsData.shipping_address.country &&
                      orderDetailsData.shipping_address.country.id
                        ? orderDetailsData.shipping_address.country.id
                        : "",
                    address2: orderDetailsData.shipping_address.address2
                      ? orderDetailsData.shipping_address.address2
                      : "",
                  })
                );
              }}
              className="flex justify-center items-center w-1/3 border border-gray-300 hover:bg-gray-100 rounded-md py-1 mt-4 shadow-sm cursor-pointer"
            >
              <span className="font-medium font-inter text-gray-800 hover:text-gray-600 text-xs sm:text-sm text-center w-full h-full mx-1">
                Edit Address
              </span>
              <div className="absolute left-0 bottom-0"></div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-start items-start w-full border-t-2 my-2 py-4">
          <div className="w-1/2">
            <div>
              <span className="text-xs font-semibold font-inter text-gray-700">
                Payments Method
              </span>
            </div>
            {orderDetailsData && orderDetailsData.payment_methods ? (
              <div className="flex items-center">
                <div className="relative w-10 h-5">
                  <Image
                    layout="fill"
                    src={`${orderDetailsData.payment_methods.logo}`}
                    alt="logo"
                  />
                </div>

                <div className="text-xs font-medium font-inter text-gray-500">
                  {orderDetailsData.payment_methods.name}
                </div>
              </div>
            ) : (
              "N/A"
            )}
            {/* <div className="-my-2">
              <span className="text-xs font-medium font-inter text-gray-500">
                {orderDetailsData && orderDetailsData.payment_methods
                  ? `${orderDetailsData.payment_methods.card}`
                  : "N/A"}
              </span>
            </div> */}
            {/* <div className="-my-2">
              <span className="text-xs font-medium font-inter text-gray-500">
                {orderDetailsData && orderDetailsData.payment_methods
                  ? `${orderDetailsData.payment_methods.number_card}`
                  : "N/A"}
              </span>
            </div> */}
          </div>
          <div className="w-1/2">
            <div>
              <span className="text-xs font-semibold font-inter text-gray-700">
                Shipping Method
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-xs font-medium font-inter text-gray-500">
                {orderDetailsData && orderDetailsData.shipping_methods
                  ? `${orderDetailsData.shipping_methods}`
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start w-full border-t-2 my-2 pt-4">
          <div className="w-full">
            {orderDetailsData &&
            orderDetailsData.price &&
            orderDetailsData.price.sub_total &&
            orderDetailsData.price.sub_total > 0 ? (
              <div className="flex justify-between">
                <span className="text-xs font-semibold font-inter text-gray-900">
                  Subtotal
                </span>
                <span className="text-xs font-semibold font-inter text-gray-600">
                  ${orderDetailsData.price.sub_total.toLocaleString()}
                </span>
              </div>
            ) : (
              ""
            )}
            {orderDetailsData &&
            orderDetailsData.price &&
            orderDetailsData.price.discount &&
            orderDetailsData.price.discount > 0 ? (
              <div className="flex justify-between">
                <span className="text-xs font-semibold font-inter text-gray-900">
                  Discount
                </span>
                <span className="text-xs font-semibold font-inter text-gray-600">
                  ${orderDetailsData.price.discount.toLocaleString()}
                </span>
              </div>
            ) : (
              ""
            )}
            {orderDetailsData &&
            orderDetailsData.price &&
            orderDetailsData.price.vat &&
            orderDetailsData.price.vat > 0 ? (
              <div className="flex justify-between">
                <span className="text-xs font-semibold font-inter text-gray-900">
                  Vat
                </span>
                <span className="text-xs font-semibold font-inter text-gray-600">
                  ${orderDetailsData.price.vat.toLocaleString()}
                </span>
              </div>
            ) : (
              ""
            )}
            {orderDetailsData &&
            orderDetailsData.price &&
            orderDetailsData.price.credit &&
            orderDetailsData.price.credit > 0 ? (
              <div className="flex justify-between">
                <span className="text-xs font-semibold font-inter text-gray-900">
                  Credit
                </span>
                <span className="text-xs font-semibold font-inter text-gray-600">
                  ${orderDetailsData.price.credit.toLocaleString()}
                </span>
              </div>
            ) : (
              ""
            )}
            {orderDetailsData &&
            orderDetailsData.price &&
            orderDetailsData.price.shipping &&
            orderDetailsData.price.shipping > 0 ? (
              <div className="flex justify-between">
                <span className="text-xs font-semibold font-inter text-gray-900">
                  Shipping
                </span>
                <span className="text-xs font-semibold font-inter text-gray-600">
                  ${orderDetailsData.price.shipping.toLocaleString()}
                </span>
              </div>
            ) : (
              ""
            )}
            {orderDetailsData &&
            orderDetailsData.price &&
            orderDetailsData.price.total_price &&
            orderDetailsData.price.total_price > 0 ? (
              <div className="flex justify-between">
                <span className="text-xs font-semibold font-inter text-gray-900">
                  Total
                </span>
                <span className="text-xs font-semibold font-inter text-gray-600">
                  ${orderDetailsData.price.total_price.toLocaleString()}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex">
          <div
            onClick={() => {
              setShowDetails(true);
              setSelectedDetails(1);
            }}
            className="flex justify-center items-center w-1/2 border border-gray-300 hover:bg-gray-100 rounded-md py-1 mt-4 shadow-sm cursor-pointer mx-1"
          >
            <div className="w-3 mx-1 flex justify-center inems-center">
              <Image src={DetailsIcon} alt="details" />
            </div>
            <span className="font-medium font-inter text-gray-800 hover:text-gray-600 text-xs sm:text-sm xl:text-xs 2xl:text-sm h-full">
              Details
            </span>
          </div>
          <div
            onClick={() => {
              setShowDetails(true);
              setSelectedDetails(2);
            }}
            className="flex justify-center items-center w-1/2 border border-gray-300 hover:bg-gray-100 rounded-md py-1 mt-4 shadow-sm cursor-pointer mx-1"
          >
            <div className="w-3 mx-1 flex justify-center inems-center">
              <Image src={UploadIcon} alt="upload" />
            </div>
            <span className="font-medium font-inter text-gray-800 hover:text-gray-600 text-xs sm:text-sm xl:text-xs 2xl:text-sm h-full">
              Upgrade
            </span>
          </div>
          {/* <div
            onClick={() => {
            setShowDetails(true)
              setSelectedDetails(3);
            }}
            className="flex justify-center items-center w-1/3 border border-gray-300 hover:bg-gray-100 rounded-md py-1 mt-4 shadow-sm cursor-pointer mx-1"
          >
            <span className="font-medium font-inter text-gray-800 hover:text-gray-600 text-xs sm:text-sm xl:text-xs 2xl:text-sm h-full">
              Cancel Order
            </span>
          </div> */}
        </div>
      </div>

      {/* <div className="w-full flex justify-around items-center mt-24">
        <Garanty altIcon="details-icon" icon={DetailsIcon} title="Details" />
        <Garanty altIcon="tracking-icon" icon={ShippingIcon} title="Tracking" />
        <Garanty
          altIcon="sipping-icon"
          icon={DetailsIcon}
          title="Sipping Address"
        />
      </div> */}
    </div>
  );
}
