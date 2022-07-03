import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  orderDetailsPending,
  setBillingAddress,
  setShippingAddress,
} from "../../app/userPanelSlice";
import SuccessfulMessage from "../Atoms/SuccessfulMessage";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
    <div className="col-span-6 sm:col-span-3 xl:col-span-2">
      <label
        htmlFor={`${nameBox}`}
        className="block text-sm font-light text-gray-700 font-inter"
      >
        {title}
        <span className="text-nireekaRed text-sm">*</span>
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
    <div className="col-span-6 sm:col-span-3 xl:col-span-3">
      <label
        htmlFor={`${nameBox}`}
        className="block text-sm font-inter font-light text-gray-700"
      >
        {title}
        {(id === 7 || id === 27) && (
          <span className="text-nireekaRed text-sm">*</span>
        )}
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
    <div className="col-span-6 sm:col-span-3 xl:col-span-2">
      <label
        htmlFor="country"
        className="block text-sm font-light font-inter text-gray-700"
      >
        Country
        <span className="text-nireekaRed text-sm">*</span>
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

export default function Address() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let {
    orderDetailsData,
    billingAddress,
    shippingAddress,
    updateShippingAndBillingAddressReqSuccess,
  } = state.userPanel;
  const [showShippingAddress, setShowShippingAddress] = useState(true);

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

  return (
    <div className="w-full bg-white rounded-3xl my-5 flex flex-col justify-center items-center">
      <form className="w-full">
        <div>
          <span className="font-inter">Billing Address</span>
        </div>
        {/* {orderDetailsData && orderDetailsData.billing_address && ( */}
        <div className="py-5 bg-white rounded-3xl sm:p-6">
          <div className="grid grid-cols-6 gap-4">
            <PersonalBox
              title="First name"
              typeBox="text"
              nameBox="name"
              // initialValue={orderDetailsData.billing_address.name}
              id={21}
              changeStr={setData}
              changeId={setBoxId}
            />

            <PersonalBox
              title="Last name"
              typeBox="text"
              nameBox="lastname"
              // initialValue={orderDetailsData.billing_address.last_name}
              id={22}
              changeStr={setData}
              changeId={setBoxId}
            />

            <PersonalBox
              title="Phone"
              typeBox="number"
              nameBox="phone"
              // initialValue={orderDetailsData.billing_address.phone}
              id={23}
              changeStr={setData}
              changeId={setBoxId}
            />

            <StreetAddressBox
              title="Street Address 1"
              typeBox="text"
              nameBox="address"
              // initialValue={orderDetailsData.billing_address.address1}
              id={27}
              changeStr={setData}
              changeId={setBoxId}
            />

            <StreetAddressBox
              title="Street Address 2"
              typeBox="text"
              nameBox="address2"
              // initialValue={orderDetailsData.billing_address.address2}
              id={29}
              changeStr={setData}
              changeId={setBoxId}
            />

            <PersonalBox
              title="City"
              typeBox="text"
              nameBox="city"
              // initialValue={orderDetailsData.billing_address.city}
              id={26}
              changeStr={setData}
              changeId={setBoxId}
            />

            <PersonalBox
              title="State / Province"
              typeBox="text"
              nameBox="state"
              // initialValue={orderDetailsData.billing_address.state}
              id={25}
              changeStr={setData}
              changeId={setBoxId}
            />

            <PersonalBox
              title="ZIP / Postal code"
              typeBox="text"
              nameBox="zipcode"
              // initialValue={orderDetailsData.billing_address.zipcode}
              id={24}
              changeStr={setData}
              changeId={setBoxId}
            />

            <Countries
              // initialValue={orderDetailsData.billing_address.country}
              id={28}
              changeStr={setData}
              changeId={setBoxId}
            />
          </div>
        </div>
        {/* )} */}
      </form>
      <div className="w-full">
        <Switch.Group
          as="div"
          className="flex items-center justify-start sm:mx-6 mb-2"
        >
          <Switch
            checked={showShippingAddress}
            onChange={setShowShippingAddress}
            className={classNames(
              showShippingAddress ? "bg-indigo-600" : "bg-gray-200",
              "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                showShippingAddress ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3">
            <span className="text-xs sm:text-sm font-light text-gray-900 cursor-pointer">
              Shipping address is the same as my billing address.
            </span>
          </Switch.Label>
        </Switch.Group>
      </div>
      {!showShippingAddress && (
        <form className="w-full border-t pt-5">
          <div>
            <span className="font-inter">Shipping Address</span>
          </div>
          {/* {orderDetailsData && orderDetailsData.shipping_address && ( */}
          <div className="py-5 bg-white rounded-3xl sm:p-6">
            <div className="grid grid-cols-6 gap-4">
              <PersonalBox
                title="First name"
                typeBox="text"
                nameBox="name"
                // initialValue={orderDetailsData.shipping_address.name}
                id={1}
                changeStr={setData}
                changeId={setBoxId}
              />

              <PersonalBox
                title="Last name"
                typeBox="text"
                nameBox="lastname"
                // initialValue={orderDetailsData.shipping_address.last_name}
                id={2}
                changeStr={setData}
                changeId={setBoxId}
              />

              <PersonalBox
                title="Phone"
                typeBox="number"
                nameBox="phone"
                // initialValue={orderDetailsData.shipping_address.phone}
                id={3}
                changeStr={setData}
                changeId={setBoxId}
              />

              <StreetAddressBox
                title="Street Address 1"
                typeBox="text"
                nameBox="address"
                // initialValue={orderDetailsData.shipping_address.address1}
                id={7}
                changeStr={setData}
                changeId={setBoxId}
              />

              <StreetAddressBox
                title="Street Address 2"
                typeBox="text"
                nameBox="address2"
                // initialValue={orderDetailsData.shipping_address.address2}
                id={9}
                changeStr={setData}
                changeId={setBoxId}
              />

              <PersonalBox
                title="ZIP / Postal code"
                typeBox="text"
                nameBox="zipcode"
                // initialValue={orderDetailsData.shipping_address.zipcode}
                id={4}
                changeStr={setData}
                changeId={setBoxId}
              />

              <PersonalBox
                title="City"
                typeBox="text"
                nameBox="city"
                // initialValue={orderDetailsData.shipping_address.city}
                id={6}
                changeStr={setData}
                changeId={setBoxId}
              />

              <PersonalBox
                title="State / Province"
                typeBox="text"
                nameBox="state"
                // initialValue={orderDetailsData.shipping_address.state}
                id={5}
                changeStr={setData}
                changeId={setBoxId}
              />

              <Countries
                nameBox="country"
                // initialValue={orderDetailsData.shipping_address.country}
                id={8}
                changeStr={setData}
                changeId={setBoxId}
              />
            </div>
          </div>
          {/* // )} */}
        </form>
      )}
    </div>
  );
}
