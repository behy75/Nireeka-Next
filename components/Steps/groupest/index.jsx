import ButtonAttributes from "../../Atoms/ButtonAttributes";
import { useSelector, useDispatch } from "react-redux";
import { setGroupest } from "../../../app/configuratorSlice";

const standardGroupests = [
  {
    index: 1,
    attribute: "groupest",
    title: "Shimano Acera",
    property: "M3000 1x9S",
    price: "$0",
    srcImg:
      "https://nireeka.com/storage/product/qzO7JyzMpgcMLD9k6mXLz4XTdU5q8im7msCtAs2K.jpg",
  },
];

const upgradGroupests = [
  {
    index: 2,
    attribute: "groupest",
    title: "Magnesium Air Fork",
    property: "",
    price: "$199",
    srcImg:
      "https://nireeka.com/storage/product/5Z6Qr87L1e7eRyNc7G4DNpt8oWdJanEZZrFE8wvw.jpg",
  },
  {
    index: 3,
    attribute: "groupest",
    title: "Shimano XT",
    property: "M5100 1x10",
    price: "$M8100 1x11",
    srcImg:
      "https://nireeka.com/storage/product/kI8ZV1boASkXrJVByUSsh2A386O1QmTdWa7Ebcdg.jpg",
  },
];

export default function Groupest() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let { groupest } = state.configurator;
  return (
    <>
      <label htmlFor="name" className="block text-sm font-light text-gray-700">
        AVAILABLE Groupest
      </label>
      <div className="mt-4">
        <p className="ml-2 text-sm font-light text-gray-500">Standard</p>
        {standardGroupests.map((item) => (
          <g key={item.index} onClick={() => dispatch(setGroupest(item.index))}>
            <ButtonAttributes
              attribute={item.groupest}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === groupest ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === groupest ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
      <div className="mb-4">
        <p className="ml-2 text-sm font-light text-gray-500">Upgrades</p>
        {upgradGroupests.map((item) => (
          <g key={item.index} onClick={() => dispatch(setGroupest(item.index))}>
            <ButtonAttributes
              attribute={item.groupest}
              title={item.title}
              property={item.property}
              price={item.price}
              srcImg={item.srcImg}
              bgColor={item.index === groupest ? "bg-gray-700" : "bg-white"}
              textColor={
                item.index === groupest ? "text-white" : "text-gray-700"
              }
            />
          </g>
        ))}
      </div>
    </>
  );
}
