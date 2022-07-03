import Link from "next/link";
import React from "react";
import ConfiguratorMain from "../../components/Configurator/MainConfigurator";

function Configurator({ configurator }) {
  return (
    <>
      <ConfiguratorMain configurator={configurator} />
    </>
  );
}

export default Configurator;
export const getStaticProps = async () => {
  // let data = await getData();
  const res = await fetch(`http://nireeka.com/api/configurator`);
  const configurator = await res.json();
  // console.log("homePageData", JSON.stringify(data, undefined, 4));

  return {
    props: { configurator },
  };
};
