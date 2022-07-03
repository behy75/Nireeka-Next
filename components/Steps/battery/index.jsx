import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setBattery } from "../../../app/configuratorSlice";

const standardBatterys = [
  {
    index: 1,
    attribute: "battery",
    title: "480Wh Battery",
    property: "10Ah 48V",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/3kMXDGbVowoVqTqeH6ZJNYdPOu2duyWUacxZRxBk.jpg",
  },
];

const upgradBatterys = [
  {
    index: 2,
    attribute: "battery",
    title: "840Wh Battery",
    property: "17.5Ah 48V",
    price: "$249",
    srcImg:
      "https://nireeka.com/storage/product/3kMXDGbVowoVqTqeH6ZJNYdPOu2duyWUacxZRxBk.jpg",
  },
];

export default function Battery() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { battery } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Battery
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardBatterys.map((item) => (
          <g key={item.index} onClick={() => dispatch(setBattery(item.index))}>
            <ButtonAttributes
              attribute={item.battery}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === battery ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === battery ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradBatterys.map((item) => (
          <g key={item.index} onClick={() => dispatch(setBattery(item.index))}>
            <ButtonAttributes
              attribute={item.battery}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === battery ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === battery ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
    </>
  );
}
