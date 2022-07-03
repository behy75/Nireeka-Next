import React from "react";
import { useDispatch } from "react-redux";
import { setHeight } from "../../app/informationSlice";

export default function Height() {
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="height" className="sr-only">
        Height
      </label>
      <input
        id="height"
        name="height"
        type="number"
        autoComplete="height"
        onChange={(data) => dispatch(setHeight(data.target.value))}
        className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Height"
      />
    </div>
  );
}
