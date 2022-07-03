import Link from "next/link";
import React from "react";
import Footer from "../../components/StaticPages/Footer";
import Header from "../../components/StaticPages/Header";
import RrPolicy from "../../components/StaticPages/RRPolicy";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <div className="">
        <RrPolicy />
      </div>
      {/* <Footer /> */}
    </>
  );
}
