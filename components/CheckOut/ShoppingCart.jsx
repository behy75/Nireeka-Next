import Image from "next/image";
import Link from "next/link";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMacByOrderIdPending,
  getUserBikesPending,
} from "../../app/nsdSlice";
import { userPanelPending } from "../../app/userPanelSlice";
import PartiallyIcon from "../../public/images/partially.png";
import PayBrightIcon from "../../public/images/pay-bright.svg";
import StripeIcon from "../../public/images/stripe.png";
import CookiesService from "../../services/CookiesService";

const plans = [
  {
    id: 1,
    title: "Pay in full",
    description: "",
    srcItem: StripeIcon,
    itemSize: ["w-24", "h-6"],
  },
  {
    id: 2,
    title: "Pay Monthly",
    description: "3-Monthes",
    srcItem: PartiallyIcon,
    itemSize: ["w-24", "h-6"],
  },
  {
    id: 3,
    title: "Pay Monthly",
    description: "12-Monthes for Canadians Only",
    srcItem: PayBrightIcon,
    itemSize: ["w-24", "h-10"],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ShoppingCartItem({
  orderBikeId,
  ordersNumber,
  orderNumber,
  totalPrice,
  setRemove,
  remove,
  setTotalPrice,
}) {
  let bikeDetails = JSON.parse(window.localStorage.getItem(`${orderBikeId}`));
  const [qty, setQty] = useState(
    bikeDetails && bikeDetails.qty ? bikeDetails.qty : 1
  );
  const [itemsPrice, setItemsPrice] = useState(0);

  useEffect(() => {
    let prices = 0;
    if (window.localStorage.getItem(`${orderBikeId}`)) {
      bikeDetails.details.map((pr) => (prices = prices + pr.price));
    }
    setItemsPrice(prices);
  }, [window]);

  useEffect(() => {
    if (window.localStorage.getItem(`${orderBikeId}`)) {
      window.localStorage.setItem(
        `${orderBikeId}`,
        JSON.stringify({
          ...bikeDetails,
          qty: qty,
        })
      );
    }
  }, [qty]);

  return (
    <>
      {itemsPrice > 0 && (
        <ul
          role="list"
          className={classNames(
            orderNumber < ordersNumber ? "border-b" : "",
            "-my-3 divide-y divide-gray-200"
          )}
        >
          {bikeDetails && bikeDetails.details && (
            <li className="py-6 flex">
              <Link href={bikeDetails.image}>
                <a
                  target="_blank"
                  className="flex justify-center w-20 h-12 border border-gray-200 rounded-md"
                >
                  <Image
                    width={738}
                    height={422}
                    src={bikeDetails.image}
                    alt={bikeDetails.title}
                  />
                </a>
              </Link>

              <div className="ml-4 flex-1 flex flex-col font-light">
                <div>
                  <div className="flex justify-between text-base text-gray-900 hover:text-gray-500">
                    <h3>
                      <Link href={bikeDetails.image}>
                        <a target="_blank">{bikeDetails.title}</a>
                      </Link>
                    </h3>
                    <p className="ml-4">{`$${(
                      itemsPrice * qty
                    ).toLocaleString()}`}</p>
                  </div>
                  {bikeDetails &&
                    bikeDetails.details &&
                    bikeDetails.details.map((item, index) => (
                      <p key={index + 1} className="mt-1 text-sm text-gray-500">
                        {item.title}
                      </p>
                    ))}
                </div>
                <div className="flex items-center justify-end text-sm">
                  <label htmlFor={`quantity-${qty}`} className="sr-only">
                    Quantity
                  </label>
                  <select
                    id={`quantity-${qty}`}
                    name={`quantity-${qty}`}
                    defaultValue={qty}
                    onChange={(item) => {
                      setQty(item.target.value);
                    }}
                    className="block cursor-pointer max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>

                  <div className="mx-2 flex">
                    <div
                      onClick={() => {
                        window.localStorage.removeItem(`${orderBikeId}`);
                        setRemove(true);
                      }}
                      className="font-light text-indigo-600 hover:text-indigo-500 cursor-pointer"
                    >
                      Remove
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
      )}
    </>
  );
}

function PromoCode({ redeem, setRedeem }) {
  return (
    <div>
      <label htmlFor="promo-code" className="sr-only">
        Promo Code
      </label>
      <div className="flex border border-gray-300 rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow">
          <input
            type="number"
            name="promo-code"
            id="promo-code"
            className="font-light focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-2 sm:text-sm border-gray-300"
            placeholder="Promo Code"
          />
        </div>
        <div
          onClick={() => setRedeem(true)}
          className="px-4 py-2 cursor-pointer border-l border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100"
        >
          <span>REDEEM</span>
        </div>
      </div>
    </div>
  );
}

function PaymentMethod({ redeem, setRedeem }) {
  const [chooseId, setChooseId] = useState(1);
  useEffect(() => {
    if (chooseId === 2 || chooseId === 3) {
      setRedeem(false);
    }
  }, [chooseId]);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 border-b border-gray-300 my-2 py-2">
        {plans.map((item, index) => (
          <div
            key={index + 1}
            onClick={() => setChooseId(index + 1)}
            className={classNames(
              chooseId === index + 1 ? "border-blue-800" : "border-gray-300",
              index + 1 === 1 ? "col-span-2" : "col-span-1",
              "border-2 cursor-pointer rounded-lg flex flex-col justify-around my-1 bg-white h-28 py-3"
            )}
          >
            <div className="flex justify-center my-0">
              <span className="text-xs sm:text-sm font-normal">
                {item.title}
              </span>
            </div>
            <div className="flex justify-center items-center my-0">
              <span className="text-xs md:text-sm lg:text-xs xl:text-sm font-light text-gray-400 xl:mx-1">
                {item.description}
              </span>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-16 xl:w-20 flex justify-center items-center">
                <Image src={item.srcItem} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {chooseId === 1 && (
        <div className="my-2 sm:my-4">
          <PromoCode redeem={redeem} setRedeem={setRedeem} />
        </div>
      )}
      <div className="my-2">
        <span className="font-light text-xs sm:text-sm">
          {`By clicking "Continue to checkout" I agree to the`}
          <Link href="/terms">
            <a
              target="_blank"
              className="mx-1 text-blue-600 hover:text-blue-400"
            >
              Terms of Use
            </a>
          </Link>
          <a>and have read and understand the</a>
          <Link href="/privacy-policy">
            <a
              target="_blank"
              className="mx-1 text-blue-600 hover:text-blue-400"
            >
              Privacy Policy.
            </a>
          </Link>
        </span>
      </div>
    </>
  );
}

export default function ShoppingCart() {
  const [ordersNumber, setOrdersNumber] = useState(0);
  const [remove, setRemove] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [redeem, setRedeem] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { data } = state.userPanel;
  let { isAuth } = state.auth;
  let { getUserBikesData } = state.nsd;

  useEffect(() => {
    if (isAuth) {
      dispatch(userPanelPending());
    }
  }, [isAuth]);

  useEffect(() => {
    if (isAuth && data) {
      dispatch(
        getMacByOrderIdPending({
          token: CookiesService.get("access_token"),
          order_bike_id: data.order_bike_default_id,
        })
      );
    }
  }, [isAuth, data]);

  useEffect(() => {
    if (isAuth && data) {
      dispatch(
        getUserBikesPending({
          token: CookiesService.get("access_token"),
        })
      );
    }
  }, [isAuth, data, remove]);

  useEffect(() => {
    let number = 0;
    let total = 0;
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
          let prices = 0;
          bikeDetails.details.map((ev) => (prices = prices + ev.price));
        }
        total =
          bikeDetails && bikeDetails.qty
            ? total + bikeDetails.qty * prices
            : total;
      });
    }
    setTotalPrice(total);
    setOrdersNumber(number);
    setRemove(false);
  }, [getUserBikesData]);

  return (
    <div className="flex flex-col py-2 sm:py-2">
      <div className="sm:py-2 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <span className="text-lg font-light text-gray-900">
            Shopping cart
          </span>
        </div>
        {getUserBikesData || !remove ? (
          <>
            {ordersNumber > 0 ? (
              <div className="mt-4">
                <div className="flow-root">
                  {getUserBikesData &&
                    getUserBikesData[0] &&
                    getUserBikesData.map((item, index) => (
                      <ShoppingCartItem
                        orderNumber={index + 1}
                        ordersNumber={ordersNumber}
                        key={index + 1}
                        orderBikeId={item.order_bike_id}
                        totalPrice={totalPrice}
                        setTotalPrice={setTotalPrice}
                        setRemove={setRemove}
                        remove={remove}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <div className="w-full flex justify-center items-center my-4">
                <span className="font-inter font-light text-xs sm:text-sm">
                  Your cart is empty.
                </span>
              </div>
            )}
          </>
        ) : (
          <div
            className="flex justify-center items-center h-full w-full"
            style={{ height: "30vh" }}
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

      <div className="border-t border-gray-200 py-2 px-4 sm:px-6">
        <div className="flex justify-between text-sm sm:text-base font-light text-gray-900 py-2">
          <p>Shipping & Delivery</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between text-sm sm:text-base font-light text-gray-900 py-2">
          <span className="flex items-center">
            VAT & Duties
            <Link href="/help-center/topic/19/taxesdutiesvat">
              <a
                target="_blank"
                className="text-xs text-blue-600 hover:text-blue-400 mx-1"
              >
                (Check more details)
              </a>
            </Link>
          </span>
          <p>$0</p>
        </div>
        <div className="flex justify-between text-sm sm:text-base font-light text-gray-900 py-2">
          <p>GRAND TOTAL</p>
          <p>{`$${totalPrice.toLocaleString()}`}</p>
        </div>
        {redeem && (
          <div className="flex justify-between text-sm sm:text-base font-light text-nireekaGreen py-2">
            <p>PROMO CODE</p>
            <p>-$262</p>
          </div>
        )}
        {redeem && (
          <div className="flex justify-between text-sm sm:text-base font-light text-gray-900 py-2">
            <p>TOTAL PRICE AFTER DISCOUNT</p>
            <p>{`$${(totalPrice - 262).toLocaleString()}`}</p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 py-1 sm:py-2 px-4 sm:px-6">
        <PaymentMethod redeem={redeem} setRedeem={setRedeem} />
      </div>

      <div className="flex justify-center items-center">
        <div className="my-1 sm:my-2 mx-2 py-2 flex justify-center items-center cursor-pointer w-full border rounded-lg border-nireekaGreen text-nireekaGreen hover:text-white hover:bg-nireekaGreen">
          <span className="font0inter font-light text-xs sm:text-sm">
            Checkout
          </span>
        </div>
      </div>
    </div>
  );
}
