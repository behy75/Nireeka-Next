import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setCharger } from "../../../app/configuratorSlice";

const standardChargers = [
  {
    index: 1,
    attribute: "charger",
    title: "Normal Charger",
    property: "",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/s8DlsSvtXW9xtg0F7U0AqKibMLbFlblonW0Ev3UT.jpg",
  },
];

const upgradChargers = [
  {
    index: 2,
    attribute: "charger",
    title: "Quick Charger",
    property: "Charge the battery 60% faster",
    price: "$69",
    srcImg:
      "https://nireeka.com/storage/product/s8DlsSvtXW9xtg0F7U0AqKibMLbFlblonW0Ev3UT.jpg",
  },
];

export default function Charger() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { charger } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Charger
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardChargers.map((item) => (
          <g key={item.index} onClick={() => dispatch(setCharger(item.index))}>
            <ButtonAttributes
              attribute={item.charger}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === charger ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === charger ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradChargers.map((item) => (
          <g key={item.index} onClick={() => dispatch(setCharger(item.index))}>
            <ButtonAttributes
              attribute={item.charger}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === charger ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === charger ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
    </>
  );
}
