import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setMotor } from "../../../app/configuratorSlice";

const standardMotors = [
  {
    index: 1,
    attribute: "motor",
    title: "750W Motor",
    property: "Bafang G510.1000W.C",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/0zqMPO2BfXlwEKcelkXPpFjN3z8Rs5wUMy4uJPwv.jpg",
  },
];

const upgradMotors = [
  {
    index: 2,
    attribute: "motor",
    title: "1500W Motor",
    property: "Bafang G510.750W.C",
    price: "$99",
    srcImg:
      "https://nireeka.com/storage/product/0zqMPO2BfXlwEKcelkXPpFjN3z8Rs5wUMy4uJPwv.jpg",
  },
];

export default function Motor() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { motor } = state.configurator;

  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE MOTOR
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardMotors.map((item) => (
          <g key={item.index} onClick={() => dispatch(setMotor(item.index))}>
            <ButtonAttributes
              attribute={item.Motor}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === motor ? "bg-gray-700" : "bg-white"}
              textColor={item.index === motor ? "text-white" : "text-gray-700"}
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradMotors.map((item) => (
          <g key={item.index} onClick={() => dispatch(setMotor(item.index))}>
            <ButtonAttributes
              attribute={item.Motor}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === motor ? "bg-gray-700" : "bg-white"}
              textColor={item.index === motor ? "text-white" : "text-gray-700"}
            />
          </g>
        ))}
      </div>
    </>
  );
}
