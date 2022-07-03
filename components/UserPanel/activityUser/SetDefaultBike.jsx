import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMacByOrderIdPending,
  getStatusByMacIdPending,
  getUserBikesPending,
} from "../../../app/nsdSlice";
import {
  setDefaultOrderPending,
  userPanelPending,
} from "../../../app/userPanelSlice";
import GreenTick from "../../../public/images/green_tick.png";
import CookiesService from "../../../services/CookiesService";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function SetDefaultBike({ setDefaultBikeClick }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { isAuth } = state.auth;
  let { getUserBikesData, getMacByOrderIdData } = state.nsd;
  let { data, setDefaultOrderReqSuccess } = state.userPanel;

  // useEffect(() => {
  //   if (setDefaultOrderReqSuccess) {
  //     dispatch(userPanelPending());
  //   }
  // }, [setDefaultOrderReqSuccess]);

  // useEffect(() => {
  //   if (isAuth && data) {
  //     dispatch(
  //       getMacByOrderIdPending({
  //         token: CookiesService.get("access_token"),
  //         order_bike_id: data.order_bike_default_id,
  //       })
  //     );
  //   }
  // }, [isAuth, data]);

  // useEffect(() => {
  //   if (isAuth && data) {
  //     dispatch(
  //       getUserBikesPending({
  //         token: CookiesService.get("access_token"),
  //       })
  //     );
  //   }
  // }, [isAuth, data]);

  // useEffect(() => {
  //   if (isAuth && getMacByOrderIdData) {
  //     dispatch(
  //       getStatusByMacIdPending({
  //         token: CookiesService.get("access_token"),
  //         mac_id: getMacByOrderIdData,
  //       })
  //     );
  //   }
  // }, [isAuth, getMacByOrderIdData]);

  return (
    <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      {/* <div className="flex items-center">
        <span className="px-2 text-gray-600">Set Default Bike</span>
      </div> */}
      {getUserBikesData.map((item) => (
        <div
          onClick={() => {
            dispatch(setDefaultOrderPending({ orderId: item.order_bike_id }));
            setDefaultBikeClick(true);
          }}
          key={item.order_bike_id}
          className="py-1"
        >
          <Menu.Item>
            <div
              style={{ backgroundColor: `${item.color}` }}
              className={classNames(
                item.color == "#FFFFFF" ? "text-gray-300" : "text-white",
                "flex px-4 py-2 text-sm cursor-pointer"
              )}
            >
              <div>{item.name}</div>
              {item.order_bike_id === data.order_bike_default_id && (
                <div className="w-5 mx-2 flex justify-center inems-center">
                  <Image src={GreenTick} alt="green-tick" />
                </div>
              )}
            </div>
          </Menu.Item>
        </div>
      ))}
    </Menu.Items>
  );
}
