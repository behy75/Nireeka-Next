import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/StaticPages/Footer";
import Header from "../../components/StaticPages/Header";
import { PRIVACYPOLICY } from "../../components/StaticPages/PrivacyPolicy/data";

export default function Index() {
  const { push } = useRouter();
  return (
    <>
      {/* <Header /> */}
      {/* <button onClick={()=>push("#ali")}>xxxxxx</button> */}
      <div className="">
        <div className=" flex flex-wrap w-full px-1 py-5 mx-auto lg:px-4 lg:w-9/12 ">
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 border-b ">
              <h3 className="font-light text-3xl text-gray-600 py-4">
                {PRIVACYPOLICY.name}
              </h3>
            </div>
          </div>
          {PRIVACYPOLICY.PRIVACYPOLICY.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
                key={item.id}
              >
                <div className="w-full mx-2 ">
                  <p className="pb-4 text-xl font-light text-gray-700">
                    {item.name}
                  </p>
                  <div className="mb-5 text-gray-500 font-light">
                    <p className="inline font-light font-dosis leading-8 text-lg">
                      {`Thank you for choosing to be part of our community at
                    Shojaie, doing business as Nireeka (`}
                      <span className="text-gray-900 text-xl font-light font-dosis leading-8">
                        {` "Nireeka"`}
                      </span>
                      ,
                      <span className="text-gray-900 text-xl font-light font-dosis leading-8">{` "we"`}</span>
                      ,
                      <span className="text-gray-900 text-xl font-light font-dosis leading-8">{` "us"`}</span>
                      {`, or `}
                      <span className="text-gray-900 text-xl font-light font-dosis leading-8">{` "our"`}</span>
                      {`). We are committed to protecting your
                    personal information and your right to privacy. If you have
                    any questions or concerns about our policy or our practices
                    with regards to your personal information, please contact us
                    at support@nireeka.com.`}
                    </p>
                  </div>
                  <div className="mb-5 text-gray-500 font-light">
                    <p className="inline font-light font-dosis leading-8 text-lg">
                      {item.title_2}
                    </p>
                  </div>
                  <div className="mb-5 text-gray-500 font-light">
                    <p className="inline font-light font-dosis leading-8 text-lg">
                      {`This privacy policy applies to all information collected through our website such as nireeka.com), mobile application, (`}
                      <span className="text-gray-900 text-xl font-light font-dosis leading-8">{`"Apps"`}</span>
                      {`), and/or any related services, sales, marketing or events we refer to them collectively in this privacy policy as the `}
                      <span className="text-gray-900 text-xl font-light font-dosis leading-8">{`"Sites"`}</span>
                      {`).`}
                    </p>
                  </div>
                  <div className="mb-5 py-4">
                    <p className="inline text-black font-light font-dosis leading-8 text-lg">
                      {item.describ}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-center w-full px-2 pb-2 mx-auto md:w-11/12 ">
            <div className="w-full mx-2">
              <p className="inline text-black font-light font-dosis leading-8 text-xl">
                {PRIVACYPOLICY.TABLE.name}
              </p>
            </div>
          </div>

          {PRIVACYPOLICY.links.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 pb-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " key={item.id}>
                  <Link href={item.href} passHref>
                    <a className="cursor-pointer">
                      <p className="inline  text-gray-500 font-light font-dosis leading-8 hover:text-customColorNIR  text-lg">
                        {item.title_href}
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.WHAT_INFORMATION.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.name}
                    </p>
                    <p className=" text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.describ}
                    </p>
                  </div>
                  <div>
                    <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.head}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_1}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_1_1}
                    </p>
                  </div>
                  <div className="pt-8">
                    <p className=" text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_2}
                    </p>
                  </div>

                  <div className="pt-8">
                    <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.head_3}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_3}
                    </p>
                  </div>
                  <div className="pt-8">
                    <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.head_4}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_4}
                    </p>
                  </div>
                  <div className="pt-8">
                    <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.head_5}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_5}
                    </p>
                  </div>
                  <div className="pt-8">
                    <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_6}
                    </p>
                  </div>
                  <div className="pt-10">
                    <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.T_Head_8}
                    </p>
                  </div>
                  <div className="pt-6">
                    <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.head_8}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_8}
                    </p>
                  </div>
                  <div className="pt-10">
                    <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.T_Head_9}
                    </p>
                  </div>
                  <div className="pt-6">
                    <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                      {item.head_9}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_9}
                    </p>
                    <div>
                      <p className=" inline-block text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.paragraph_9_1}
                      </p>
                      <p className=" inline-block text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.paragraph_9_2}
                      </p>
                      <p className=" inline-block text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.paragraph_9_3}
                      </p>
                      <p className=" inline-block text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.paragraph_9_4}
                      </p>
                    </div>
                    <div className="pt-10">
                      <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                        {item.T_Head_10}
                      </p>
                    </div>
                    <div className="pt-6">
                      <p className=" inline text-black font-light font-dosis leading-8 text-xl text-justify">
                        {item.head_10}
                      </p>
                      <p className=" inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.title_10}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.HOW_DO_WE_USE_YOUR_INFORMATION.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className=" inline text-black font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_2}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_3}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_4}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_5}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_6}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_7}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_8}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.WILL_YOUR_INFORMATION.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className=" inline text-black font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_2}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_3}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_4}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_5}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_6}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_7}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_8}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      <span className="text-black">{`•`}</span> {item.title_9}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      <span className="text-black">{`•`}</span> {item.title_10}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.DO_WE_USE_COOKIES.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className=" inline text-black font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.HOW_LONG_DO_WE_KEEP.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className=" inline text-black font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className="inline  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                    <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_2}
                    </p>
                    <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_3}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.INFORMATION_SAFE.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className="  text-black inline font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className="  text-gray-500 inline font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                    <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.PRIVACY_RIGHTS.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className="  text-black inline font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className="  text-gray-500 inline font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                    <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_2}
                    </p>
                    <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_3}
                    </p>
                    <div>
                      <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                        {item.title_4}
                      </p>
                      <Link href={item.href}>
                        <a className=" cursor-pointer text-lg text-gray-400 font-light font-dosis">
                          {item.href}
                        </a>
                      </Link>
                    </div>
                    <div className="pt-10">
                      <p className=" text-black font-light font-dosis leading-8 text-lg text-justify">
                        {item.name_2}
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className=" text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.title_5}
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className=" text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.title_6}
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className=" text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.title_7}
                      </p>
                    </div>
                  </div>
                  <div className="pt-10">
                    <p className=" text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_8}
                    </p>
                    <div>
                      <p className="inline text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                        {item.title_9}
                      </p>
                      <Link href={item.href_2}>
                        <a className="inline cursor-pointer text-lg text-gray-400 font-light font-dosis">
                          {item.href_2}
                        </a>
                      </Link>
                    </div>

                    <p className=" text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_10}
                    </p>
                    <p className=" text-gray-500 font-light font-dosis leading-8 text-lg text-justify">
                      {item.title_11}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {PRIVACYPOLICY.CONTROLS_FOR.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className=" inline text-black font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className=" inline text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {PRIVACYPOLICY.DO_CALIFORNIA.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className="  text-black inline font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className="  text-gray-500 inline font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                    <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_2}
                    </p>
                    <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_3}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.DO_WE_MAKE_UPDATE.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 "
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className="  text-black inline font-light font-dosis text-xl text-justify">
                      {item.head}
                    </p>
                    <p className="  text-gray-500 inline font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_1}
                    </p>
                    <p className="  text-gray-500 font-light font-dosis text-lg leading-8 text-justify">
                      {item.title_2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {PRIVACYPOLICY.HOW_CAN_YOU_CONTACT.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center w-full px-2 mx-auto md:w-11/12 pb-8"
              >
                <div className="w-full mx-2 " id={item.id}>
                  <div className="py-10">
                    <p className=" text-black font-light font-dosis text-xl text-justify">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <p className="  inline text-black font-light font-dosis leading-8 text-lg">
                      {item.title_1}
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
