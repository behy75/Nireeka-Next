import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setSaddle } from "../../../app/configuratorSlice";

const standardSaddles = [
  {
    index: 1,
    attribute: "saddle",
    title: "Sport Saddle",
    property: "Compatible with all models",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/CAYsDmQeTfaw58WBvxkKbVZIdA9BoeYEouTlzc39.jpg",
  },
];

const upgradSaddles = [
  {
    index: 2,
    attribute: "saddle",
    title: "Comfort Saddle",
    property: "",
    price: "$35",
    srcImg:
      "https://nireeka.com/storage/product/dLOgCdZgxZgaLDwa0m7gtyCCkhvGonRHX0Rc7WIi.jpg",
  },
  {
    index: 3,
    attribute: "saddle",
    title: "EC90",
    property: "",
    price: "$56",
    srcImg:
      "https://nireeka.com/storage/product/3QefQSe1ogufZFcxgPgHmYBhO9mc7Qo6H7aWyAWx.jpg",
  },
];

export default function Saddle() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { saddle } = state.configurator;
  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Saddle
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardSaddles.map((item) => (
          <g key={item.index} onClick={() => dispatch(setSaddle(item.index))}>
            <ButtonAttributes
              attribute={item.saddle}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === saddle ? "bg-gray-700" : "bg-white"}
              textColor={item.index === saddle ? "text-white" : "text-gray-700"}
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradSaddles.map((item) => (
          <g key={item.index} onClick={() => dispatch(setSaddle(item.index))}>
            <ButtonAttributes
              attribute={item.saddle}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === saddle ? "bg-gray-700" : "bg-white"}
              textColor={item.index === saddle ? "text-white" : "text-gray-700"}
            />
          </g>
        ))}
      </div>
    </>
  );
}
