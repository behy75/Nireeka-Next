// const daysKm = [1232, 1312, 1999, 234, 1233, 0, 2003];
import PadLock from "../../../public/images/padlock.png";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const daysKm = [
  {
    id: 1,
    day: "Su",
    km: "0",
    ecoValue: "0",
    sportValue: "0",
    comfortValue: "0",
    naturalValue: "0",
  },
  {
    id: 2,
    day: "Mo",
    km: "0",
    ecoValue: "0",
    sportValue: "0",
    comfortValue: "0",
    naturalValue: "0",
  },
  {
    id: 3,
    day: "Tu",
    km: "0",
    ecoValue: "0",
    sportValue: "0",
    comfortValue: "0",
    naturalValue: "0",
  },
  {
    id: 4,
    day: "We",
    km: "0",
    ecoValue: "0",
    sportValue: "0",
    comfortValue: "0",
    naturalValue: "0",
  },
  {
    id: 5,
    day: "Th",
    km: "0",
    ecoValue: "0",
    sportValue: "0",
    comfortValue: "0",
    naturalValue: "0",
  },
  {
    id: 6,
    day: "Fr",
    km: "0",
    ecoValue: "0",
    sportValue: "0",
    comfortValue: "0",
    naturalValue: "0",
  },
  {
    id: 7,
    day: "Sa",
    km: "1",
    ecoValue: "1",
    sportValue: "1",
    comfortValue: "1",
    naturalValue: "1",
  },
];

function MoreDetaild({ ecoValue, sportValue, comfortValue, naturalValue, id }) {
  return (
    <div className="relative w-20 group z-50">
      <div
        className={
          id === 7
            ? "absolute right-10 top-0 hover:w-20 invisible group-hover:visible bg-green-100 z-50"
            : "absolute top-0 hover:w-20 invisible group-hover:visible bg-green-100 z-50"
        }
      >
        <div
          className={
            id === 1
              ? `absolute left-7 flex z-10 w-32 -mt-1 text-sm leading-tight bg-white rounded-xl transform -translate-x-1/2 -translate-y-full shadow-lg`
              : `absolute flex z-10 w-32 -mt-1 text-sm leading-tight bg-white rounded-xl transform -translate-x-1/2 -translate-y-full shadow-lg`
          }
        >
          <div className="w-1/2 p-2 rounded-l-lg">
            <div className="flex flex-col justify-center items-center pb-2">
              <div className="text-xs">Eco</div>
              <div className="text-xl font-light">{ecoValue}</div>
            </div>
            <div className="flex flex-col justify-center items-center pt-2">
              <div className="text-xs">Sport</div>
              <div className="text-xl font-light">{sportValue}</div>
            </div>
          </div>
          <div className="w-1/2 p-2 bg-gray-200 rounded-r-lg">
            <div className="flex flex-col justify-center items-center pb-2">
              <div className="text-xs">Comfort</div>
              <div className="text-xl font-light">{comfortValue}</div>
            </div>
            <div className="flex flex-col justify-center items-center pt-2">
              <div className="text-xs">Natural</div>
              <div className="text-xl font-light">{naturalValue}</div>
            </div>
          </div>
        </div>
        <svg
          className={
            id === 7
              ? "absolute left-9 z-0 w-10 h-20 text-gray-200 transform -translate-x-4 -translate-y-6 fill-current stroke-current"
              : "absolute z-0 w-10 h-20 text-white transform -translate-x-4 -translate-y-6 fill-current stroke-current"
          }
          width="32"
          height="32"
        >
          <rect x="12" y="-10" width="24" height="24" transform="rotate(45)" />
        </svg>
        {/* <div className="absolute -right-4 top-1 w-6 h-6 border-2 rounded-full"></div> */}
      </div>
    </div>
  );
}

function Day({
  km,
  id,
  day,
  percent,
  ecoValue,
  sportValue,
  comfortValue,
  naturalValue,
}) {
  const state = useSelector((state) => state);
  let { getMacByOrderIdData } = state.nsd;

  return (
    <div className="relative flex flex-col items-center flex-grow pb-5 group">
      <span className="absolute top-0 -mt-6 text-xs font-light text-gray-200 group-hover:block">
        {km}
      </span>
      <div
        className={
          percent !== 0
            ? `relative flex justify-center w-2 rounded-t-full bg-gray-400`
            : `relative flex justify-center w-2 rounded-full bg-gray-400`
        }
        style={{ height: `${10 - percent / 10}rem` }}
      >
        {false && getMacByOrderIdData && (
          <MoreDetaild
            ecoValue={ecoValue}
            sportValue={sportValue}
            comfortValue={comfortValue}
            naturalValue={naturalValue}
            id={id}
          />
        )}
      </div>
      <div
        className={
          percent !== 100
            ? `relative flex justify-center w-2 rounded-b-full bg-white z-50`
            : `relative flex justify-center w-2 rounded-full bg-white z-50`
        }
        style={{ height: `${percent / 10}rem` }}
      ></div>
      <span className="absolute bottom-0 text-xs font-light text-gray-200">
        {day}
      </span>
    </div>
  );
}

export default function TripRecord() {
  // let maxKm = Math.max(...daysKm.map((item) => item));
  let maxKm = Math.max(...daysKm.map((item) => item.km));
  const [popUp, setPopUp] = useState(true);
  const [lockSize, setLockSize] = useState(["w-20", "h-20"]);

  return (
    <div className="w-full">
      <div className="py-3">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-light text-white">Trip Record</p>
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
              >  <svg
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
        <div className="relative flex flex-col items-center w-full pb-6 bg-gray-700 rounded-2xl shadow-2xl">
          {/* <div
            onMouseEnter={() => setLockSize(["w-24", "h-24"])}
            onMouseLeave={() => setLockSize(["w-20", "h-20"])}
            className="flex justify-center items-center absolute z-50 w-full h-full shadow-2xl rounded-3xl bg-gray-400 cursor-pointer opacity-80"
          >
            <div className={`${lockSize[0]} ${lockSize[1]} relative`}>
              <Image layout="fill" src={PadLock} alt="lock" />
            </div>
          </div> */}
          <div className="flex justify-between items-center mb-4 mt-2 w-full">
            <p className="hover:text-white font-light text-gray-400 ml-4 cursor-pointer hover:underline">
              previous
            </p>
            <p className="hover:text-white font-light text-gray-400 mr-4 cursor-pointer hover:underline">
              next
            </p>
          </div>
          <div className="flex items-end flex-grow w-full mt-6 space-x-2 sm:space-x-3">
            {daysKm.map((item) => (
              <Day
                key={item.id}
                id={item.id}
                km={item.km}
                day={`${item.day}`}
                percent={(item.km / maxKm) * 100}
                ecoValue={item.ecoValue}
                sportValue={item.sportValue}
                comfortValue={item.comfortValue}
                naturalValue={item.naturalValue}
              />
            ))}
            {/* <Day km={daysKm[0]} day="Su" percent={(daysKm[0] / maxKm) * 100} />
          <Day km={daysKm[1]} day="Mo" percent={(daysKm[1] / maxKm) * 100} />
          <Day km={daysKm[2]} day="Tu" percent={(daysKm[2] / maxKm) * 100} />
          <Day km={daysKm[3]} day="We" percent={(daysKm[3] / maxKm) * 100} />
          <Day km={daysKm[4]} day="Th" percent={(daysKm[4] / maxKm) * 100} />
          <Day km={daysKm[5]} day="Fr" percent={(daysKm[5] / maxKm) * 100} />
          <Day km={daysKm[6]} day="Sa" percent={(daysKm[6] / maxKm) * 100} /> */}
          </div>
        </div>
      )}
    </div>
  );
}
