import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaderBoardPending } from "../../../app/userPanelSlice";
import LoadingNireeka from "../../Atoms/LoadingNireeka";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function People({
  name,
  point,
  bikeName,
  bikeColor,
  onlineUser,
  profile,
  lastSeen,
}) {
  return (
    <div className="flex space-x-3 h-12">
      <div className="relative h-full flex justify-center items-center">
        <img className="w-8 h-8 rounded-full" src={profile} alt="" />
        {lastSeen !== 0 && onlineUser && (
          <div
            className={
              onlineUser
                ? "absolute bottom-2 right-0 bg-green-500 ml-1 mt-1 p-1 rounded-full"
                : "absolute"
            }
          ></div>
        )}
        {lastSeen !== 0 && !onlineUser && (
          <span className="absolute bottom-1 -right-2 px-1 bg-green-100 rounded-full text-xs font-light font-inter text-nireekaGreen">
            {lastSeen}
          </span>
        )}
      </div>
      <div className="flex justify-start items-center min-w-0 w-3/5">
        <div className="focus:outline-none">
          <a>
            <p className="text-sm font-light text-white font-dosis">{name}</p>
          </a>
          <div>
            <div className="flex justify-center items-center">
              <p className="text-sm font-light font-dosis text-gray-400 truncate">
                {bikeName}
              </p>
              <p
                className="ml-1 mt-1 p-1 rounded-full"
                style={{ backgroundColor: `${bikeColor}` }}
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-w-0 w-1/5">
        <div className="focus:outline-none">
          <p className="text-sm font-light text-gray-300 font-dosis">
            {point} points
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LeaderBoard() {
  const [popUp, setPopUp] = useState(true);
  const state = useSelector((state) => state);
  let { leaderBoardData } = state.userPanel;

  return (
    <div>
      <div className="py-3 md-10 md:mt-6">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-light text-white">Leaderboard</h1>
          </div>

          <div>
            {popUp && (
              <h1
                onClick={() => setPopUp(false)}
                className="font-light text-xl text-white cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </h1>
            )}
            {!popUp && (
              <h1
                onClick={() => setPopUp(true)}
                className="font-light text-xl text-white cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </h1>
            )}
          </div>
        </div>
      </div>
      {popUp && (
        <div className="rounded-2xl p-2">
          <ul role="list" className="divide-y divide-gray-200">
            {leaderBoardData ? (
              <div>
                {leaderBoardData.map((item, index) => (
                  <li
                    key={index + 1}
                    className={
                      leaderBoardData.length > index + 1
                        ? "py-2 border-b border-gray-700"
                        : "py-2"
                    }
                  >
                    <People
                      name={item.display_name}
                      point={item.points}
                      bikeName={item.bike[0].name}
                      bikeColor={item.bike[0].color}
                      onlineUser={item.is_online}
                      lastSeen={item.last_seen}
                      profile={`${item.avatar}`}
                    />
                  </li>
                ))}
              </div>
            ) : (
              <div className="font-light text-center text-2xl flex flex-col justify-center items-center w-full p-2 mt-3 rounded-3xl">
                <LoadingNireeka
                  colorLoading={"text-gray-700"}
                  widthLoading={"w-8"}
                  heightLoading={"h-8"}
                  borderLoading={"border-4"}
                />
                <div className="text-white">is Loading ...</div>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
