import React from "react";

function Items({ title, id, value, addedValue }) {
  return (
    <div className="my-2">
      <div className="-my-2">
        <span className="text-xs sm:text-sm font-light font-inter">
          {title}
        </span>
      </div>
      <div className="flex items-center">
        <div className="relative flex my-2 w-60 h-375 bg-gray-300 rounded-l-md rounded-r-md">
          <div className="absolute left-0 w-full h-full flex items-center">
            <div
              style={{ width: `${value * 10}%` }}
              className={
                value === 10
                  ? "h-full bg-blue-400 rounded-l-md rounded-r-md"
                  : "h-full bg-blue-400 rounded-l-md"
              }
            ></div>
            {addedValue > 0 && <div className="w-125 h-3 bg-gray-400"></div>}
            {addedValue > 0 && (
              <div
                style={{ width: `${addedValue * 10}%` }}
                className="w-10 h-full bg-green-400"
              ></div>
            )}
          </div>
        </div>
        <div className="mx-2">
          <span className="text-lg sm:text-xl font-light font-inter">
            {value + addedValue}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ConfiguredBikeDetails() {
  return (
    <div className="mx-10 my-4">
      <div className="xl:my-20">
        <Items addedValue={3} value={2} id={1} title="Power (250 W)" />
        <Items addedValue={0} value={10} id={2} title="Max Speed (22 mph)" />
        <Items addedValue={2} value={4} id={3} title="Acceleration (120 nm)" />
        <Items addedValue={0} value={6} id={4} title="Suspendion" />
        <Items addedValue={0} value={7} id={5} title="Range (22 Miles)" />
      </div>
    </div>
  );
}
