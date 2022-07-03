import React from "react";
import { useSelector } from "react-redux";

export default function Welcome() {
  const state = useSelector((state) => state);
  let { data } = state.userPanel;
  return (
    <div className="flex justify-start mt-4 mb-2">
      <div className="max-w-7xl px-1 sm:px-2 md:px-4">
        <h1 className="text-lg sm:texy-xl md:text-3xl font-light text-gray-600 font-body">
          Welcome back, {data ? `${data.name} ${data.last_name}` : "..."}!
        </h1>
        <h3 className="font-dosis text-sm font-light text-gray-600 font-body">
          Your Account at a glance
        </h3>
      </div>
    </div>
  );
}
