import React from "react";

export default function AllUpdates() {
  return (
    <div className="w-full pt-12 sm:pt-16 bg-white rounded-3xl my-5 shadow-sm border border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Trusted by Bike Riders from over 65 Country
          </h2>
          <p className="mt-3 text-xl font-light text-gray-500 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-light text-gray-500">
                    Dashboard version (Beta)
                  </dt>
                  <dd className="order-1 text-5xl font-light text-indigo-600">
                    3.1.1
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-light text-gray-500">
                    NSD Setting
                  </dt>
                  <dd className="order-1 text-5xl font-light text-indigo-600">
                    1.0.0
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-light text-gray-500">
                    Firmware
                  </dt>
                  <dd className="order-1 text-5xl font-light text-indigo-600">
                    1.0.0
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
