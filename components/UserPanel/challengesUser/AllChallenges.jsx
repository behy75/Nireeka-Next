import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  challengesListPending,
  claimChallengesPending,
  leaderBoardPending,
  removeChallengesPending,
  userPanelPending,
} from "../../../app/userPanelSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Challenge({
  title,
  lastItem,
  point,
  value,
  id,
  isClaim,
  typeId,
  setClaimed,
  setRemoved,
  index,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { challengesListData } = state.userPanel;
  let { getStatusByMacIdData } = state.nsd;
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeId === 1) {
      if (
        value < getStatusByMacIdData.odo ||
        value === getStatusByMacIdData.odo
      ) {
        setDone(true);
      }
      // ODO

      setProgress(getStatusByMacIdData.odo / value);
    }
    if (typeId === 2) {
      // Max Speed
      if (
        value < getStatusByMacIdData.max_speed_ever ||
        value === getStatusByMacIdData.max_speed_ever
      ) {
        setDone(true);
      }
      setProgress(getStatusByMacIdData.max_speed_ever / value);
    }
  }, [getStatusByMacIdData, typeId]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden flex justify-center items-center">
            <div
              className={
                challengesListData &&
                challengesListData.length &&
                index < challengesListData.length
                  ? "w-900 border-b border-gray-200"
                  : "w-900"
              }
            >
              <div className="grid grid-cols-12 gap-1 w-full">
                <div className="flex items-center col-span-12 sm:col-span-6 py-1 sm:py-4 text-sm font-light text-gray-900">
                  {title}
                </div>
                <div className="flex items-center col-span-4 sm:col-span-2 py-1 sm:py-4 text-sm text-gray-500">
                  {point}
                </div>
                <div className="flex col-span-8 sm:col-span-4 py-1 sm:py-4 text-sm text-gray-500">
                  <div className="w-1/2 flex items-center justify-center">
                    {!isClaim ? (
                      <div
                        className={classNames(
                          progress < 0.33
                            ? "text-center"
                            : progress < 0.5
                            ? "text-right pr-2"
                            : "text-left",
                          progress < 1 ? "py-2" : "",
                          "relative w-full mx-2 border rounded-lg font-light"
                        )}
                      >
                        {progress > 1 || progress === 1 ? (
                          <span
                            onClick={() => {
                              dispatch(claimChallengesPending(id));
                              dispatch(challengesListPending());
                              dispatch(leaderBoardPending());
                              dispatch(userPanelPending());
                              setClaimed(true);
                            }}
                            className="text-white py-2 bg-nireekaGreen hover:bg-white hover:text-nireekaGreen cursor-pointer rounded-lg flex items-center justify-center"
                          >
                            Claim
                          </span>
                        ) : (
                          <span
                            style={{
                              width: `${
                                progress < 1 ? (progress * 100).toFixed(1) : 100
                              }%`,
                            }}
                            className={classNames(
                              done
                                ? "hover:bg-white hover:text-nireekaGreen cursor-pointer"
                                : "rounded-r-none",
                              progress > 1 || progress === 1
                                ? "justify-center"
                                : "justify-start pl-2",
                              "absolute top-0 left-0 h-full text-white bg-nireekaGreen rounded-lg flex items-center"
                            )}
                          >
                            {(progress > 0.5 || progress === 0.5) &&
                              `${(progress * 100).toFixed(1)}%`}
                          </span>
                        )}
                        {progress < 1 && (
                          <span className="z-50">
                            {`${(progress * 100).toFixed(1)}%`}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="w-full py-2 text-center mx-2 border rounded-lg bg-nireekaGreen font-light text-white">
                        Claimed
                      </div>
                    )}
                  </div>
                  <div className="w-1/2 flex items-center">
                    <span
                      onClick={() => {
                        dispatch(removeChallengesPending(id));
                        dispatch(challengesListPending());
                        dispatch(leaderBoardPending());
                        setRemoved(true);
                        // dispatch(challengesListPending());
                      }}
                      className={classNames(
                        (progress > 1 || progress === 1) && isClaim
                          ? "block"
                          : "hidden",
                        "w-full py-2 text-center mx-2 rounded-lg text-gray-500 hover:text-gray-700  font-light cursor-pointer"
                      )}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AllChallenges() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let { challengesListData } = state.userPanel;
  let { getMacByOrderIdData } = state.nsd;

  const [claimed, setClaimed] = useState(false);
  const [removed, setRemoved] = useState(false);
  useEffect(() => {
    if (claimed || removed) {
      dispatch(challengesListPending());
      setClaimed(false);
      setRemoved(false);
    }
  }, [claimed, removed]);
  console.log("challengesListData", getMacByOrderIdData);
  return (
    <div className="w-full bg-white rounded-3xl my-5 shadow-sm border border-gray-200">
      <div className="py-4">
        {challengesListData && challengesListData[0] && getMacByOrderIdData ? (
          challengesListData.map((item, index) => (
            <div key={item.id}>
              <Challenge
                index={index + 1}
                id={item.id}
                title={item.title}
                lastItem={false}
                point={item.score}
                isClaim={item.is_claim}
                typeId={item.type_id}
                value={item.value}
                setClaimed={setClaimed}
                setRemoved={setRemoved}
              />
            </div>
          ))
        ) : (
          <div className="w-full my-5 flex flex-col justify-center items-center">
            <div className="my-2 font-light text-lg ml-6 flex justify-center items-center">
              {`There is no challenge for you right now!`}
            </div>

            {/* <p className="my-2 font-normal text-xs sm:text-sm lg:text-lg xl:text-xl ml-6 flex justify-center items-center">
              Order yours from
              <Link href="/">
                <a className="ml-1 font-normal text-xs sm:text-sm lg:text-lg xl:text-xl text-blue-400 hover:text-blue-600 cursor-pointer">
                  HERE!
                </a>
              </Link>
            </p> */}
          </div>
        )}
      </div>
    </div>
  );
}
