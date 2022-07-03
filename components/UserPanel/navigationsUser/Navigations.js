import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocByMacPending } from "../../../app/nsdSlice";
import CookiesService from "../../../services/CookiesService";
import Marker from "./Marker";
import NavigationMSG from "./NavigationMSG";

export default function Navigations() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { getMacByOrderIdData } = state.nsd;
  let { isAuth } = state.auth;
  useEffect(() => {
    if (isAuth && getMacByOrderIdData) {
      dispatch(
        getLocByMacPending({
          token: CookiesService.get("access_token"),
          mac_id: getMacByOrderIdData,
        })
      );
    }
  }, [isAuth && getMacByOrderIdData]);

  return (
    <div className="relative h-1500 z-0 xl:flex md:pr-4 xl:pr-6 lg:overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none">
      <div className="w-full h-full">
        <div className="mx-2 md:mx-0">
          <NavigationMSG />
          <Marker />
        </div>
      </div>
    </div>
  );
}
