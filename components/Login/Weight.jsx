import React from "react";
import { useDispatch } from "react-redux";
import { setWeight } from "../../app/informationSlice";

export default function Weight() {
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="weight" className="sr-only">
        Weight
      </label>
      <input
        id="weight"
        name="weight"
        type="number"
        onChange={(data) => dispatch(setWeight(data.target.value))}
        autoComplete="weight"
        className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Weight"
      />
    </div>
  );
}
