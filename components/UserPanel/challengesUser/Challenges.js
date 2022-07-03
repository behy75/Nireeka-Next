import React, { useEffect } from "react";
import AllChallenges from "./AllChallenges";
import ChallengesHover from "./ChallengesHover";
import ChallengesMSG from "./ChallengesMSG";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { challengesListPending } from "../../../app/userPanelSlice";

export default function Chalenges() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { challengesListData, challengesListMessage } = state.userPanel;

  let { isAuth } = state.auth;

  useEffect(() => {
    if (isAuth) {
      dispatch(challengesListPending());
    }
  }, [isAuth]);

  if (!challengesListMessage) {
    return (
      <div style={{ height: "100vh" }} className="mx-2">
        <ChallengesMSG />
        <div
          className="bg-bgUserPanel flex justify-center items-center"
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
      style={{ height: "100vh" }}
      className="relative z-0 xl:flex md:pr-4 xl:pr-6 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
    >
      <div className="xl:w-2/3 mx-2 md:mr-7">
        <div
        // className="lg:overflow-y-scroll lg:overflow-x-hidden lg:w-full lg:pr-6"
        // style={{ height: "calc(130vh - 300px)" }}
        >
          <ChallengesMSG />
          <AllChallenges />
        </div>
      </div>
      {challengesListData && (
        <div className="hidden fixed right-0 xl:flex xl:flex-col h-full xl:w-1/4 flex-shrink-0 overflow-y-auto mx-4 md:mr-7 xl:mr-0">
          <div className="bg-white py-4 px-2 w-full h-full shadowe sm:px-10 rounded-tl-3xl border border-r-0 border-gray-200">
            <ChallengesHover />
          </div>
        </div>
      )}
    </div>
  );
}
