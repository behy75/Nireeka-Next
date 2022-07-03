import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setHandlebar } from "../../../app/configuratorSlice";

const standardHandlebars = [
  {
    index: 1,
    attribute: "handlebar",
    title: "Alloy Handlebar",
    property: "6061 Aluminum",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/sOwWhy629NguBsoptsd5EXDx8vmhrfEuec8Fwfza.jpg",
  },
];

const upgradHandlebars = [
  {
    index: 2,
    attribute: "handlebar",
    title: "Carbonfiber Handlebar",
    property: "3K Carbon Fiber material",
    price: "$59",
    srcImg:
      "https://nireeka.com/storage/product/VKh8B20mkzQQGt9FuNHJpTQNqZeItsHYHogGa4Kg.jpg",
  },
];

export default function Handlebar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { handlebar } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Handlebar
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardHandlebars.map((item) => (
          <g
            key={item.index}
            onClick={() => dispatch(setHandlebar(item.index))}
          >
            <ButtonAttributes
              attribute={item.handlebar}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === handlebar ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === handlebar ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradHandlebars.map((item) => (
          <g
            key={item.index}
            onClick={() => dispatch(setHandlebar(item.index))}
          >
            <ButtonAttributes
              attribute={item.handlebar}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === handlebar ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === handlebar ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
    </>
  );
}
