import React from "react";
// import BikesTable from "../orders/BikesTable";
import ReportsMSG from "./ReportsMSG";

export default function Reports() {
  return (
    <div className="mx-2">
      <ReportsMSG />
      <div
        className="bg-bgUserPanel flex justify-center items-start"
        style={{ height: "100vh" }}
      >
        <span className="font-light text-3xl font-inter"> Coming Soon ...</span>
      </div>
    </div>
  );
}
