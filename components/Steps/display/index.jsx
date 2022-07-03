import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setDisplay } from "../../../app/configuratorSlice";

const standardDisplays = [
  {
    index: 1,
    attribute: "display",
    title: "DP C01",
    property: "10Ah 48V",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/QBpL7cpmUXmhplSYM8cp3YwVfwIOmIbQKrn3BXB9.jpg",
  },
];

const upgradDisplays = [
  {
    index: 2,
    attribute: "display",
    title: "840Wh Battery",
    property: "DP C18",
    price: "$99",
    srcImg:
      "https://nireeka.com/storage/product/VVYViTeHcljlr4etBsr5AvskIIY5spPRDRxj2CVf.jpg",
  },
];

export default function Display() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { display } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Display
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardDisplays.map((item) => (
          <g key={item.index} onClick={() => dispatch(setDisplay(item.index))}>
            <ButtonAttributes
              attribute={item.display}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === display ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === display ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradDisplays.map((item) => (
          <g key={item.index} onClick={() => dispatch(setDisplay(item.index))}>
            <ButtonAttributes
              attribute={item.display}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === display ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === display ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
    </>
  );
}
