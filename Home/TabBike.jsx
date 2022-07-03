import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import Link from "next/link";

const TabBike = () => {
  const state = useSelector((state) => state);
  let { bikeChoose, homePageData } = state.homePage;
  const [randomPath, setRandomPath] = useState();
  const randomNumber = Math.floor(Math.random() * 9);
  useEffect(() => {
    if (homePageData) {
      {
        homePageData.data.items.map((index) => {
          index.images !== [] &&
            index.images.map((item) => {
              if (item.index === randomNumber) {
                setRandomPath(item.path);
              }
            });
        });
      }
    }
  }, [randomNumber, homePageData]);

  return (
    <section className="tabPanel">
      <div className="flex-wrap justify-center hidden lg:flex">
        {homePageData ? (
          homePageData.data.items.map((tabBike) => {
            return (
              <>
                {bikeChoose === tabBike.id && (
                  <>
                    <div
                      className="w-full text-2xl font-light text-center bg-white border-t border-b border-gray-200 sm:w-3/3 md:w-3/3 lg:w-3/5 xl:w-3/5"
                      key={tabBike.id}
                    >
                      <div>
                        <div
                          className="py-1 mt-8 text-3xl font-light normal-case boxx"
                          dangerouslySetInnerHTML={{
                            __html: tabBike.description,
                          }}
                        />
                      </div>
                      <div className="flex flex-wrap justify-start px-4 pt-8 pb-8 font-light">
                        <div className="flex flex-col px-4 md:w-1/2 sm:w-2/2">
                          <div className="w-5/6 mx-auto">
                            <Image
                              src={tabBike.image}
                              alt={tabBike.title}
                              width={250}
                              height={150}
                              className="h-full align-middle transition duration-500 transform border-none hover:scale-105 "
                            />
                          </div>
                          <div className="text-xl font-light">
                            <span className="text-red-500 font-radBold">
                              &gt;
                            </span>
                            <span>
                              {tabBike.title} -
                              <span className="text-green-500">
                                {tabBike.price}
                              </span>
                            </span>
                          </div>
                          <div className="py-2 text-base font-light text-gray-600">
                            <div
                              className="font-dosis"
                              dangerouslySetInnerHTML={{
                                __html: tabBike.description,
                              }}
                            />
                          </div>
                          <div className="py-2 text-lg font-light text-gray-800">
                            <Link href={`/${tabBike.slug}`}>
                              <button className="w-32 font-light text-red-500 bg-transparent border-2 border-red-500 rounded-md hover:border-customColorNIR hover:bg-transparent hover:text-customColorNIR focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400">
                                BUY NOW
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div
                          className="h-48 px-1 overflow-auto font-light md:w-4/12 sm:w-2/2 lp:h-64"
                          id="journal-scroll"
                        >
                          <h6 className="text-base font-light text-left text-gray-500 lowercase font-dosis ">
                            {tabBike.extra_data}
                          </h6>
                        </div>
                      </div>
                    </div>
                    {tabBike.video ? (
                      <div className="h-auto sm:w-3/3 md:w-3/3 lg:w-2/5 xl:w-2/5">
                        <div className="w-full h-full ">
                          <div className="flex" style={{ height: "inherit" }}>
                            <ReactPlayer
                              height="inherit"
                              url={tabBike.video}
                              controls={true}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-full h-auto text-2xl font-light text-center sm:w-3/3 md:w-3/3 lg:w-2/5 xl:w-2/5">
                          <div className="relative w-full h-full ">
                            {tabBike.images.length === 0 ? (
                              <div
                                className="flex"
                                style={{ height: "inherit", width: "inherit" }}
                              >
                                <div className="flex flex-wrap justify-start px-4 pt-8 pb-8 font-light">
                                  <div className="flex flex-col px-4 md:w-1/2 sm:w-2/2">
                                    <div className="w-5/6 mx-auto">
                                      <Image
                                        loading="eager"
                                        unoptimized={true}
                                        src={tabBike.image_big}
                                        alt={tabBike.title}
                                        layout="fill"
                                        className="h-full align-middle transition duration-500 transform border-none hover:scale-105 "
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div
                                className="flex"
                                style={{ height: "inherit", width: "inherit" }}
                              >
                                <div className="flex flex-wrap justify-start px-4 pt-8 pb-8 font-light">
                                  <div className="flex flex-col px-4 md:w-1/2 sm:w-2/2">
                                    <div className="w-5/6 mx-auto">
                                      <Image
                                        loading="eager"
                                        unoptimized={true}
                                        src={randomPath}
                                        alt={tabBike.title}
                                        layout="fill"
                                        quality={100}
                                        className="h-full align-middle transition duration-500 transform border-none hover:scale-105 "
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            );
          })
        ) : (
          <span className="flex w-1 h-1 rounded-full">
            <span className="absolute inline-flex bg-purple-400 rounded-full opacity-75 animate-ping h-50 w-50 rounded-100"></span>
            <span className="relative inline-flex w-1 h-1 bg-purple-500 rounded-full">
              ...loading
            </span>
          </span>
        )}
      </div>
    </section>
  );
};

export default TabBike;
