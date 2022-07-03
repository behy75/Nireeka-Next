import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bike from "../../components/Configurator/Bike";
import BikePrice from "../../components/Configurator/BikePrice";
import ConfiguratorHeader from "../../components/Configurator/ConfiguratorHeader";
import ConfiguredBikeDetails from "../../components/Configurator/ConfiguredBikeDetails";
import Modals from "../../components/Configurator/Modals";
import SelectItems from "../../components/Configurator/SelectItems";
import GearIcin from "../../public/images/gear.png";

export default function Configurator() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state);
  let { isAuth } = state.auth;
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const router = useRouter();
  const bikeId = router.query.bikeId;

  useEffect(() => {
    if (pathname === "/configurator") {
      localStorage.removeItem("pathname");
    }
  }, [pathname]);

  const handleSubmitForm = ({}) => {
    if (!isAuth) {
      setSelectedItem(1);
      setOpen(true);
    }
    if (isAuth) {
      router.push("/checkout");
    }
  };

  return (
    <div className="h-screen">
      {open && (
        <div>
          <Modals
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setOpen={setOpen}
            open={open}
          />
        </div>
      )}
      <ConfiguratorHeader />
      <BikePrice />
      <div className="relative grid grid-cols-12 gap-1">
        <div className="flex z-10 absolute left-1 sm:mx-10 xl:top-1 hover:underline cursor-pointer">
          <div className="w-4 h-4 mx-1">
            <Image alt="gear" className="w-auto" src={GearIcin} />
          </div>
          <div>
            <span
              onClick={() => {
                setSelectedItem(2);
                setOpen(true);
              }}
              className="text-xs sm:text-sm font-light dont-inter text-gray-500 hover:text-gray-400"
            >
              Full Specifications
            </span>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-8">
          <div className="flex flex-col xl:flex-row-reverse justify-center items-center">
            <Bike />
            <div className="hidden sm:block">
              <ConfiguredBikeDetails />
              <div className="flex mx-10 z-50 cursor-pointer">
                <span className="text-lg font-light dont-inter text-gray-500 hover:text-gray-400">
                  + ADD TO COMPARISION
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 xl:col-span-4">
          <SelectItems />
          <div className="flex justify-center items-center">
            <div
              onClick={handleSubmitForm}
              className="my-1 sm:my-2 mx-2 py-2 flex justify-center items-center cursor-pointer w-full border rounded-lg border-nireekaGreen text-nireekaGreen hover:text-white hover:bg-nireekaGreen"
            >
              <span className="font0inter font-light text-xs sm:text-sm">
                SAVE & CONTINUE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
