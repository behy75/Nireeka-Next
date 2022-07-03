import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Address from "../../components/CheckOut/Address";
import ShoppingCart from "../../components/CheckOut/ShoppingCart";
import MainHeader from "../../components/Header/MainHeader";
import Footer from "../../components/StaticPages/Footer";
import Header from "../../components/StaticPages/Header";

export default function Checkout() {
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/checkout") {
      localStorage.removeItem("pathname");
    }
  }, [pathname]);

  return (
    <>
      {/* <MainHeader /> */}
      <div className="grid grid-cols-6 gap-1 md:pt-6 pb-6 md:pb-12">
        <div className="col-span-6 sm:col-span-3 lg:col-span-4 mx-2 sm:mx-4">
          <Address />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <div className="bg-gray-100 w-full sm:rounded-tl-lg shadow-lg">
            <ShoppingCart />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
