import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import React from "react";

export default function BikePrice() {
  const router = useRouter();
  const bikeId = router.query.bikeId;
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-1 border-b-2 border-gray-100">
          <div className="flex items-center sm:px-6 col-span-4 sm:col-span-6 xl:col-span-8">
            <span className="font-inter font-light text-sm sm:text-lg">
              {`Nireeka Nyx`}
            </span>
          </div>
          <div className="col-span-8 sm:col-span-6 xl:col-span-4 xl:mx-4">
            <div className="flex justify-start pb-1">
              <span className="text-xs sm:text-base font-normal font-inter">
                $1999 + $200 = $2199
              </span>
            </div>
            <div className="flex justify-start">
              <span className="text-xs font-medium text-gray-600 font-dosis italic">
                Base Price + Equipment Price = Total Price
              </span>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
}
