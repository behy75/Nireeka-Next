import Link from "next/link";
import React from "react";
import { REFUND_POLICY } from "./data";

function RrPolicy() {
  return (
    <div>
      <div className=" flex flex-wrap w-full px-1 py-5 mx-auto lg:px-4 lg:w-9/12 ">
        <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
          <div className="w-full mx-2 border-b ">
            <h3 className="font-light text-3xl text-gray-600 py-4">
              {REFUND_POLICY.name}
            </h3>
          </div>
        </div>
        {REFUND_POLICY.RETURNPOLICY.map((item) => {
          return (
            <div
              className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
              key={item.id}
            >
              <div className="w-full mx-2 ">
                <p className="pb-4 text-xl font-light text-gray-700">
                  {item.name}:
                </p>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_1}
                  </p>
                </div>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_2}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {REFUND_POLICY.RETURNSPROCESS.map((item) => {
          return (
            <div
              className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
              key={item.id}
            >
              <div className="w-full mx-2 ">
                <p className="pb-4 text-xl font-light text-gray-700">
                  {item.name}:
                </p>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="font-light text-gray-500 font-dosis text-lg">
                    {`To return an item, place the item securely in its `}
                    <span className="text-red-400 font-dosis text-lg">
                      {`original packaging`}
                    </span>{" "}
                    {` or `}
                    <span className="text-red-400 font-dosis text-lg">
                      {`an identical package `}
                    </span>
                    {`as the original, and mail your return to an address provided
                to you after creating a`}
                    <Link href="/support/tickets/new" passHref>
                      <a className="text-blue-500 font-light font-dosis text-lg hover:text-customColorNIR">
                        {` new ticket`}
                      </a>
                    </Link>
                    .
                  </p>
                </div>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_2}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {REFUND_POLICY.REFUNDS.map((item) => {
          return (
            <div
              className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
              key={item.id}
            >
              <div className="w-full mx-2 ">
                <p className="pb-4 text-xl font-light text-gray-700">
                  {item.name}:
                </p>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_1}
                  </p>
                </div>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_2}
                  </p>
                </div>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_3}
                  </p>
                </div>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_4}
                  </p>
                </div>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_5}
                  </p>
                </div>
                <div className="mb-5 text-gray-500 font-light">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_6}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {REFUND_POLICY.EXCEPTIONS.map((item) => {
          return (
            <div
              key={item.name}
              className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
            >
              <div className="w-full mx-2 ">
                <p className="pb-4 text-xl font-light text-gray-800">
                  {item.name}:
                </p>
                <div className="mb-5 text-gray-600 font-light py-2">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_1}
                  </p>
                  <span>
                    <Link href={item.href}>
                      <a className="inline font-light text-blue-500 font-dosis text-lg cursor-pointer hover:text-customColorNIR">
                        {item.title_href}
                      </a>
                    </Link>
                  </span>
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_2}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {REFUND_POLICY.QUESTIONS.map((item) => {
          return (
            <div
              key={item.name}
              className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
            >
              <div className="w-full mx-2 ">
                <p className="pb-4 text-xl font-light text-gray-800">
                  {item.name}:
                </p>
                <div className="mb-5 text-gray-600 font-light py-2">
                  <p className="inline font-light font-dosis text-lg">
                    {item.title_1}
                  </p>
                  <span>
                    <Link href={item.href}>
                      <a className="inline font-light text-blue-500 font-dosis text-lg cursor-pointer hover:text-customColorNIR">
                        {item.title_href}
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RrPolicy;
