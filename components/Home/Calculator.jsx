import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryPending } from "../../app/homePageSlice";
import ReactLoading from "react-loading";
const Calculator = ({ countries, products }) => {
  const router = useRouter();
  const [idCountry, setIdCountry] = useState(35);
  const [idProduct, setIdProduct] = useState(5000000);
  const [loading, setLoading] = useState(false);

  const [calculate, setCalculate] = useState({
    idProduct: idProduct,
    idCountry: idCountry,
  });
  const state = useSelector((state) => state);

  let { countryData, countryReqSuccess } = state.homePage;
  console.log("countryData", countryData);
  const dispatch = useDispatch();
  const handleSubmitForm = (calculate) => {
    setCalculate({ idProduct: idProduct, idCountry: idCountry });
    debugger;
    const data = { idProduct, idCountry };
    dispatch(countryPending(data));
    console.log("calculate", calculate);
    setLoading(true);
    debugger;
  };
  return (
    <div>
      <h3 className="font-light text-center pt-8 pb-4 text-3xl ">
        Shipping Cost Calculator
      </h3>
      <div className="flex justify-center w-900 mx-auto leading-10 font-light">
        <div className="w-1/2 mx-1">
          <label htmlFor="product" className="">
            product
          </label>
          <select
            id="product"
            name="product"
            className="appearance-none cursor-pointer relative block w-full px-3 md:py-1.5 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-orange-400 focus:border-orange-400 focus:z-10 md:text-sm"
            // defaultValue="male"
            onChange={(e) => setIdProduct(e.target.value)}
          >
            {products.data.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>

        <div className="w-1/2 mx-1 ">
          <label htmlFor="country" className=" ">
            country
          </label>
          <select
            id="country"
            name="country"
            className="appearance-none cursor-pointer relative block w-full px-3 md:py-1.5 placeholder-gray-300 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-orange-400 focus:border-orange-400 focus:z-10 md:text-sm"
            // defaultValue="male"
            // onChange={(data) => dispatch(setCountry(data ? data.label : null))}
            //   onChange={(data) => dispatch(setGender(data ? data.label : null))}
            onChange={(e) => setIdCountry(e.target.value)}
          >
            <option value="35">United States of America</option>
            <option value="4">Canada</option>
            <option value="13">Germany</option>
            <option value="17">Italy</option>
            <option value="28">Spain</option>
            <option value="1">Australia</option>
            <option value="0" disabled>
              {`--------`}
            </option>
            {countries.data.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className=" w-full mx-auto flex py-2 px-1.5 justify-center text-center">
        <button
          onClick={() => handleSubmitForm(calculate)}
          className=" bg-customColorNIR text-white w-900 py-1.5 border font-light border-gray-300 rounded-md focus:outline-none hover:ring-orange-400 hover:border-orange-400 hover:text-gray-800 hover:bg-white"
        >
          Check
        </button>
      </div>
      <div className="w-full mx-auto flex py-2 px-1.5 justify-center flex-col text-center mt-7">
        {loading && !countryData ? (
          <ReactLoading
            type="spin"
            color="rgb(209, 213, 219)"
            height={80}
            width={80}
            className="h-screen mx-auto py-100"
          />
        ) : (
          countryData && (
            <>
              <div>
                <h6 className="font-light text-gray-600 py-2">
                  Product:{" "}
                  <span className="text-gray-400">
                    {countryData.product.title}{" "}
                  </span>
                  <span className="text-green-500">
                    {countryData.product.price}
                  </span>
                </h6>
              </div>
              <div>
                <h6 className="font-light text-gray-600 py-2">
                  Country:{" "}
                  <span className="text-gray-400">{countryData.country}</span>
                </h6>
              </div>
              <div>
                <h6 className="font-light text-gray-600 py-2">
                  Courier:{" "}
                  <span className="text-gray-400">{countryData.courier}</span>
                </h6>
              </div>
              <div>
                <h6 className="font-light text-gray-600 py-2">
                  Shipping Cost:{" "}
                  <span className="text-gray-400">
                    {countryData.shipping_cost}
                  </span>
                </h6>
              </div>
              <div>
                <h6 className="font-light text-gray-600 py-2">
                  VAT/Duties*:{" "}
                  <span className="text-gray-400">{countryData.vat}</span>
                </h6>
              </div>
              <div className="mt-8 py-4">
                <small className="font-light text-gray-600  ">
                  {`* If %0, you may be charged by your customs for
                  Tax&amp;duties. Please check with the authorities. The US and
                  EU customers don't need to pay any additional VAT. The fees
                  will be covered by Nireeka.`}
                </small>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
