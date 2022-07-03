import Link from "next/link";
import React from "react";
import { Contact } from "../../components/StaticPages/Contact/data";
import Footer from "../../components/StaticPages/Footer";
import Header from "../../components/StaticPages/Header";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <div className="">
        {" "}
        <div className=" flex flex-wrap w-full px-1 py-5 mx-auto lg:px-4 lg:w-9/12 ">
          {Contact.ContactUs.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto mt-8 md:w-11/12 "
                key={item.id}
              >
                <div className="w-full mx-2">
                  <p className="pb-4 text-3xl font-light text-gray-500">
                    {item.name}
                  </p>
                  <div className="mb-5 ">
                    <p className="text-gray-500 font-light font-dosis text-lg">
                      {item.title_1}
                    </p>

                    <p>&nbsp;</p>

                    <p className="inline text-gray-500 font-light font-dosis text-lg">
                      {item.title_2}
                    </p>
                    <span>
                      <Link href={item.href}>
                        <a className="text-blue-500 text-lg font-light font-dosis hover:text-customColorNIR">
                          {" "}
                          {item.title_href}.
                        </a>
                      </Link>
                    </span>

                    <p></p>
                  </div>
                </div>
              </div>
            );
          })}
          {Contact.AfterSales.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
                key={item.id}
              >
                <div className="w-full mx-2 ">
                  <p className="pb-4 text-2xl font-light text-gray-600">
                    {item.name}:
                  </p>
                  <div className="mb-5">
                    <p className="inline text-gray-500 font-light font-dosis text-lg">
                      {item.title_1}
                    </p>
                    <span>
                      <Link href={item.href}>
                        <a className="inline font-light text-blue-500 font-dosis text-lg center hover:text-customColorNIR">
                          {item.title_href}
                        </a>
                      </Link>
                    </span>
                    <p className="inline text-gray-500 font-light font-dosis text-lg">
                      {item.title_2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {Contact.Sales_General_Ceo.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
                key={item.id}
              >
                <div className="w-full mx-2 ">
                  <p className="pb-4 text-2xl font-light text-gray-600">
                    {item.name}:
                  </p>

                  <span>
                    <Link href={item.href}>
                      <a className="inline font-light text-blue-500 font-dosis text-lg cunter">
                        {item.title_href}
                      </a>
                    </Link>
                  </span>
                  <div className="mb-5 text-gray-500 font-light py-2">
                    <p className="inline font-light font-dosis text-lg">
                      {item.title_1}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {Contact.Address.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 border-t border-gray-200  "
                key={item.id}
              >
                <div className="w-full mx-2 mt-2 ">
                  <p className="pb-4 text-2xl font-light text-gray-700">
                    {item.name}:
                  </p>

                  <div className="mb-5 text-black font-light">
                    <p className="inline font-extralight font-dosis text-lg">
                      {item.title_1}
                    </p>
                  </div>
                  <div className="mb-5 text-black font-extralight">
                    <p className="inline font-extralight font-dosis text-lg">
                      {item.title_2}
                    </p>
                  </div>
                  <div className="mb-5 text-black font-extralight">
                    <p className="inline font-extralight font-dosis text-lg">
                      {item.title_3}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
