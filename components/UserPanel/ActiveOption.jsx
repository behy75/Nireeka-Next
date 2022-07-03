import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Activity from "./activityUser/Activity";
import Affiliate from "./affiliateUser/Affiliate";
import Challenges from "./challengesUser/Challenges";
import Navigations from "./navigationsUser/Navigations";
import Orders from "./ordersUser/Orders";
import Payments from "./paymentsUser/payments";
import Reports from "./reportsUser/Reports";
import Setting from "./Setting";
import Support from "./supportUser/Support";
import Update from "./updateUser/Update";

export default function ActiveOption({ setDefaultBikeClick }) {
  const router = useRouter();
  const { pathname } = useRouter();

  const state = useSelector((state) => state);
  let { activeItem } = state.userPanel;
  let { isAuth } = state.auth;

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth, router]);

  return (
    <div className="bg-bgUserPanel">
      {activeItem === 1 && (
        <Activity setDefaultBikeClick={setDefaultBikeClick} />
      )}
      {activeItem === 2 && <Orders />}
      {activeItem === 3 && <Setting />}
      {activeItem === 4 && <Reports />}
      {activeItem === 5 && <Navigations />}
      {activeItem === 6 && <Challenges />}
      {activeItem === 7 && <Payments />}
      {activeItem === 8 && <Affiliate />}
      {activeItem === 9 && <Support />}
      {activeItem === 10 && <Update />}
    </div>
  );
}
