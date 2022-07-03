import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setFork } from "../../../app/configuratorSlice";

const standardForks = [
  {
    index: 1,
    attribute: "fork",
    title: "Prime Carbonfiber Fork",
    property: "Prime Default Fork",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/s8DlsSvtXW9xtg0F7U0AqKibMLbFlblonW0Ev3UT.jpg",
  },
];

const upgradForks = [
  {
    index: 2,
    attribute: "fork",
    title: "Magnesium Air Fork",
    property: "",
    price: "$199",
    srcImg:
      "https://nireeka.com/storage/product/s8DlsSvtXW9xtg0F7U0AqKibMLbFlblonW0Ev3UT.jpg",
  },
];

export default function Fork() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { fork } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Fork
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardForks.map((item) => (
          <g key={item.index} onClick={() => dispatch(setFork(item.index))}>
            <ButtonAttributes
              attribute={item.display}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === fork ? "bg-gray-700" : "bg-white"}
              textColor={item.index === fork ? "text-white" : "text-gray-700"}
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradForks.map((item) => (
          <g key={item.index} onClick={() => dispatch(setFork(item.index))}>
            <ButtonAttributes
              attribute={item.display}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === fork ? "bg-gray-700" : "bg-white"}
              textColor={item.index === fork ? "text-white" : "text-gray-700"}
            />
          </g>
        ))}
      </div>
    </>
  );
}
