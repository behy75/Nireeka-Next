import { useRouter } from "next/router";
import React, { useState } from "react";
import WorldFlag from "../../public/images/900_WorldFlag_world-map-146505.png";
import Calculator from "./Calculator";
import { useDispatch, useSelector } from "react-redux";
import { countryPending } from "../../app/homePageSlice";
const backdropStyle = {
  width: "100%",
  position: "fixed",
  height: "100vh",
  backgroundColor: "#d5d5d51a",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  zIndex: "1",
};
const modalOverlay = {
  zIndex: "1000",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  minHeight: "85vh",
  overflowY: "scroll",
};

export default function Country({ countries, products }) {
  const [idCountry, setIdCountry] = useState(35);
  const [idProduct, setIdProduct] = useState(5000000);
  const [calculate, setCalculate] = useState({
    idProduct: idProduct,
    idCountry: idCountry,
  });
  const router = useRouter();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setCalculate({ idProduct: idProduct, idCountry: idCountry });
    const data = { idProduct, idCountry };
    dispatch(countryPending(data));
    setOpen(false);
  };
  const closeBackdrop = () => {
    setCalculate({ idProduct: idProduct, idCountry: idCountry });
    const data = { idProduct, idCountry };
    dispatch(countryPending(data));
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <div className="px-4 py-8 border-b border-gray-200 lg:pt-12 lg:pb-16 customGradient">
        <div className="flex flex-wrap justify-center w-full px-2 mx-auto lg:w-8/12 ">
          <div className="w-full lg:w-8/12">
            <h4 className="font-light text-center text-gray-500 font-dosis mt-4 ">
              {`We're shipping to 65+ countries! Click the link below to find out if your country is included.`}
            </h4>
            <div className="flex justify-center mx-auto w-full md:w-1/2 pb-4">
              <button
                onClick={() =>
                  router.push("/help-center/topic/18/do-you-ship-to-my-country")
                }
                className="flex justify-center w-64 lg:w-52 underline mx-auto mt-5 text-sm px-1 font-light hover:text-orange-400"
              >
                {` Countries List`}
              </button>
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="flex justify-center w-64 lg:w-52 underline mx-auto mt-5 text-sm px-1 font-light hover:text-orange-400  "
              >
                {`Shipping Cost Calculator  `}
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {open ? <div style={backdropStyle} onClick={closeBackdrop}></div> : ""}
      {open && (
        <>
          <div
            style={modalOverlay}
            className=" bg-white border border-gray-400 rounded-md"
          >
            <button
              onClick={closeModal}
              className=" absolute right-4 top-3 text-gray-500 font-light hover:text-red-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Calculator countries={countries} products={products} />
          </div>
        </>
      )}
    </div>
  );
}
