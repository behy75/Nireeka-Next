import React from "react";
import { useDispatch } from "react-redux";
import { setGender } from "../../app/informationSlice";

export default function Gender() {
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="gender" className="sr-only">
        Gender
      </label>
      <select
        id="gender"
        name="gender"
        className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        onChange={(data) => dispatch(setGender(data ? data.label : null))}
      >
        <option>male</option>
        <option>female</option>
        {/* <option>other</option> */}
      </select>
    </div>
  );
}
