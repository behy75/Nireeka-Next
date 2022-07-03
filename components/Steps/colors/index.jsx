import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../../../app/configuratorSlice";

const standardColors = [
  { index: 1, color: "bg-white" },
  {
    index: 2,
    color: "bg-red-600",
  },
  {
    index: 3,
    color: "bg-gray-700",
  },
];

const pearlizedColors = [
  { index: 4, color: "bg-pink-300" },
  {
    index: 5,
    color: "bg-blue-400",
  },
];

function ButtonColor({ paint }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center p-4 m-3 border border-gray-600 text-base font-light rounded-full shadow-sm text-gray-700 hover:text-white ${paint} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700`}
    ></button>
  );
}

function Colors() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { color } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE COLORS
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">
          Standard Colors ($0)
        </p>
        {standardColors.map((item) => (
          <g key={item.index} onClick={() => dispatch(setColor(item.index))}>
            <ButtonColor paint={item.color} />
          </g>
        ))}
      </div>
      <div className="mt-4 mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">
          Pearlized Colors ($199)
        </p>
        {pearlizedColors.map((item) => (
          <g key={item.index} onClick={() => dispatch(setColor(item.index))}>
            <ButtonColor paint={item.color} />
          </g>
        ))}
      </div>
      <div className="flex">
        <p className="ml-2 text-sm font-light text-gray-500">
          If you are not sure which color suits your style, please check our
          <div className="text-sm mx-1 font-light text-blue-600 border-b border-gray-300 hover:border-blue-600">
            <Link target={"_blank"} href="//www.instagram.com/nireeka.official">
              Instagram
            </Link>
          </div>
          page for reference.
        </p>
      </div>
    </>
  );
}

export default Colors;
