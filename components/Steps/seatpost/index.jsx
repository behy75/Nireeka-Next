import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setSeatpost } from "../../../app/configuratorSlice";

const standardSeatposts = [
  {
    index: 1,
    attribute: "seatpost",
    title: "Aluminum Seatpost",
    property: "6061 Aluminum",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/slbPi11oPwCtIBHQDX1HO5wHLKhxHue7KGHd5JRs.jpg",
  },
];

const upgradSeatposts = [
  {
    index: 2,
    attribute: "seatpost",
    title: "Carbon Fiber Seatpost",
    property: "3K Carbon Fiber",
    price: "$99",
    srcImg:
      "https://nireeka.com/storage/product/3tLzzS2NnPLnMBYDs6BvMzlZH2BkAOfCxVP90Mzp.jpg",
  },
  {
    index: 3,
    attribute: "seatpost",
    title: "Rockshox Reverb Stealth Dropper",
    property: "We’ve taken the RockShox",
    price: "$199",
    srcImg:
      "https://nireeka.com/storage/product/9YRFXqVvoIO4Bh7MQjEkVLcLuSGkogMmZNMpTJXx.jpg",
  },
];

export default function Seatpost() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { seatpost } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Seatpost
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardSeatposts.map((item) => (
          <g key={item.index} onClick={() => dispatch(setSeatpost(item.index))}>
            <ButtonAttributes
              attribute={item.seatpost}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === seatpost ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === seatpost ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradSeatposts.map((item) => (
          <g key={item.index} onClick={() => dispatch(setSeatpost(item.index))}>
            <ButtonAttributes
              attribute={item.seatpost}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === seatpost ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === seatpost ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
    </>
  );
}
