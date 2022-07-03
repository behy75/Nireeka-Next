import React, { useEffect } from "react";
import Account from "./Account";
import Health from "./Health";
import Perfrmance from "./Perfrmance";
import TripRecord from "./TripRecord";
import Welcome from "./Welcome";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { leaderBoardPending } from "../../../app/userPanelSlice";
import LeaderBoard from "../../Atoms/LeaderBoard";

export default function Activity({ setDefaultBikeClick }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { data, leaderBoardData } = state.userPanel;
  let { isAuth } = state.auth;

  useEffect(() => {
    if (isAuth) {
      dispatch(leaderBoardPending());
    }
  }, [isAuth]);

  if (!data || !leaderBoardData) {
    return (
      <div
        style={{ height: "100vh" }}
        className="relative z-0 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
      >
        <Welcome />
        <div
          className="bg-bgUserPanel flex justify-center items-center h-full w-full"
          style={{ height: "60vh" }}
        >
          <ReactLoading
            type="spin"
            color="rgb(209, 213, 219)"
            height={80}
            width={80}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="relative z-0 xl:flex overflow-hidden bg-bgUserPanel rounded-3xl sm:rounded-none"
    >
      <div className="xl:w-2/3 mx-2">
        <Welcome />
        <div className="w-full bg-gray-800 rounded-t-3xl xl:rounded-3xl">
          <Account />
          <Perfrmance setDefaultBikeClick={setDefaultBikeClick} />
          <Health />
        </div>
      </div>
      <div className="h-full xl:w-1/3 mx-2 xl:ml-2">
        <div className="bg-gray-800 py-4 px-2 w-full shadowe xl:rounded-tl-3xl">
          <TripRecord />
          <LeaderBoard
            titleTextColor="text-white"
            nameTextColor="text-white"
            bikeTextColor="text-gray-400"
            pointTextColor="text-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
