import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setAssistSystem } from "../../../app/configuratorSlice";

const standardAssistSystems = [
  {
    index: 1,
    attribute: "assist system",
    title: "BB Speed Sensor",
    property: "SR PA151.32.ST",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/3kMXDGbVowoVqTqeH6ZJNYdPOu2duyWUacxZRxBk.jpg",
  },
];

const upgradAssistSystems = [
  {
    index: 2,
    attribute: "assist system",
    title: "BB Torque Sensor",
    property: "SR PA211.32.ST.C",
    price: "$119",
    srcImg:
      "https://nireeka.com/storage/product/3kMXDGbVowoVqTqeH6ZJNYdPOu2duyWUacxZRxBk.jpg",
  },
];

export default function AssistSystem() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { assistSystem } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Assist System
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardAssistSystems.map((item) => (
          <g
            key={item.index}
            onClick={() => dispatch(setAssistSystem(item.index))}
          >
            <ButtonAttributes
              attribute={item.assistSystem}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === assistSystem ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === assistSystem ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradAssistSystems.map((item) => (
          <g
            key={item.index}
            onClick={() => dispatch(setAssistSystem(item.index))}
          >
            <ButtonAttributes
              attribute={item.assistSystem}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === assistSystem ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === assistSystem ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
    </>
  );
}
