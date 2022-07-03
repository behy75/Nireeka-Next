import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setRotor } from "../../../app/configuratorSlice";

const standardRotors = [
  {
    index: 1,
    attribute: "rotor",
    title: "Shimano Deore SM-RT30",
    property: "Front Center Lock Rotor - 160mm",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/7uJ3WvXsalPF0kzXfjXgVOT13TdDS5rKyyUESvZk.jpg",
  },
];

const upgradRotors = [
  {
    index: 2,
    attribute: "rotor",
    title: "Shimano Deore XT RT-MT800",
    property: "Front Center Lock Rotor - 203mm",
    price: "$199",
    srcImg:
      "https://nireeka.com/storage/product/NzN6WjnIhNxqSxmvuAjR1VygSDh4on31fEN1peLI.jpg",
  },
];

export default function Rotor() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { rotor } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Rotor
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardRotors.map((item) => (
          <g key={item.index} onClick={() => dispatch(setRotor(item.index))}>
            <ButtonAttributes
              attribute={item.rotor}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === rotor ? "bg-gray-700" : "bg-white"}
              textColor={item.index === rotor ? "text-white" : "text-gray-700"}
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradRotors.map((item) => (
          <g key={item.index} onClick={() => dispatch(setRotor(item.index))}>
            <ButtonAttributes
              attribute={item.rotor}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === rotor ? "bg-gray-700" : "bg-white"}
              textColor={item.index === rotor ? "text-white" : "text-gray-700"}
            />
          </g>
        ))}
      </div>
    </>
  );
}
