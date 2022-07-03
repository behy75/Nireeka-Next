import React from "react";
import AffiliateMSG from "./AffiliateMSG";
import ReactLoading from "react-loading";
export default function Affiliate() {
  return (
    <div className="mx-2">
      <AffiliateMSG />
      <div
        className="bg-bgUserPanel flex justify-center items-start"
        style={{ height: "100vh" }}
      >
        <span className="font-light text-3xl font-inter"> Coming Soon ...</span>
      </div>
    </div>
  );
}
