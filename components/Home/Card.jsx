import Image from "next/image";
import { useDispatch, useSelector, useState } from "react-redux";
import { setBikeChoose } from "../../app/homePageSlice";
import TabBike from "./TabBike";

export default function Card() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { bikeChoose, homePageData } = state.homePage;

  return (
    <>
      <div className="flex flex-wrap justify-center w-4/5 px-1 pt-10 mx-auto mt-4 lp:px-24">
        {homePageData ? (
          homePageData.data.items.map((bike) => {
            return (
              <div
                key={bike.id}
                onMouseEnter={() => dispatch(setBikeChoose(bike.id))}
                className={`w-full p-5 mb-0 text-2xl text-center transition duration-500 transform cursor-pointer sm:w-3/3 md:w-3/3 lp:1/3 lg:w-1/3 xl:w-1/3 min-w-nireeka buttonContainer ${
                  bikeChoose === bike.id ? "border-b border-b-red-500" : ""
                }`}
              >
                <Image
                  key={Math.floor(Math.random() * 9)}
                  src={bike.image}
                  alt={bike.name}
                  width={350}
                  height={200}
                  className="h-full align-middle transition duration-500 transform border-none hover:scale-105 "
                />
                <h6 className="text-xl font-light text-gray-800">
                  {bike.title}
                </h6>
                <h6 className="p-1 text-lg font-light text-gray-500">
                  from <span className="text-green-500">{bike.price}</span>
                </h6>
              </div>
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
      <TabBike />
    </>
  );
}
