import Link from "next/link";
import React from "react";
import { Faq } from "../../components/StaticPages/FAQ/data";
import Footer from "../../components/StaticPages/Footer";
import Header from "../../components/StaticPages/Header";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <div className="">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-light text-indigo-600 text-xl  sm:tracking-tight md:text-2xl  uppercase">
              {`NIREEKA KNOWLEDGE CENTER`}
            </h2>
            <p className="mt-1 text-5xl font-light text-gray-900  lg:text-7xl font-oswald">
              {`FAQ`}
            </p>
            <div className="max-w-xl mt-5 mx-auto text-xl text-gray-500 font-dosis">
              {`Can’t find the answers you’re looking for? Reach out to our `}

              <Link href="/support">
                <a className="text-blue-500 font-light cursor-pointer hover:underline hover:text-customColorNIR">{`customer`}</a>
              </Link>
              {` support team.`}
            </div>
          </div>
        </div>
        <div className="px-1 md:px-0">
          <div className=" bg-gradient-to-r from-indigo-100 to-purple-200 font-dosis w-full   md:w-4/5 rounded-3xl mx-auto">
            <div className="max-w-md  py-10 px-4 sm:max-w-3xl sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl  font-light text-gray-900 font-oswald">
                    {Faq.name}
                  </h2>
                  <div className="mt-4 text-lg font-light text-gray-600 font-dosis">
                    {`Can’t find the answers you’re looking for? Reach out to our `}
                    <Link href="/support">
                      <a className="text-blue-700 font-light cursor-pointer hover:underline hover:text-customColorNIR">{`customer support`}</a>
                    </Link>
                    {` team.`}
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <div className="space-y-12">
                    {Faq.order_Details.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.title_1}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title_2}
                              <Link href={item.href}>
                                <a className="inline font-dosis text-base text-gray-800 underline-offset-2 decoration-gray-700 font-normal decoration-1 hover:decoration-orange-400	 underline hover:text-customColorNIR ">
                                  {item.name_href}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {Faq.ordered_Several.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.title_1}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title_2}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {Faq.wish_to_change.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.title_1}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title_2}
                              <Link href={item.href}>
                                <a className="inline font-dosis text-base text-gray-800 underline-offset-2 decoration-gray-700 font-normal decoration-1 hover:decoration-orange-400	 underline hover:text-customColorNIR ">
                                  {item.name_href}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {Faq.refund_button.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.title_1}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title_2}
                              <Link href={item.href}>
                                <a className="inline font-dosis text-base text-gray-800 underline-offset-2 decoration-gray-700 font-normal decoration-1 hover:decoration-orange-400	 underline hover:text-customColorNIR ">
                                  {item.name_href}
                                </a>
                              </Link>
                              {item.title_3}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {Faq.policy.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.title_1}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title_2}
                              <Link href={item.href}>
                                <a className="inline font-dosis text-base text-gray-800 underline-offset-2 decoration-gray-700 font-normal decoration-1 hover:decoration-orange-400	 underline hover:text-customColorNIR ">
                                  {item.name_href}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {Faq.shipping.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.title_1}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title_2}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {Faq.my_country.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.title_1}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title_2}
                              <Link href={item.href}>
                                <a className="inline font-dosis text-base text-gray-800 underline-offset-2 decoration-gray-700 font-normal decoration-1 hover:decoration-orange-400	 underline hover:text-customColorNIR ">
                                  {item.name_href}
                                </a>
                              </Link>
                            </div>
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
          <div className=" bg-gradient-to-r from-indigo-100 to-purple-200 font-dosis w-full   md:w-4/5 rounded-3xl mx-auto">
            <div className="max-w-md  py-10 px-4 sm:max-w-3xl sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl  font-light text-gray-900 font-oswald">
                    {Faq.name_2}
                  </h2>
                  <div className="mt-4 text-lg font-light text-gray-600 font-dosis">
                    {`Can’t find the answers you’re looking for? Reach out to our `}
                    <Link href="/support">
                      <a className="text-blue-700 font-light cursor-pointer hover:underline hover:text-customColorNIR">{`customer support`}</a>
                    </Link>
                    {` team.`}{" "}
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <div className="space-y-12">
                    {Faq.bikes.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.name}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title}
                            </div>
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
          <div className=" bg-gradient-to-r from-indigo-100 to-purple-200 font-dosis w-full   md:w-4/5 rounded-3xl mx-auto">
            <div className="max-w-md  py-10 px-4 sm:max-w-3xl sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl  font-light text-gray-900 font-oswald">
                    {Faq.name_3}
                  </h2>
                  <div className="mt-4 text-lg font-light text-gray-600 font-dosis">
                    {`Can’t find the answers you’re looking for? Reach out to our `}
                    <Link href="/support">
                      <a className="text-blue-700 font-light cursor-pointer hover:underline hover:text-customColorNIR">{`customer support`}</a>
                    </Link>
                    {` team.`}{" "}
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <div className="space-y-12">
                    {Faq.Electronics.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.name}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title}
                            </div>
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
        <div className="px-1 md:px-0 mt-16 mb-16">
          <div className=" bg-gradient-to-r from-indigo-100 to-purple-200 font-dosis w-full   md:w-4/5 rounded-3xl mx-auto">
            <div className="max-w-md  py-10 px-4 sm:max-w-3xl sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl  font-light text-gray-900 font-oswald">
                    {Faq.name_4}
                  </h2>
                  <div className="mt-4 text-lg font-light text-gray-600 font-dosis">
                    {`Can’t find the answers you’re looking for? Reach out to our `}
                    <Link href="/support">
                      <a className="text-blue-700 font-light cursor-pointer hover:underline hover:text-customColorNIR">{`customer support`}</a>
                    </Link>
                    {` team.`}{" "}
                  </div>
                </div>
                <div className="mt-12  lg:mt-0 lg:col-span-2">
                  <div className="space-y-12">
                    {Faq.Other.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mt-2 text-xl font-light text-gray-900  ">
                            {item.name}
                            <br />
                            <div className="font-dosis mt-2 text-base font-light text-gray-600">
                              {item.title}
                            </div>
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
      </div>
      {/* <Footer /> */}
    </>
  );
}
