import Link from "next/link";
import React from "react";
import Footer from "../../components/StaticPages/Footer";
import Header from "../../components/StaticPages/Header";
import { warranty } from "../../components/StaticPages/Warranty/data";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <div className="">
        <div className="max-w-7xl mx-auto py-10 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-light text-indigo-600 text-xl  sm:tracking-tight md:text-2xl  uppercase">
              {`Terms & Conditions`}
            </h2>
            <p className="mt-1 text-5xl font-light text-gray-900  lg:text-7xl font-oswald">
              {`Warranty`}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 font-dosis">
              {`     Thanks for joining the Nireeka family. Below you can find all the
            situations you might need to get help from the warranty agreement.`}
            </p>
          </div>
        </div>
        <div className="px-1 md:px-0">
          <div className="bg-gradient-to-r from-green-200 to-blue-200 font-dosis w-full   md:w-4/5 rounded-3xl mx-auto">
            <div className="max-w-md  py-10 px-4 sm:max-w-3xl sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl  font-light text-gray-900 font-oswald">
                    {warranty.name}
                  </h2>
                  <p className="mt-4 text-lg font-light text-gray-600 font-dosis">
                    {warranty.describe}
                  </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <div className="space-y-12">
                    {warranty.GENERAL.map((item) => {
                      return (
                        <div key={item.name}>
                          <div className="text-2xl font-light text-gray-900 font-oswald uppercase">
                            {item.name}
                          </div>
                          <div className="mt-2 font-dosis text-gray-600  ">
                            {item.title_1}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text}
                            </span>
                            {`or`}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text_2}
                            </span>
                            {item.title_2}
                          </div>
                        </div>
                      );
                    })}

                    {warranty.MAIN.map((item) => {
                      return (
                        <div key={item.name}>
                          <div className="text-2xl font-light text-gray-900 font-oswald uppercase">
                            {item.name}
                          </div>
                          <div className="mt-2 font-dosis text-gray-600">
                            {item.title_1}
                            <br />
                            {item.title_2}
                            <br />
                            {item.title_3}
                            <div className="pt-5">
                              <span className="inline font-dosis font-medium  text-gray-900">
                                {`IMPORTANT:`}
                              </span>
                              <p className=" font-light text-gray-700 inline font-dosis">
                                {` If the frame or fork or any component is broken
                              during shipping, you need to open a`}
                                <Link href="/support/tickets">
                                  <a
                                    target="_blank"
                                    className="hover:underline text-black font-dosis font-medium hover:text-customColorNIR"
                                  >
                                    {` ticket `}
                                  </a>
                                </Link>
                                {`  and let us know to proceed with the return or
                              replacement in no more than 3 days.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {warranty.MOTOR.map((item) => {
                      return (
                        <div key={item.name}>
                          <div className="text-2xl font-light text-gray-900 font-oswald uppercase">
                            {item.name}
                          </div>
                          <div className="mt-2 font-dosis text-gray-600">
                            {item.title_1}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text}
                            </span>
                            {`or`}
                            <span className="font-light font-dosis text-black">
                              {item.slice_text_2}
                            </span>
                            {item.title_2}
                          </div>
                        </div>
                      );
                    })}

                    {warranty.BATTERY.map((item) => {
                      return (
                        <div key={item.name}>
                          <div className="text-2xl font-light text-gray-900 font-oswald uppercase">
                            {item.name}
                          </div>
                          <div className="mt-2 font-dosis text-gray-600">
                            {item.title_1}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text}
                            </span>
                            {`or`}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text_2}
                            </span>
                            {item.title_2}
                          </div>
                        </div>
                      );
                    })}
                    {warranty.FORKS.map((item) => {
                      return (
                        <div key={item.name}>
                          <div className="text-2xl font-light text-gray-900 font-oswald uppercase">
                            {item.name}
                          </div>
                          <div className="mt-2 font-dosis text-gray-600">
                            {item.title_1}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text}
                            </span>
                            {item.title_2}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text_2}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {warranty.SUSPENSION.map((item) => {
                      return (
                        <div key={item.name}>
                          <div className="text-2xl font-light text-gray-900 font-oswald uppercase">
                            {item.name}
                          </div>
                          <div className="mt-2 font-dosis text-gray-600">
                            {item.title_1}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text}
                            </span>
                            {item.title_2}
                            <span className="font-medium font-dosis text-black">
                              {item.slice_text_2}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-1 md:px-0 mt-16">
          <div className="bg-gradient-to-r from-green-200 to-blue-200 font-dosis w-full   md:w-4/5 rounded-3xl mx-auto">
            <div className="max-w-md  py-10 px-4 sm:max-w-3xl sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl  font-light text-gray-900 font-oswald">
                    {warranty.name_3}
                  </h2>
                  <p className="mt-4 text-lg font-light text-gray-600 font-dosis">
                    {warranty.describe_3}
                  </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <div className="space-y-12">
                    {warranty.void.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="text-2xl font-light text-gray-900 font-oswald uppercase">
                            {item.name}
                          </div>
                          <div className="mt-2 font-dosis text-gray-600">
                            {item.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-1 md:px-0 mt-16">
          <div className="bg-gradient-to-r from-green-200 to-blue-200 font-dosis w-full   md:w-4/5 rounded-3xl mx-auto">
            <div className="max-w-md  py-10 px-4 sm:max-w-3xl sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl  font-light text-gray-900 font-oswald">
                    {warranty.name_2}
                  </h2>
                  <p className="mt-4 text-lg font-light text-gray-600 font-dosis">
                    {warranty.describe_2}
                  </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <div className="space-y-12">
                    {warranty.Warranty_Exclusion.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="text-2xl font-light text-gray-900 font-oswald uppercase">
                            {item.name}
                          </div>
                          <div className="mt-2 font-dosis text-gray-600">
                            {item.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-1 md:px-0 mt-16">
          <div className="relative mt-10 sm:mt-10 sm:py-16 mb-10 lg:mb-0">
            <div aria-hidden="true" className="hidden sm:block">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>
              <svg
                className="absolute top-8 left-1/2 -ml-3"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                ></rect>
              </svg>
            </div>
            <div className="mx-auto px-1 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 ">
              <div className="relative rounded-2xl px-6 py-10 bg-red-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-red-400 text-opacity-40"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    ></path>
                    <path
                      className="text-red-600 text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    ></path>
                  </svg>
                </div>
                <div className="relative">
                  <div className="sm:text-center">
                    <h2 className="text-3xl text-center text-white font-light tracking-tight sm:text-4xl font-oswald">
                      {` The Warranty Claim Process`}
                    </h2>
                    <p className="mt-6 text-center mx-auto max-w-2xl font-light font-dosis text-lg text-red-100">
                      {`  All warranty claims must be through our support system by
                    opening a ticket in the warranty category. You need to
                    include enough clear photos and videos requested by the
                    Nireeka team and do the testing requested by the Nireeka
                    team.`}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3 py-10 w-full mx-auto">
                    <Link href="/support">
                      <a target="_blank">
                        <button
                          type="submit"
                          className="block w-full md:w-2/5 mx-auto rounded-xl border border-gray-200 px-5 py-3 bg-gray-900 text-base font-light text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-500 sm:px-10"
                        >
                          {`Claim now!`}
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
