import Link from "next/link";
import Footer from "../../components/StaticPages/Footer";
import Header from "../../components/StaticPages/Header";
import RrPolicy from "../../components/StaticPages/RRPolicy";
import { terms } from "../../components/StaticPages/Terms";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      {/* <button onClick={()=>push("#ali")}>xxxxxx</button> */}
      <div className="">
        {" "}
        <div className=" flex flex-wrap w-full px-1 py-5 mx-auto lg:px-4 lg:w-9/12 ">
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 border-b ">
              <h3 className="font-light text-3xl text-gray-600 py-4">
                {terms.name}
              </h3>
            </div>
          </div>
          <div className="w-full px-4 py-3 mx-auto md:w-11/12">
            <h3 className="font-light text-2xl text-gray-700 py-1">
              {terms.name_2}
            </h3>
            <h3 className="font-light text-2xl text-gray-700 py-1">
              {terms.name_3}
            </h3>
          </div>
          {terms.conditions.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
                key={item.id}
              >
                <div className="w-full mx-2 ">
                  <p className="pb-4 text-xl font-light text-gray-700">
                    {item.name}
                  </p>

                  <div className="mb-5 text-gray-600 font-light">
                    <p className="font-light text-gray-600 font-dosis leading-8 text-lg py-1">
                      {item.title_2}
                    </p>
                    <p className="font-light text-gray-600 font-dosis leading-8 text-lg py-1">
                      {item.title_3}
                    </p>
                    <p className="font-light text-gray-600 font-dosis leading-8 text-lg py-1">
                      {item.title_4}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {terms.cooki.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
                key={item.id}
              >
                <div className="w-full mx-2 ">
                  <p className="pb-4 text-2xl font-light text-gray-800">
                    {item.name}
                  </p>

                  <div className="mb-5  font-light">
                    <p className="font-light text-gray-600 font-dosis leading-8 text-lg py-1">
                      {item.title_2}
                    </p>
                    <p className="font-light text-gray-600 font-dosis leading-8 text-lg py-1">
                      {item.title_3}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {terms.license.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
                key={item.id}
              >
                <div className="w-full mx-2 ">
                  <p className="pb-4 text-2xl font-light text-gray-800">
                    {item.name}
                  </p>

                  <div className="mb-5 text-gray-500 font-light">
                    <p className="font-light font-dosis leading-8 text-lg text-gray-600 py-1">
                      {item.title_2}
                    </p>
                    <p className="font-light font-dosis leading-8 text-lg text-gray-600 py-1">
                      {item.title_3}
                    </p>
                    <p className="font-light font-dosis leading-8 text-lg text-gray-600 py-1">
                      {item.title_3}
                    </p>
                  </div>
                  <div className="w-full mx-2 ">
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_4}
                    </p>
                    <ul className="list-disc pl-4 md:pl-8">
                      {item.list.map((list) => {
                        return (
                          <li
                            className="font-light py-1 text-lg font-dosis text-black leading-7"
                            key={list.id}
                          >
                            {list.name}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="pb-4 pt-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_5}
                    </p>
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_6}
                    </p>
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_7}
                    </p>
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_8}
                    </p>
                  </div>
                  <div className="w-full mx-2 ">
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_9}
                    </p>
                    <ul className="list-disc pl-4 md:pl-8">
                      {item.list_2.map((list) => {
                        return (
                          <li
                            className="font-light text-lg py-1 font-dosis text-black leading-7"
                            key={list.id}
                          >
                            {list.name}
                          </li>
                        );
                      })}
                    </ul>

                    <p className="pb-4 pt-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_10}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {terms.Hyperlinking.map((item) => {
            return (
              <div
                className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 "
                key={item.id}
              >
                <div className="w-full mx-2 ">
                  <p className="pb-4 text-2xl font-light text-gray-800">
                    {item.name}
                  </p>

                  <div className="w-full mx-2 ">
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_2}
                    </p>
                    <ul className="list-disc pl-4 md:pl-8">
                      {item.list.map((list) => {
                        return (
                          <li
                            className="font-light text-lg py-1 font-dosis text-black leading-7"
                            key={list.id}
                          >
                            {list.name}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="pb-4 pt-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_5}
                    </p>
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_6}
                    </p>
                    <ul className="list-disc pl-4 md:pl-8">
                      {item.list_2.map((list) => {
                        return (
                          <li
                            className="font-light py-1 text-lg font-dosis text-black leading-7"
                            key={list.id}
                          >
                            {list.name}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="pb-4 pt-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_7}
                    </p>
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_8}
                    </p>
                  </div>
                  <div className="w-full mx-2 ">
                    <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_9}
                    </p>
                    <p className="pb-4 pt-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_10}
                    </p>{" "}
                    <ul className="list-disc pl-4 md:pl-8">
                      {item.list_3.map((list) => {
                        return (
                          <li
                            className="font-light text-lg py-1 font-dosis text-black leading-7"
                            key={list.id}
                          >
                            {list.name}
                          </li>
                        );
                      })}
                    </ul>
                    <p className=" pt-4 text-lg font-light font-dosis text-gray-600">
                      {item.title_11}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 ">
              <h3 className="font-light text-2xl text-gray-800 py-4">
                {terms.name_7}
              </h3>
              <p className=" text-lg font-light font-dosis text-gray-600">
                {terms.title_7}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 ">
              <h3 className="font-light text-2xl text-gray-800 py-4">
                {terms.name_8}
              </h3>
              <p className=" text-lg font-light font-dosis text-gray-600">
                {terms.title_8}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 ">
              <h3 className="font-light text-2xl text-gray-800 py-4">
                {terms.name_9}
              </h3>
              <p className=" text-lg font-light font-dosis text-gray-600">
                {terms.title_9}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 ">
              <h3 className="font-light text-2xl text-gray-800 py-4">
                {terms.name_10}
              </h3>
              <p className=" font-light font-dosis text-lg text-gray-600 inline">{`Please read Privacy `}</p>
              <Link href="/privacypolicy">
                <a className="font-light font-dosis text-lg hover:text-customColorNIR text-blue-500">
                  Policy
                </a>
              </Link>
            </div>
          </div>{" "}
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 ">
              <h3 className="font-light text-2xl text-gray-800 py-4">
                {terms.name_11}
              </h3>
              <p className=" text-lg font-light font-dosis text-gray-600">
                {terms.title_11}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 ">
              <h3 className="font-light text-2xl text-gray-800 py-4">
                {terms.name_12}
              </h3>
              <p className=" text-lg font-light font-dosis text-gray-600">
                {terms.title_12}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 ">
              <h3 className="font-light text-2xl text-gray-800 py-4">
                {terms.name_13}
              </h3>
              <p className="pb-4 text-lg font-light font-dosis text-gray-600">
                {terms.title_13}
              </p>
              <ul className="list-disc pl-4 md:pl-8">
                {terms.list_13.map((list) => {
                  return (
                    <li
                      className="font-light py-1 text-lg font-dosis text-black leading-7"
                      key={list.id}
                    >
                      {list.name}
                    </li>
                  );
                })}
              </ul>
              <p className="pb-4 pt-4 text-lg font-light font-dosis text-gray-600">
                {terms.title_13_2}
              </p>
              <p className="pb-4  text-lg font-light font-dosis text-gray-600">
                {terms.title_13_3}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full px-2 py-3 mx-auto md:w-11/12 ">
            <div className="w-full mx-2 border-b ">
              <h3 className="font-light text-3xl text-gray-600 py-4">
                {terms.name_15}
              </h3>
            </div>
          </div>
          <div className="w-full px-4 py-3 mx-auto md:w-11/12">
            <h3 className="font-light text-2xl text-gray-700 py-2">
              {terms.name_16}
            </h3>
            <p className="text-lg font-light font-dosis text-gray-600">
              {terms.title_16}
            </p>
          </div>
          <div className="w-full px-4 py-3 mx-auto md:w-11/12">
            <h3 className="font-light inline text-xl text-gray-700 py-1">
              {terms.name_17}
            </h3>
            <p className="pb-4 inline text-lg font-light font-dosis text-gray-600">
              {terms.title_17}
            </p>
          </div>
          <div className="w-full px-4 py-3 mx-auto md:w-11/12">
            <h3 className="font-light inline text-xl text-gray-700 py-1">
              {terms.name_18}
            </h3>
            <p className="pb-4 inline text-lg font-light font-dosis text-gray-600">
              {terms.title_18}
            </p>
          </div>
          <div className="w-full px-4 py-3 mx-auto md:w-11/12">
            <h3 className="font-light inline text-xl text-gray-700 py-1">
              {terms.name_19}
            </h3>
            <p className="pb-4 inline text-lg font-light font-dosis text-gray-600">
              {terms.title_19}
            </p>
          </div>
          <div className="w-full px-4 py-3 mx-auto md:w-11/12">
            <h3 className="font-light inline text-xl text-gray-700 py-1">
              {terms.name_20}
            </h3>
            <p className="pb-4 inline text-lg font-light font-dosis text-gray-600">
              {terms.title_20}
            </p>
            <p className="pb-4 inline text-lg font-light font-dosis text-gray-600">
              {terms.title_20_2}
            </p>
          </div>{" "}
          <div className="w-full px-4 py-3 mx-auto md:w-11/12">
            <h3 className="font-light inline text-xl text-gray-700 py-1">
              {terms.name_21}
            </h3>
            <ul className="list-disc pl-4 md:pl-8 pt-4">
              {terms.list_21.map((list) => {
                return (
                  <li
                    className="font-light py-1 text-lg font-dosis text-black leading-7"
                    key={list.id}
                  >
                    {list.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <RrPolicy />
      {/* <Footer /> */}
    </>
  );
}
