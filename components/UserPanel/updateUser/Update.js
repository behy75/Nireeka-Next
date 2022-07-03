import React from "react";
import AllUpdates from "./AllUpdates";
import UpdateHover from "./UpdateHover";
import UpdateMSG from "./UpdateMSG";

export default function Update() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="relative z-0 xl:flex md:pr-4 xl:pr-6 overflow-hidden sm:bg-bgUserPanel rounded-3xl sm:rounded-none"
    >
      <div className="xl:w-2/3 mx-2 md:mr-7">
        <div
        // className="lg:overflow-y-scroll lg:overflow-x-hidden lg:w-full lg:pr-6"
        // style={{ height: "calc(130vh - 300px)" }}
        >
          <UpdateMSG />
          <AllUpdates />
        </div>
      </div>
      <div className="hidden fixed right-0 xl:flex xl:flex-col h-full xl:w-1/4 flex-shrink-0 overflow-y-auto mx-4 md:mr-7 xl:mr-0">
        <div className="bg-white py-4 px-2 w-full h-full shadowe sm:px-10 rounded-tl-3xl border border-r-0 border-gray-200">
          <UpdateHover />
        </div>
      </div>
    </div>
  );
}
