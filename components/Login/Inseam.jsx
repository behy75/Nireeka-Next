import React from "react";
import { useDispatch } from "react-redux";
import { setInseam } from "../../app/informationSlice";

export default function Inseam() {
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="inseam" className="sr-only">
        Inseam
      </label>
      <input
        id="inseam"
        name="inseam"
        type="number"
        autoComplete="inseam"
        onChange={(data) => dispatch(setInseam(data.target.value))}
        className="appearance-none font-light relative block w-full px-3 py-2 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Inseam"
      />
    </div>
  );
}
