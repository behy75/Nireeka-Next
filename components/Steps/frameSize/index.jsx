import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSize } from "../../../app/configuratorSlice";

const sizes = [
  {
    index: 1,
    inch: `5'5" - 6'1"`,
    cm: "165cm - 185cm",
    size: `17.5" (M (17.5"))`,
    name: "M",
  },
  {
    index: 2,
    inch: `6'1" - 6'8"`,
    cm: "185cm - 210cm",
    size: `19" (L (19"))`,
    name: "L",
  },
  {
    index: 3,
    inch: `6'8" - 7'5"`,
    cm: "210cm - 235cm",
    size: `20.5" (XL (20.5"))`,
    name: "XL",
  },
];

function ButtonCharacteristics({ description, backColor, textColor }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-5 py-2 mx-2 border border-gray-600 text-base font-light rounded-full shadow-sm text-${textColor} hover:text-white bg-${backColor} hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700`}
    >
      {description}
    </button>
  );
}

function SizeTable({ index, inch, cm, size }) {
  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-2 py-2 whitespace-nowrap text-sm font-light text-gray-900">
        {inch}
      </td>
      <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
        {cm}
      </td>
      <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
        {size}
      </td>
    </tr>
  );
}

function FrameSize() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { size } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE FRAME SIZES
      </label>
      <div className="mt-4 flex justify-around items-center">
        {sizes.map((item) => (
          <g key={item.index} onClick={() => dispatch(setSize(item.index))}>
            <ButtonCharacteristics
              textColor={size === item.index ? "white" : "black"}
              backColor={size === item.index ? "black" : "white"}
              description={item.name}
            />
          </g>
        ))}
      </div>
      <div className="mt-2 mb-2">
        <h2 className="text-sm text-gray-500">
          if youre not sure about the size, check the table below for a
          reference.
        </h2>
      </div>
      <div className="flex flex-col mt-3 mb-3">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody>
                  {sizes.map((item) => (
                    <SizeTable
                      key={item.index}
                      index={item.index}
                      inch={item.inch}
                      cm={item.cm}
                      size={item.size}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrameSize;
